"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function FloatingContact() {
  const [dismissed, setDismissed] = useState(false);
  return (
    <aside className="floating-contact" aria-label="WhatsApp contact">
      {!dismissed && (
        <div className="floating-note">
          <button onClick={() => setDismissed(true)} aria-label="Dismiss">×</button>
          <span>👋</span>
          <div><strong>Let&apos;s talk</strong><small>Chat with me on WhatsApp</small></div>
        </div>
      )}
      <a className="whatsapp-button" href={`https://wa.me/${profile.phoneHref.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">◉</a>
    </aside>
  );
}
