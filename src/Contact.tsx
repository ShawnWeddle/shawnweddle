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
      <p className="m-4 text-center font-mono text-lg font-semibold sm:text-4xl">
        <a href="mailto:shawnweddle.dev@gmail.com" className=" text-yellow-300">
          shawnweddle.dev@gmail.com
        </a>
      </p>
    </div>
  );
});

export default Contact;
