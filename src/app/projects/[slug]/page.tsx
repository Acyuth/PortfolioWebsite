import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/ui/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { CaseNav } from "@/components/work/CaseNav";
import { getAdjacentProjects, getProject, projects } from "@/content/projects";
import { CASE_SECTIONS } from "@/lib/types";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Case study not found" };

  return {
    title: `${project.title} — ${project.org}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.org}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article className="pb-24">
      <header className="shell pt-16 lg:pt-24">
        <Link
          href="/#work"
          className="label inline-flex items-center gap-2 text-muted transition-colors hover:text-gold"
        >
          <span aria-hidden="true">←</span> All work
        </Link>

        <div className="mt-14 flex items-center gap-4">
          <span aria-hidden="true" className="label text-line-strong">
            {project.index}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
          <p className="label text-gold">{project.domain}</p>
        </div>

        <p className="mt-8 font-display text-lg font-bold tracking-[0.02em] text-muted uppercase">
          {project.org}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-display leading-[1.1] text-bone">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-muted-strong">{project.standfirst}</p>

        <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {project.role ? (
            <div>
              <dt className="label text-muted">Role</dt>
              <dd className="mt-2 text-[0.95rem] text-bone">{project.role}</dd>
            </div>
          ) : null}
          {project.period ? (
            <div>
              <dt className="label text-muted">Period</dt>
              <dd className="mt-2 text-[0.95rem] text-bone">{project.period}</dd>
            </div>
          ) : null}
          <div>
            <dt className="label text-muted">Organisation</dt>
            <dd className="mt-2 text-[0.95rem] text-bone">{project.org}</dd>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <dt className="label text-muted">Tools</dt>
            <dd className="mt-2 text-[0.95rem] text-bone">{project.tools.join(", ")}</dd>
          </div>
        </dl>
      </header>

      <div className="shell mt-20 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          <CaseNav />
        </div>

        <div className="lg:col-span-9">
          <div className="max-w-[68ch] space-y-16 lg:space-y-20">
            {CASE_SECTIONS.map((section, i) => (
              <Reveal key={section.key}>
                <section id={section.key} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4 border-t border-line pt-5">
                    <span aria-hidden="true" className="label text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="label text-muted-strong">{section.title}</h2>
                  </div>
                  <div className="mt-8">
                    <Blocks blocks={project.sections[section.key]} />
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="More work" className="shell mt-28 border-t border-line pt-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {previous ? (
            <Link href={`/projects/${previous.slug}`} className="group block">
              <p className="label text-muted">← Previous</p>
              <p className="mt-3 font-serif text-xl text-bone transition-colors group-hover:text-gold-bright">
                {previous.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/projects/${next.slug}`} className="group block sm:text-right">
              <p className="label text-muted">Next →</p>
              <p className="mt-3 font-serif text-xl text-bone transition-colors group-hover:text-gold-bright">
                {next.title}
              </p>
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
