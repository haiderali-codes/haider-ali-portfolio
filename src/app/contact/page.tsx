import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact", description: "Contact Haider Ali for Senior Software Engineer, frontend lead, full-stack and remote opportunities." };

export default function ContactPage() {
  const whatsapp = `https://wa.me/${profile.phoneHref.replace("+", "")}`;
  return <main><section className="contact-page site-container"><span className="eyebrow">GET IN TOUCH</span><h1>Let&apos;s work together.</h1><p className="contact-intro">Have a role to fill or a product challenge to solve? Send a message or reach out directly.</p><div className="contact-layout"><div className="quick-contact"><span className="sub-eyebrow">QUICK CONTACT</span><a href={`mailto:${profile.email}`}><i>✉</i><div><strong>Email directly</strong><small>{profile.email}</small></div></a><a href={whatsapp} target="_blank" rel="noreferrer"><i>◉</i><div><strong>WhatsApp</strong><small>{profile.phone}</small></div></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><i>↗</i><div><strong>LinkedIn</strong><small>View profile ↗</small></div></a><a href={profile.github} target="_blank" rel="noreferrer"><i>⌘</i><div><strong>GitHub</strong><small>haiderali-codes ↗</small></div></a></div><ContactForm /></div></section></main>;
}
