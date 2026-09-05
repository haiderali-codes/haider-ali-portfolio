"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Resume", "/resume"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href) || (href === "/work" && pathname.startsWith("/portfolio"));

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>Senior Software Engineer</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={isActive(href) ? "nav-link active" : "nav-link"}>{label}</Link>
          ))}
          <span className="nav-divider" />
          <ThemeToggle />
          <Link href="/contact" className="contact-nav">Contact →</Link>
        </nav>

        <div className="mobile-controls">
          <ThemeToggle />
          <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(v => !v)}>
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={open ? "mobile-menu open" : "mobile-menu"}>
        <nav className="site-container" aria-label="Mobile navigation">
          {[...links, ["Contact", "/contact"] as const].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={isActive(href) ? "mobile-nav-link active" : "mobile-nav-link"}>
              <span>{label}</span><span>↗</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
