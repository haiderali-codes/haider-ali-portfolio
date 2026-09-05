import { whyMe } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyMe() {
  return <section className="section section-muted">
    <div className="site-container">
      <Reveal><SectionHeading eyebrow="WHY ME" title="What sets me apart" accent="in production teams." /></Reveal>
      <div className="card-grid why-grid">
        {whyMe.map((item, i) => <Reveal key={item.title} className={`delay-${(i % 3) + 1}`}><article className="why-card"><div className="feature-icon">{item.icon}</div><div><h3>{item.title}</h3><p>{item.text}</p></div></article></Reveal>)}
      </div>
    </div>
  </section>;
}
