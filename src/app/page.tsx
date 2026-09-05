import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { Services } from "@/components/home/Services";
import { WhyMe } from "@/components/home/WhyMe";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return <main><Hero /><TechMarquee /><Services /><WhyMe /><FeaturedWork /><FinalCTA /></main>;
}
