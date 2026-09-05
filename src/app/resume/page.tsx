import type { Metadata } from "next";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Resume", description: "Resume of Haider Ali — Senior Software Engineer and Frontend Team Lead." };

export default function ResumePage() {
  return <main><section className="resume-page site-container"><span className="eyebrow">RESUME</span><h1>{profile.name}</h1><p>{profile.subtitle} · 6+ Years · Open to Remote Work</p><a className="button button-primary" href={profile.resumePath} download>Download PDF ↓</a><ResumePreview /><div className="resume-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Hire Me — I&apos;m Available →</a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section></main>;
}
