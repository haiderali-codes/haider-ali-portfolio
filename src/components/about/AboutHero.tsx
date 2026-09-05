import Image from "next/image";
import { profile } from "@/data/profile";

export function AboutHero() {
  return (
    <section className="page-hero site-container about-hero">
      <div className="about-copy">
        <span className="eyebrow">ABOUT ME</span>
        <h1>I don&apos;t just write code.<br />I <em>build products.</em></h1>
        <p>{profile.about}</p>
        <div className="availability-card">
          <strong><i />Open to Remote Opportunities Worldwide</strong>
          <div className="chips"><span>Full-Time</span><span>Contract</span><span>Project-Based</span></div>
          <small>Timezone: {profile.timezone} · Flexible overlap with international teams</small>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>Hire Me — I&apos;m Available</a>
          <a className="button button-secondary" href={profile.resumePath} target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </div>
      <Image
        className="profile-photo"
        src="/profile.jpeg"
        width={1024}
        height={860}
        priority
        sizes="(max-width: 820px) 100vw, 34vw"
        alt="Haider Ali"
      />
    </section>
  );
}
