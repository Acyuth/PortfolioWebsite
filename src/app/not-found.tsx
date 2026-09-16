import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60svh] flex-col justify-center py-24">
      <p className="label text-gold">404</p>
      <h1 className="mt-8 max-w-2xl font-serif text-display leading-[1.1] text-bone">
        That page does not exist.
      </h1>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="label rounded-full bg-bone px-7 py-3.5 text-ink transition-colors hover:bg-gold-bright"
        >
          Home
        </Link>
        <Link
          href="/#work"
          className="label rounded-full border border-line-strong px-7 py-3.5 text-bone transition-colors hover:border-gold hover:text-gold"
        >
          View work
        </Link>
      </div>
    </section>
  );
}
