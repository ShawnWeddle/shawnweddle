const Blobs: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-8 aspect-square animate-leftBlob rounded-full bg-indigo-600 mix-blend-screen blur-sm filter sm:left-12 sm:h-36 md:-top-4 md:left-28 md:h-48 lg:left-32 lg:h-64"></div>
      <div className="absolute right-12 bottom-8 aspect-square animate-rightBlob rounded-full bg-emerald-600 mix-blend-screen blur-sm filter sm:right-8 sm:h-36 md:right-20 md:bottom-6 md:h-48 lg:right-24 lg:bottom-4 lg:h-64"></div>
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto aspect-square animate-middleBlob rounded-full bg-violet-500 mix-blend-screen blur-sm filter sm:h-36 md:h-48 lg:h-64"></div>
    </>
  );
};

export default Blobs;

const extratext: string = "o5pacity-75 b5lur-md filte5r";
