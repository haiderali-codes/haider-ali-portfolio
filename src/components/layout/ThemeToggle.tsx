"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const shouldLight = stored === "light";
    setLight(shouldLight);
    document.documentElement.dataset.theme = shouldLight ? "light" : "dark";
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    window.localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label={light ? "Switch to dark mode" : "Switch to light mode"}>
      <span aria-hidden>{light ? "☾" : "☀"}</span>
    </button>
  );
}
