import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 text-3xl font-extrabold">This page wandered off.</h1>
        <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
