import { ImageResponse } from "next/og";

// Code-generated Open Graph image (link-preview card). Rendered at build time
// from this component, so no static PNG is needed and it stays in sync.
// NOTE: colors are literal hex (not the CSS tokens) because next/og renders via
// Satori, which cannot read CSS variables. Keep these in sync with globals.css.
export const alt = "Nihal Puse — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0d1117",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "10px",
            display: "flex",
            background: "linear-gradient(90deg, #2dd4bf, #6366f1)",
          }}
        />

        <div style={{ display: "flex", color: "#2dd4bf", fontSize: 30, letterSpacing: 4 }}>
          {"// FULL-STACK ENGINEER"}
        </div>

        <div style={{ display: "flex", marginTop: 24, fontSize: 124, fontWeight: 800, letterSpacing: -2 }}>
          <span style={{ color: "#e6edf3", marginRight: 28 }}>Nihal</span>
          <span style={{ color: "#6366f1" }}>Puse</span>
        </div>

        <div style={{ display: "flex", color: "#9aa4b2", fontSize: 38, marginTop: 28, maxWidth: 940 }}>
          {"Production web apps with React, Next.js, TypeScript and Python."}
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: 52 }}>
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: "#2dd4bf",
              marginRight: 14,
            }}
          />
          <div style={{ display: "flex", color: "#2dd4bf", fontSize: 28, letterSpacing: 2 }}>
            Open to full-stack roles
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
