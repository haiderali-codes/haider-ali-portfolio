import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>© 2026 · {profile.location} · Open to remote opportunities worldwide</p>
        </div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={`https://wa.me/${profile.phoneHref.replace("+", "")}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <Link href="/resume">CV</Link>
        </div>
      </div>
    </footer>
  );
}
