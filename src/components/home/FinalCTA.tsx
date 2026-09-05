import Link from "next/link";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return <section className="cta-section"><div className="site-container"><Reveal><span className="eyebrow">OPEN TO REMOTE OPPORTUNITIES</span><h2>Let&apos;s build something great.</h2><p>Full-time, contract, or project-based — let&apos;s talk about the product and the engineering challenge.</p><div className="cta-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Email Me Directly</a><Link className="button button-secondary" href="/resume">View Resume</Link></div><div className="cta-meta"><span>{profile.timezone}</span><span>Full-Time</span><span>Contract</span><span>Project-Based</span></div></Reveal></div></section>;
}
