import { Metadata } from "next";
import Reveal from "@/modules/core/components/Reveal";
import AboutHero from "@/modules/about/components/AboutHero";
import HistorySection from "@/modules/about/components/HistorySection";
import TimelineSection from "@/modules/about/components/TimelineSection";
import MissionVisionSection from "@/modules/about/components/MissionVisionSection";
import ValuesSection from "@/modules/about/components/ValuesSection";
import ExperienceCTA from "@/modules/about/components/ExperienceCTA";

export const metadata: Metadata = {
  title: "Nosotros | A.B.U.",
  description: "Conoce la historia, misión, visión y valores de A.B.U. Alimentos Balanceados Uzcátegui.",
};

export default function NosotrosPage() {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <Reveal><HistorySection /></Reveal>
      <Reveal><TimelineSection /></Reveal>
      <Reveal><MissionVisionSection /></Reveal>
      <Reveal><ValuesSection /></Reveal>
      <Reveal><ExperienceCTA /></Reveal>
    </main>
  );
}
