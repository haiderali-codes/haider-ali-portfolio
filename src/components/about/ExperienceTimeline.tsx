import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceTimeline() {
  return <section className="section site-container"><Reveal><SectionHeading eyebrow="EXPERIENCE" title="Career" accent="timeline" /></Reveal><div className="timeline">{experience.map((item, index) => <Reveal key={`${item.company}-${item.period}`}><article className="timeline-item"><div className="timeline-dot" /><div className="timeline-meta"><span>{item.period}</span></div><div className="timeline-card"><h3>{item.role}</h3><h4>{item.company}{item.location ? ` · ${item.location}` : ""}</h4><ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article></Reveal>)}</div></section>;
}
