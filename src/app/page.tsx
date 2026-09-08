import { Nav } from "../components/portfolio/Nav";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Process } from "../components/portfolio/Process";
import { Projects } from "../components/portfolio/Projects";
import { OtherProjects } from "../components/portfolio/OtherProjects";
import { Stack } from "../components/portfolio/Stack";
import { Contact } from "../components/portfolio/Contact";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground">
        <Nav />
        <Hero />
        <About />
        <Process />
        <Projects />
        <OtherProjects />
        <Stack />
        <Contact />
      </main>
    </LanguageProvider>
  );
}