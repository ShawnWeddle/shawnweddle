const About: React.FC = () => {
  return (
    <div className="m-4 flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl bg-white/20">
        <p className="m-4 text-center font-mono text-6xl font-semibold text-white">
          About
        </p>
        <p className="m-4 font-mono text-xl font-semibold text-white">
          I am a self-taught web developer based in Indiana. I am looking for my
          first job in web development.
        </p>
        <p className="m-4 font-mono text-xl font-semibold text-white">
          Thanks for checking out my portfolio!
        </p>
      </div>
    </div>
  );
};

export default About;
