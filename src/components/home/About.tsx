import Link from "next/link";
import { certifications, education, experience, profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <div className="shell">
        <SectionHeading index="03" title="About" />

        <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6">
              {profile.about.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={
                    i === 0
                      ? "font-serif text-[clamp(1.2rem,1.9vw,1.5rem)] leading-[1.5] text-bone"
                      : "text-muted-strong"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="label text-gold">Experience</h3>
              <ol className="mt-8 space-y-10">
                {experience.map((role) => (
                  <li key={role.org} className="border-l border-line pl-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h4 className="font-serif text-xl text-bone">{role.org}</h4>
                      <p className="label text-muted">{role.period}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-strong">
                      {role.role} · {role.place}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {role.points.map((point) => (
                        <li key={point} className="text-[0.95rem] leading-relaxed text-muted">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/projects/${role.caseStudy}`}
                      className="label mt-4 inline-flex items-center gap-2 text-bone transition-colors hover:text-gold"
                    >
                      Case study <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <div>
              <h3 className="label text-gold">Education</h3>
              <ol className="mt-8 space-y-8">
                {education.map((entry) => (
                  <li key={entry.school} className="border-l border-line pl-6">
                    <h4 className="font-serif text-xl text-bone">{entry.school}</h4>
                    <p className="mt-1 text-sm text-muted-strong">{entry.degree}</p>
                    <p className="mt-1 text-sm text-muted">{entry.detail}</p>
                    <p className="label mt-3 text-muted">
                      {entry.period} · {entry.place}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12 border-t border-line pt-6">
              <h3 className="label text-muted">Coursework</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-strong">
                {profile.coursework}
              </p>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <h3 className="label text-muted">Certifications</h3>
              <ul className="mt-3 space-y-2">
                {certifications.map((certification) => (
                  <li key={certification} className="text-sm text-muted-strong">
                    {certification}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
