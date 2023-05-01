import { FaLinkedin, FaGithub } from "react-icons/fa";

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

export default IconHeader;
