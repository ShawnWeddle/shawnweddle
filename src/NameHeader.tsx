import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import Blobs from "./Blobs";

const NameHeader: React.FC = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="relative">
        <Blobs />
        <div>
          <div className="font-mono text-4xl font-semibold text-white drop-shadow-lg sm:text-6xl md:text-8xl lg:text-9xl">
            Shawn Weddle
          </div>
          <div className="font-mono text-2xl font-semibold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Web Developer
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <a
              className="m-4 block text-7xl font-extrabold text-white drop-shadow-lg transition hover:scale-110 sm:text-8xl"
              href="https://github.com/ShawnWeddle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="m-4 block text-7xl font-extrabold text-white drop-shadow-lg transition hover:scale-110 sm:text-8xl"
              href="https://www.linkedin.com/in/shawn-weddle-763aa4285/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a className="m-4 block text-7xl font-extrabold text-white drop-shadow-lg transition hover:scale-110 sm:text-8xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameHeader;
