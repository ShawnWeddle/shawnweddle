const ProjectsElement: React.FC = () => {
  return (
    <div className="flex flex-col bg-blue-900">
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-3/4">
          <p className="m-4 text-center text-5xl text-gray-50">PROJECTS</p>
          <div className="rounded-xl bg-gradient-to-br from-blue-900 to-orange-600">
            <div className="flex">
              <div>IMAGE</div>
              <div>DESCRIPTION</div>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-900 to-orange-600">
            <div className="flex">
              <div>IMAGE</div>
              <div>DESCRIPTION</div>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-900 to-orange-600">
            <div className="flex">
              <div>IMAGE</div>
              <div>DESCRIPTION</div>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-900 to-orange-600">
            <div className="flex">
              <div>IMAGE</div>
              <div>DESCRIPTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsElement;
