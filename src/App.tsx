import NameHeader from "./NameHeader";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500 via-sky-600 to-indigo-600">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <NameHeader />
        </div>
        <Projects />
        <About />
        <Contact />
        <div className="bg-red-500 sm:bg-yellow-300 md:bg-green-500 lg:bg-purple-600">
          SIZE
        </div>
      </div>
    </div>
  );
}

export default App;
