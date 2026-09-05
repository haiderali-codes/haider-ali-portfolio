import { coreStack, skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return <>
    <section className="section site-container"><Reveal><SectionHeading eyebrow="CORE STACK" title="What I'm" accent="best at" /></Reveal><div className="core-list">{coreStack.map((s, i) => <Reveal key={s.label} className={`delay-${(i % 3) + 1}`}><div className="core-row"><strong>{s.label}</strong><span>{s.level}</span></div></Reveal>)}</div></section>
    <section className="section section-muted"><div className="site-container"><Reveal><SectionHeading eyebrow="FULL STACK & TOOLS" title="Everything I" accent="build with" /></Reveal><div className="skill-groups">{skillGroups.map((g) => <Reveal key={g.title}><article className="skill-group"><h3>{g.title}</h3><div className="chips">{g.skills.map(s => <span key={s}>{s}</span>)}</div></article></Reveal>)}</div></div></section>
  </>;
}
