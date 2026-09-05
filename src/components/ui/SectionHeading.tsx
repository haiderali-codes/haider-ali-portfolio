export function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}{accent ? <> <span>{accent}</span></> : null}</h2>
    </div>
  );
}
