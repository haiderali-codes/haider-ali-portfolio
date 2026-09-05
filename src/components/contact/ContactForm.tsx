"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/profile";

export function ContactForm() {
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const type = String(data.get("type") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setError("Please complete your name, email and message.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`${type ? `${type} — ` : ""}Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nEngagement: ${type || "Not specified"}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid">
      <label>Name *<input name="name" type="text" placeholder="Your name" autoComplete="name" /></label>
      <label>Email *<input name="email" type="email" placeholder="you@company.com" autoComplete="email" /></label>
    </div>
    <label>Engagement type<select name="type" defaultValue=""><option value="">Select type (optional)</option><option>Full-time</option><option>Contract</option><option>Project-based</option><option>Consultation</option></select></label>
    <label>Message *<textarea name="message" rows={7} placeholder="Tell me about your project, role, or what you're looking for..." /></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="button button-primary form-submit" type="submit">Send Message →</button>
    <small className="form-note">This opens your email client with the message pre-filled, so nothing is silently discarded.</small>
  </form>;
}
