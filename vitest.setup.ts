import "@testing-library/jest-dom/vitest";

// ---------------------------------------------------------------------------
// navigator.clipboard shim
// ---------------------------------------------------------------------------
// Problem: userEvent.setup() calls attachClipboardStubToView which uses
// Object.defineProperty to replace navigator.clipboard with a getter-only
// accessor. This wipes any vi.fn() spy set in beforeEach via Object.assign.
// Fix: intercept Object.defineProperty for navigator.clipboard and redirect
// it to keep pointing at our own _clipboard slot, which Object.assign CAN
// update (via the setter we provide). This lets the test's beforeEach spy
// survive userEvent's clipboard takeover.
// ---------------------------------------------------------------------------
let _clipboard: { writeText?: (...args: unknown[]) => unknown } = {
  writeText: () => Promise.resolve(),
};

// Install our accessor first (configurable so userEvent can re-define it)
const _origDefineProperty = Object.defineProperty.bind(Object);
_origDefineProperty(navigator, "clipboard", {
  get: () => _clipboard,
  set: (v: typeof _clipboard) => {
    _clipboard = v;
  },
  configurable: true,
});

// Intercept any subsequent Object.defineProperty calls on navigator.clipboard
// (userEvent does exactly one such call per setup() invocation)
Object.defineProperty = function <T>(
  obj: T,
  prop: PropertyKey,
  descriptor: PropertyDescriptor & ThisType<unknown>
): T {
  if (obj === navigator && prop === "clipboard" && "get" in descriptor) {
    // userEvent is installing its stub as a getter — keep our slot instead
    return _origDefineProperty(obj, prop, {
      get: () => _clipboard,
      set: (v: typeof _clipboard) => {
        _clipboard = v;
      },
      configurable: true,
    }) as T;
  }
  return _origDefineProperty(obj, prop, descriptor) as T;
} as typeof Object.defineProperty;

// ---------------------------------------------------------------------------
// IntersectionObserver shim (not implemented in jsdom; used by framer-motion)
// ---------------------------------------------------------------------------
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
_origDefineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverStub,
});

// ---------------------------------------------------------------------------
// window.matchMedia shim (not in jsdom; used by framer-motion useReducedMotion)
// ---------------------------------------------------------------------------
_origDefineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {
      return false;
    },
  }),
});
