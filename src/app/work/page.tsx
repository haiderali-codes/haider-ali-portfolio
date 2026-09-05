import type { Metadata } from "next";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = { title: "Work", description: "Selected eCommerce, full-stack, mobile and AI work by Haider Ali." };

export default function WorkPage() {
  return <main><section className="page-hero site-container work-hero"><span className="eyebrow">PORTFOLIO</span><h1>Products I&apos;ve <em>shipped.</em></h1><p>Production products and clearly-labelled personal AI work — with the architecture and technology context behind each project.</p><ProjectGrid /></section><FinalCTA /></main>;
}
