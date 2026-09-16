import { capabilities } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <SectionHeading index="02" title="Capabilities">
          Business framing on one side, engineering on the other. The useful part is the overlap.
        </SectionHeading>

        <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="border-t border-line pt-6">
                <h3 className="font-serif text-xl text-bone">{group.title}</h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-[0.95rem] text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
