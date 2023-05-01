const AboutElement: React.FC = () => {
  return (
    <div className="flex flex-col bg-yellow-700 sm:bg-green-900 md:bg-blue-900 lg:bg-purple-900">
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-3/4">
          <p className="text-left text-2xl text-gray-50">
            Hi, I'm Shawn Weddle. A web developer based in Indiana. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutElement;
