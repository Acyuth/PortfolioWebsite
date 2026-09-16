import type { Block } from "@/lib/types";

function Placeholder({ value }: { value: string }) {
  return (
    <div className="rounded-sm border border-dashed border-gold/35 bg-gold/[0.04] px-5 py-4">
      <p className="label text-gold/80">To be added</p>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{value}</p>
    </div>
  );
}

function FigureWell({ caption, src, alt }: { caption: string; src?: string; alt?: string }) {
  return (
    <figure className="space-y-3">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? caption}
          className="w-full rounded-sm border border-line"
          loading="lazy"
        />
      ) : (
        <div
          className="dot-grid flex aspect-16/10 items-end rounded-sm border border-line bg-ink-panel p-5"
          role="img"
          aria-label={`Placeholder for figure: ${caption}`}
        >
          <span className="label rounded-sm bg-ink/80 px-2.5 py-1.5 text-muted">
            Figure placeholder
          </span>
        </div>
      )}
      <figcaption className="text-sm leading-relaxed text-muted">{caption}</figcaption>
    </figure>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "text":
            return (
              <p key={i} className="text-muted-strong">
                {block.value}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-4 text-muted-strong">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-gold/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "facts":
            return (
              <dl key={i} className="divide-y divide-line border-y border-line">
                {block.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-8"
                  >
                    <dt className="label shrink-0 pt-1 text-muted sm:w-44">{item.label}</dt>
                    <dd className="text-bone">{item.value}</dd>
                  </div>
                ))}
              </dl>
            );

          case "figure":
            return <FigureWell key={i} {...block} />;

          case "placeholder":
            return <Placeholder key={i} value={block.value} />;
        }
      })}
    </div>
  );
}
