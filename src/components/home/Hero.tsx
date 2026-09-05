import Link from "next/link";
import { profile, stats } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero site-container">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability-pill"><span />{profile.availability}</div>
          <h1>{profile.heroLine1}<br /><em>{profile.heroAccent}</em><br />{profile.heroLine2}</h1>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>Hire Me — I&apos;m Available <span>→</span></a>
            <Link className="button button-secondary" href="/work">See My Work</Link>
          </div>
          <div className="stats-row">
            {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </div>
        <div className="terminal" aria-label="Engineering terminal illustration">
          <div className="terminal-bar"><div className="traffic"><i /><i /><i /></div><span>haider@dev — zsh</span></div>
          <div className="terminal-body">
            <p><b>$</b> init --stack=frontend+fullstack+ai --years=6</p>
            <p className="ok">✓ Angular + Next.js + Node.js ready</p>
            <p className="ok">✓ GraphQL + Redis + SSR connected</p>
            <p className="ok">✓ Mobile + eCommerce + LLM workflows ready</p>
            <p><b>$</b> deploy --target=production --optimize</p>
            <p className="muted">Building reliable product experiences...</p>
            <p className="ok">✓ CI/CD validation complete</p>
            <p><b>$</b> ship --regions=global --available=remote</p>
            <p className="ok">✓ Ready to build the next product</p>
            <span className="cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}
