import "./App.css";
import Header from "./pages/Header";
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

  // const color = [
  //   "#f2b3b3",
  //   "#f2eeb3",
  //   "#b3f2e5",
  //   "#b3b7f2",
  //   "#F2B3DC",
  //   "#f2b3cb",
  //   "#eaf2b3",
  // ];

  // const starItem =
  //   color &&
  //   color.map((item, index) => {
  //     let randomPosition = Math.floor(Math.random() * 100) + 1;
  //     let randomTime = Math.floor(Math.random() * 6000);
  //     let randomColor = color[Math.floor(Math.random() * color.length)];
  //     return (
  //       <div key={index}>
  //         <StarContent
  //           left={randomPosition}
  //           time={randomTime}
  //           color={randomColor}
  //         ></StarContent>
  //       </div>
  //     );
  //   });
  return (
    <div className="App">
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
