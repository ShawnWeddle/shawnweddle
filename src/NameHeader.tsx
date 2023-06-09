import { FaLinkedin, FaGithub } from "react-icons/fa";
import Blobs from "./Blobs";

const NameHeader: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <Blobs />
        <div>
          <div className="font-mono text-4xl font-semibold text-white drop-shadow-lg sm:text-6xl md:text-8xl lg:text-9xl">
            Shawn Weddle
          </div>
          <div className="font-mono text-2xl font-semibold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Web Developer
          </div>
          <div className="mt-4 flex justify-center">
            <span className="m-4 block text-7xl font-extrabold text-white drop-shadow-lg transition hover:scale-110 sm:text-8xl">
              <FaGithub />
            </span>
            <span className="m-4 block text-7xl font-extrabold text-white drop-shadow-lg transition hover:scale-110 sm:text-8xl">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconHeader: React.FC = () => {
  return (
    <div className="flex justify-center">
      <span className="m-4 block text-7xl font-extrabold text-orange-400 hover:text-pink-400 sm:text-8xl">
        <FaGithub />
      </span>
      <span className="m-4 block text-7xl font-extrabold text-orange-400 hover:text-pink-400 sm:text-8xl">
        <FaLinkedin />
      </span>
    </div>
  );
};

export default NameHeader;
