const Fav: React.FC = () => {
  return (
    <div className="m-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="relative aspect-square bg-gradient-to-br from-sky-600 via-emerald-500 to-indigo-600">
          <div className="absolute -bottom-6 left-10 font-mono text-[600px] font-bold text-white/75">
            S
          </div>
          <div className="absolute -bottom-40 right-10 font-mono text-[600px] font-bold text-white/75">
            W
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;
