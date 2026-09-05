import Link from "next/link";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedWork() {
  return <section className="section site-container">
    <Reveal><SectionHeading eyebrow="FEATURED WORK" title="Selected products" accent="and systems." /></Reveal>
    <div className="featured-grid">
      {projects.slice(0, 3).map((p) => <Reveal key={p.slug}><Link href="/work" className="featured-card"><div className="project-visual"><span>{p.visualLabel}</span><small>{p.category}</small></div><div className="featured-body"><small>{p.organisation ?? p.status.replace("-", " ")}</small><h3>{p.title}</h3><p>{p.description}</p><span className="text-link">View Work →</span></div></Link></Reveal>)}
    </div>
  </section>;
}
