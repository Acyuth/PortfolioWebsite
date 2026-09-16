import Link from "next/link";
import { additionalProjects, featuredProjects } from "@/content/projects";
import type { Project } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectBand({ project }: { project: Project }) {
  return (
    <article className="group border-t border-line py-16 first:border-t-0 first:pt-4 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="flex items-start gap-6">
            <span
              aria-hidden="true"
              className="font-display text-5xl leading-none font-extrabold text-line-strong transition-colors duration-500 group-hover:text-gold/50"
            >
              {project.index}
            </span>
            <div className="space-y-2 pt-1">
              <p className="label text-gold">{project.domain}</p>
              <p className="text-sm text-bone">{project.org}</p>
              {project.role ? <p className="text-sm text-muted">{project.role}</p> : null}
              {project.period ? <p className="label text-muted">{project.period}</p> : null}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h3 className="font-serif text-title leading-[1.2] text-bone">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors duration-300 group-hover:text-gold-bright"
            >
              {project.title}
              {/* Makes the whole band clickable while keeping one accessible link. */}
              <span className="absolute inset-0" aria-hidden="true" />
            </Link>
          </h3>

          <p className="mt-5 max-w-2xl text-muted-strong">{project.summary}</p>

          <div
            className="dot-grid mt-9 flex aspect-16/10 items-end rounded-sm border border-line bg-ink-panel p-5 transition-colors duration-500 group-hover:border-line-strong sm:aspect-16/9"
            role="img"
            aria-label={`Visual placeholder for ${project.title}`}
          >
            <span className="label rounded-sm bg-ink/80 px-2.5 py-1.5 text-muted">
              Visual to be added
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {project.tools.map((tool) => (
                <li key={tool} className="label text-muted">
                  {tool}
                </li>
              ))}
            </ul>
            <span className="label flex items-center gap-2 text-bone transition-colors duration-300 group-hover:text-gold">
              Read case study
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-24 lg:py-32">
      <div className="shell">
        <SectionHeading index="01" title="Selected work">
          Three engagements where the analysis had to survive contact with a decision.
        </SectionHeading>

        <div className="mt-16 [&>article]:relative">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <ProjectBand project={project} />
            </Reveal>
          ))}
        </div>

        {additionalProjects.length > 0 ? (
          <Reveal className="mt-16">
            <div className="border-t border-line pt-10">
              <p className="label text-muted">Also</p>
              <ul className="mt-6">
                {additionalProjects.map((project) => (
                  <li key={project.slug} className="border-b border-line">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/row flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                    >
                      <span className="flex items-baseline gap-5">
                        <span aria-hidden="true" className="label text-line-strong">
                          {project.index}
                        </span>
                        <span>
                          <span className="block font-serif text-xl text-bone transition-colors group-hover/row:text-gold-bright">
                            {project.title}
                          </span>
                          <span className="mt-1 block text-sm text-muted">
                            {project.org} · {project.domain}
                          </span>
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="label shrink-0 text-muted transition-all duration-300 group-hover/row:translate-x-1 group-hover/row:text-gold"
                      >
                        Read →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
