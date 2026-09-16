"use client";

import { useEffect, useState } from "react";
import { CASE_SECTIONS } from "@/lib/types";

export function CaseNav() {
  const [activeId, setActiveId] = useState<string>(CASE_SECTIONS[0].key);

  useEffect(() => {
    const sections = CASE_SECTIONS.map((section) =>
      document.getElementById(section.key),
    ).filter((node): node is HTMLElement => node !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Case study sections" className="lg:sticky lg:top-32">
      <p className="label hidden text-muted lg:block">Contents</p>
      {/* Horizontal scroller on small screens, vertical rail from lg up. */}
      <ol className="mt-0 flex gap-2 overflow-x-auto pb-2 lg:mt-5 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
        {CASE_SECTIONS.map((section, i) => {
          const current = activeId === section.key;
          return (
            <li key={section.key} className="shrink-0 lg:shrink">
              <a
                href={`#${section.key}`}
                aria-current={current ? "true" : undefined}
                className={`label flex items-center gap-3 rounded-full border px-3.5 py-2 whitespace-nowrap transition-colors lg:rounded-none lg:border-0 lg:border-l lg:px-4 lg:py-2.5 ${
                  current
                    ? "border-gold/60 bg-gold/10 text-bone lg:border-gold lg:bg-transparent"
                    : "border-line text-muted hover:text-bone lg:border-line"
                }`}
              >
                <span aria-hidden="true" className="hidden text-line-strong lg:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
