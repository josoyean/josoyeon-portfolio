import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { FloatingActions } from "./components/layout/FloatingActions";
import { AboutSection } from "./components/sections/AboutSection";
import { InterviewSection } from "./components/sections/InterviewSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import "./styles/globals.css";
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <>
      <SpeedInsights />
      <Header />
      <main>
        <AboutSection />
        <InterviewSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
