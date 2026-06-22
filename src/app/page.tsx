import { SkipLink } from "@/components/ui/SkipLink";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { SelectedWork } from "@/components/SelectedWork";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <SelectedWork />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
