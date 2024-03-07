import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div
      className="my-4 w-full max-w-4xl rounded-2xl bg-white/30 text-white shadow-lg drop-shadow-lg"
      ref={ref}
    >
      <p className="m-4 text-center font-mono text-6xl font-semibold">
        Contact
      </p>
      <p className="m-4 text-center font-mono text-lg font-semibold sm:text-2xl">
        You can e-mail me at{" "}
        <span className=" text-emerald-200">shawnweddle.dev@gmail.com</span> or
        message me on{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/shawn-weddle-763aa4285/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
});

export default Contact;
