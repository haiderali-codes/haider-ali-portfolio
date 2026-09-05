import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Skills } from "@/components/about/Skills";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = { title: "About", description: "About Haider Ali — Senior Software Engineer, Team Lead and full-stack engineer based in Lahore, Pakistan." };

export default function AboutPage() { return <main><AboutHero /><Skills /><ExperienceTimeline /><FinalCTA /></main>; }
