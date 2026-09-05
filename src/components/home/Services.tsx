import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return <section className="section site-container">
    <Reveal><SectionHeading eyebrow="WHAT I DO" title="End-to-end development," accent="nothing left half-built." /></Reveal>
    <div className="card-grid service-grid">
      {services.map((s, i) => <Reveal key={s.title} className={`delay-${(i % 3) + 1}`}><article className="feature-card"><div className="feature-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></article></Reveal>)}
    </div>
  </section>;
}
