import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div className="my-4 w-full max-w-4xl rounded-2xl bg-white/20" ref={ref}>
      <p className="m-4 text-center font-mono text-6xl font-semibold text-white">
        About
      </p>
      <p className="m-4 font-mono text-xl font-semibold text-white">
        Hi, I'm Shawn Weddle. Thank you for checking out my portfolio!
      </p>
      <p className="m-4 font-mono text-xl font-semibold text-white">
        I am a self-taught web developer based in Indiana looking for
        employment.
      </p>
      <p className="m-4 font-mono text-xl font-semibold text-white">
        I have multiple years of experience in programming and building websites
        as a hobby, and I am hoping to turn it into a career.
      </p>
      <p className="m-4 font-mono text-xl font-semibold text-white">
        I am open to working in front-end, back-end, or full-stack.
      </p>
    </div>
  );
});

export default About;
