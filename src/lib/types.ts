/**
 * Content blocks. `placeholder` is deliberate: unknown facts render as a visible
 * "to be added" note rather than being invented.
 */
export type Block =
  | { kind: "text"; value: string }
  | { kind: "list"; items: string[] }
  | { kind: "facts"; items: { label: string; value: string }[] }
  | { kind: "figure"; caption: string; src?: string; alt?: string }
  | { kind: "placeholder"; value: string };

export const CASE_SECTIONS = [
  { key: "problem", title: "Problem" },
  { key: "context", title: "Business Context" },
  { key: "data", title: "Data" },
  { key: "approach", title: "Approach" },
  { key: "tools", title: "Tools" },
  { key: "analysis", title: "Analysis" },
  { key: "visualizations", title: "Visualizations" },
  { key: "results", title: "Results" },
  { key: "implications", title: "Business & Practical Implications" },
  { key: "limitations", title: "Limitations" },
  { key: "takeaways", title: "Key Takeaways" },
] as const;

export type CaseSectionKey = (typeof CASE_SECTIONS)[number]["key"];

export type Project = {
  slug: string;
  index: string;
  org: string;
  title: string;
  role?: string;
  period?: string;
  domain: string;
  /** One line, shown on the home page. */
  summary: string;
  /** Longer standfirst, shown at the top of the case study. */
  standfirst: string;
  tools: string[];
  featured: boolean;
  sections: Record<CaseSectionKey, Block[]>;
};
