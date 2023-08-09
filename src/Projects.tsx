import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div className="my-4 w-full max-w-4xl rounded-2xl bg-white/20" ref={ref}>
      <p className="m-4 text-center font-mono text-6xl font-semibold text-white">
        Projects
      </p>
      <div className="flex flex-col sm:grid sm:grid-cols-3">
        <div className="m-3 flex justify-center">
          <div className="h-fit w-fit overflow-hidden rounded-md">
            <img src="/shawn81_thumbnail.png" width="500" />
          </div>
        </div>
        <div className="col-span-2 mx-4 sm:ml-1">
          <div className="flex items-center justify-start">
            <a
              className="font-mono text-3xl font-semibold text-white hover:text-gray-200"
              href="https://www.shawn81.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shawn81.com
            </a>
            <a
              className="px-4 text-xl text-white hover:text-gray-200"
              href="https://github.com/ShawnWeddle/shawn81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-100">
            Users can post messages and read messages posted by other users.
            Users can also edit or delete their messages. Only 81 spots are
            available.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3">
        <div className="m-3 flex justify-center">
          <div className="h-fit w-fit overflow-hidden rounded-md">
            <img src="/zyzans_thumbnail.png" width="500" />
          </div>
        </div>
        <div className="col-span-2 mx-4 sm:ml-1">
          <div className="flex items-center justify-start">
            <a
              className="font-mono text-3xl font-semibold text-white hover:text-gray-200"
              href="https://www.zyzans.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              zyzans.com
            </a>
            <a
              className="px-4 text-xl text-white hover:text-gray-200"
              href="https://github.com/ShawnWeddle/zyzanspizza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-100">
            Everyone's favorite non-existant pizza restaurant. All the joy of
            ordering pizza without the experience of eating it. Create an
            account and place an order.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3">
        <div className="m-3 flex justify-center">
          <div className="h-fit w-fit overflow-hidden rounded-md">
            <img src="/qulur_thumbnail.png" width="500" />
          </div>
        </div>
        <div className="col-span-2 mx-4 sm:ml-1">
          <div className="flex items-center justify-start">
            <a
              className="font-mono text-3xl font-semibold text-white hover:text-gray-200"
              href="https://www.qulur.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              qulur.com
            </a>
            <a
              className="px-4 text-xl text-white hover:text-gray-200"
              href="https://github.com/ShawnWeddle/qulur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-gray-100">
            QULUR is a fun new game to test your brain. Answer the questions as
            quickly as possible to jump to the top of the leaderboard!
          </p>
        </div>
      </div>
      <div className="m-4">
        <p className="mb-2 font-mono text-2xl font-semibold text-white">
          Projects built with{" "}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border-2 border-white bg-[#E54D26] px-2 py-1 font-semibold text-white">
            HTML
          </span>
          <span className="rounded-full border-2 border-white bg-[#0B74B8] px-2 py-1 font-semibold text-white">
            CSS
          </span>
          <span className="rounded-full border-2 border-white bg-[#DAB92C] px-2 py-1 font-semibold text-white">
            JavaScript
          </span>
          <span className="rounded-full border-2 border-white bg-[#61DAFB] px-2 py-1 font-semibold text-black">
            React
          </span>
          <span className="rounded-full border-2 border-white bg-[#3178C6] px-2 py-1 font-semibold text-white">
            TypeScript
          </span>
          <span className="rounded-full border-2 border-white bg-[#E2E8F0] px-2 py-1 font-semibold text-black">
            T3
          </span>
          <span className="rounded-full border-2 border-white bg-black px-2 py-1 font-semibold text-white">
            Next
          </span>
          <span className="rounded-full border-2 border-white bg-[#38BDF8] px-2 py-1 font-semibold text-white">
            Tailwind
          </span>
          <span className="rounded-full border-2 border-white bg-[#398CCB] px-2 py-1 font-semibold text-white">
            TRPC
          </span>
          <span className="rounded-full border-2 border-white bg-[#02364E] px-2 py-1 font-semibold text-white">
            Prisma
          </span>
          <span className="rounded-full border-2 border-white bg-[#4EA94B] px-2 py-1 font-semibold text-white">
            MongoDB
          </span>
          <span className="rounded-full border-2 border-white bg-gradient-to-r from-[#FE0058] via-[#D829FF] to-[#00B8F4] px-2 py-1 font-semibold text-white">
            JWT
          </span>
          <span className="rounded-full border-2 border-white bg-[#3068B7] px-2 py-1 font-semibold text-white">
            Zod
          </span>
        </div>
      </div>
    </div>
  );
});

export default Projects;
