import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div
      className="my-4 w-full max-w-4xl rounded-2xl bg-white/30 text-white shadow-lg drop-shadow-lg"
      ref={ref}
    >
      <p className="m-4 text-center font-mono text-6xl font-semibold">
        Projects
      </p>

      <div className="flex flex-col sm:grid sm:grid-cols-3">
        <div className="m-3 flex justify-center shadow-md">
          <div className="h-fit w-fit overflow-hidden rounded-md">
            <img src="/zyzans_thumbnail.png" width="500" />
          </div>
        </div>
        <div className="col-span-2 mx-4 sm:ml-1">
          <div className="flex items-center justify-start">
            <a
              className="font-mono text-2xl font-semibold hover:text-yellow-300 sm:text-3xl"
              href="https://www.zyzans.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              zyzans.com
            </a>
            <a
              className="px-4 text-xl hover:text-yellow-300"
              href="https://github.com/ShawnWeddle/zyzanspizza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <p>
            Everyone's favorite non-existant pizza restaurant. All the joy of
            ordering pizza without the experience of eating it. Create an
            account and place an order.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3">
        <div className="m-3 flex justify-center shadow-md">
          <div className="h-fit w-fit overflow-hidden rounded-md">
            <img src="/sports_mega_world_thumbnail.png" width="500" />
          </div>
        </div>
        <div className="col-span-2 mx-4 sm:ml-1">
          <div className="flex items-center justify-start rounded-tr">
            <a
              className="font-mono text-2xl font-semibold hover:text-yellow-300 sm:text-3xl"
              href="https://www.sportsmegaworld.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sportsmegaworld.com
            </a>
            <a
              className="px-4 text-xl hover:text-yellow-300"
              href="https://github.com/ShawnWeddle/shawnsports"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <p>
            SportsMegaWorld is a collection of resources for different sports
            leagues (Formula One, NFL, NBA, MLB, NHL, MLS, WNBA, and CFL).
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3">
        <div className="m-3 flex justify-center shadow-md">
          <div className="h-fit w-fit overflow-hidden rounded-md">
            <img src="/qulur_thumbnail.png" width="500" />
          </div>
        </div>
        <div className="col-span-2 mx-4 sm:ml-1">
          <div className="flex items-center justify-start">
            <a
              className="font-mono text-2xl font-semibold hover:text-yellow-300 sm:text-3xl"
              href="https://www.qulur.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              qulur.com
            </a>
            <a
              className="px-4 text-xl hover:text-yellow-300"
              href="https://github.com/ShawnWeddle/qulur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <p>
            QULUR is a fun new game to test your brain. Answer the questions as
            quickly as possible to jump to the top of the leaderboard!
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3">
        <div className="m-3 flex justify-center shadow-md">
          <div className="h-fit w-fit overflow-hidden rounded-md">
            <img src="/shawn81_thumbnail.png" width="500" />
          </div>
        </div>
        <div className="col-span-2 mx-4 sm:ml-1">
          <div className="flex items-center justify-start">
            <a
              className="font-mono text-2xl font-semibold hover:text-yellow-300 sm:text-3xl"
              href="https://www.shawn81.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shawn81.com
            </a>
            <a
              className="px-4 text-xl hover:text-yellow-300"
              href="https://github.com/ShawnWeddle/shawn81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <p>
            Users can post messages and read messages posted by other users.
            Users can also edit or delete their messages. Only 81 spots are
            available.
          </p>
        </div>
      </div>

      <div className="m-4">
        <p className="mb-2 font-mono text-2xl font-semibold">
          Projects built with{" "}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border-2 border-white bg-[#E54D26] px-2 py-1 font-semibold text-white shadow-md">
            HTML
          </span>
          <span className="rounded-full border-2 border-white bg-[#0B74B8] px-2 py-1 font-semibold text-white shadow-md">
            CSS
          </span>
          <span className="rounded-full border-2 border-white bg-[#DAB92C] px-2 py-1 font-semibold text-white shadow-md">
            JavaScript
          </span>
          <span className="rounded-full border-2 border-white bg-[#61DAFB] px-2 py-1 font-semibold text-black shadow-md">
            React
          </span>
          <span className="rounded-full border-2 border-white bg-[#3178C6] px-2 py-1 font-semibold text-white shadow-md">
            TypeScript
          </span>
          <span className="rounded-full border-2 border-white bg-[#E2E8F0] px-2 py-1 font-semibold text-black shadow-md">
            T3
          </span>
          <span className="rounded-full border-2 border-white bg-black px-2 py-1 font-semibold text-white shadow-md">
            Next
          </span>
          <span className="rounded-full border-2 border-white bg-[#38BDF8] px-2 py-1 font-semibold text-white shadow-md">
            Tailwind
          </span>
          <span className="rounded-full border-2 border-white bg-[#398CCB] px-2 py-1 font-semibold text-white shadow-md">
            TRPC
          </span>
          <span className="rounded-full border-2 border-white bg-[#02364E] px-2 py-1 font-semibold text-white shadow-md">
            Prisma
          </span>
          <span className="rounded-full border-2 border-white bg-[#4EA94B] px-2 py-1 font-semibold text-white shadow-md">
            MongoDB
          </span>
          <span className="rounded-full border-2 border-white bg-gradient-to-r from-[#FE0058] via-[#D829FF] to-[#00B8F4] px-2 py-1 font-semibold text-white shadow-md">
            JWT
          </span>
          <span className="rounded-full border-2 border-white bg-[#3068B7] px-2 py-1 font-semibold text-white shadow-md">
            Zod
          </span>
        </div>
      </div>
    </div>
  );
});

export default Projects;
