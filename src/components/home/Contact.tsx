import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  {
    label: "LinkedIn",
    value: "acyuth-gopalakrishnan",
    href: profile.links.linkedin,
    external: true,
  },
  { label: "GitHub", value: "Acyuth", href: profile.links.github, external: true },
  { label: "Résumé", value: "Download PDF", href: profile.resumePath, external: false },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32">
      <div className="shell">
        <SectionHeading index="04" title="Contact" />

        <Reveal>
          <p className="mt-12 max-w-3xl font-serif text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] text-bone">
            Open to business analyst, data analyst, business intelligence, and analytics
            consulting roles.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-16 grid gap-x-12 gap-y-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <div key={channel.label}>
                <dt className="label text-muted">{channel.label}</dt>
                <dd className="mt-2">
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="text-bone underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt className="label text-muted">Location</dt>
              <dd className="mt-2 text-muted-strong">{profile.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
