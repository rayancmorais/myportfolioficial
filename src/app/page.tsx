import { NavBar } from "@/components/sections/nav/NavBar";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { ArchitectureSection } from "@/components/sections/architecture/ArchitectureSection";
import { TechStackSection } from "@/components/sections/skills/TechStackSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { ChatSection } from "@/components/sections/chat/ChatSection";

// Cache components (Next.js 16 PPR): static shell prerendered,
// ChatSection streams in via its Suspense boundary.
export const cacheComponents = true;

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-zinc-950">
        <HeroSection />

        {/* Subtle divider */}
        <div aria-hidden className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        <ProjectsGrid />

        <div aria-hidden className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        <TechStackSection />

        <div aria-hidden className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        <ArchitectureSection />

        <div aria-hidden className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        <ChatSection />

        <div aria-hidden className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        <ContactSection />

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-zinc-600">
          © 2026 Rayan Morais. Built with Next.js &amp; Framer Motion.
        </footer>
      </main>
    </>
  );
}
