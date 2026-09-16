import Link from "next/link";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Single soft light source, top-left — depth without decoration. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-gold/[0.07] blur-[120px]"
      />

      <div className="shell relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20 sm:py-24 lg:py-28">
        <div className="rise flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-10 bg-gold" />
          <p className="label text-gold">{profile.eyebrow}</p>
        </div>

        <h1 className="mt-10 font-display uppercase">
          <span
            className="rise block text-given leading-[0.88] font-extrabold tracking-[-0.03em] text-bone"
            style={{ animationDelay: "80ms" }}
          >
            {profile.firstName}
          </span>
          <span
            className="rise mt-4 block text-family leading-none font-semibold tracking-[0.1em] text-muted sm:mt-5"
            style={{ animationDelay: "140ms" }}
          >
            {profile.lastName}
          </span>
        </h1>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="rise lg:col-span-5" style={{ animationDelay: "220ms" }}>
            <ul className="space-y-4 border-t border-line pt-6">
              {profile.credentials.map((credential) => (
                <li key={credential} className="text-[0.95rem] leading-relaxed text-muted">
                  {credential}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise lg:col-span-7" style={{ animationDelay: "300ms" }}>
            <div className="border-t border-line pt-6">
              <p className="max-w-xl font-serif text-[clamp(1.3rem,2.2vw,1.75rem)] leading-[1.4] text-bone">
                {profile.statement}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#work"
                  className="label rounded-full bg-bone px-7 py-3.5 text-ink transition-colors hover:bg-gold-bright"
                >
                  View work
                </Link>
                <a
                  href={profile.resumePath}
                  className="label rounded-full border border-line-strong px-7 py-3.5 text-bone transition-colors hover:border-gold hover:text-gold"
                >
                  Résumé
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
