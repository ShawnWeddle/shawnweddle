import { useRef } from "react";
import NameHeader from "./NameHeader";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleAboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsScroll = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactScroll = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 via-sky-600 to-indigo-600">
      <div className="flex flex-col items-center">
        <NameHeader />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <div className="h-12"></div>

        <div className="fixed bottom-0 grid w-full grid-cols-3 sm:flex sm:w-auto sm:justify-center">
          <div
            className="bg-violet-300/50 py-2 text-center text-xl text-white hover:bg-violet-300/70 sm:rounded-tl-full sm:px-10"
            onClick={handleAboutScroll}
          >
            About
          </div>
          <div
            className="bg-emerald-300/50 py-2 text-center text-xl text-white hover:bg-emerald-300/70 sm:px-10"
            onClick={handleProjectsScroll}
          >
            Projects
          </div>
          <div
            className="bg-blue-300/50 py-2 text-center text-xl text-white hover:bg-blue-300/70 sm:rounded-tr-full sm:px-10"
            onClick={handleContactScroll}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
