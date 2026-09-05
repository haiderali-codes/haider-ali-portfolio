import { marqueePrimary, marqueeSecondary } from "@/data/skills";

function Track({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return <div className={`marquee-track ${reverse ? "reverse" : ""}`}>{doubled.map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div>;
}

export function TechMarquee() {
  return <section className="marquee-wrap" aria-label="Technology stack">
    <div className="marquee"><Track items={marqueePrimary} /></div>
    <div className="marquee marquee-alt"><Track items={marqueeSecondary} reverse /></div>
  </section>;
}
