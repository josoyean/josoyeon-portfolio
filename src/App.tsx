import "./App.css";
import Header from "./pages/Header";
import TopButton from "./pages/TopButton";
import AboutContent from "./pages/about/AboutContent";
import ExperienceContent from "./pages/experience/ExperienceContent";
import InterviewContent from "./pages/interview/InterviewContent";
import ProjectContent from "./pages/project/ProjectContent";
import SkillContent from "./pages/skill/SkillContent";
import ToolsContent from "./pages/skill/ToolsContent";

function App() {
  setTimeout(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 70);

  return (
    <div className="App">
      <TopButton />
      <Header></Header>
      <AboutContent></AboutContent>
      <InterviewContent />
      <SkillContent />
      <ToolsContent />
      <ExperienceContent></ExperienceContent>
      <ProjectContent></ProjectContent>

      <footer>
        <div className="center">
          <span>
            Copyright 2025. Web Front-end developer portfolio-- by JoSoYeon 💗
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
