import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  title: string;
  id?: string;
  children?: ReactNode;
};

export function SectionHeading({ index, title, id, children }: SectionHeadingProps) {
  return (
    <div className="border-t border-line pt-6">
      <div className="flex items-baseline gap-4">
        <span className="label text-gold">{index}</span>
        <h2 id={id} className="label text-muted-strong">
          {title}
        </h2>
      </div>
      {children ? (
        <p className="mt-8 max-w-2xl font-serif text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.35] text-bone">
          {children}
        </p>
      ) : null}
    </div>
  );
}
