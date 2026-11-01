import GoBackBtn from "@/app/components/GoBackBtn";

const ProjectSkeleton = () => {
  return (
    <>
      <section className="space-y-7 bg-slate-50 py-8 shadow-md sm:m-5 sm:rounded-lg sm:text-start dark:bg-slate-800 animate-pulse">
        <div className="flex flex-col items-center sm:items-start px-5 sm:px-10">
          <h1 className="w-[80%] sm:w-[40%] mb-4 h-10 sm:h-12 bg-slate-600 dark:bg-slate-300 rounded-sm"></h1>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-[60%] h-3 bg-slate-600 rounded-sm"></p>
        </div>

        <div className="h-48 w-full border-y-2 border-y-slate-700 bg-contain object-cover bg-slate-300 rounded-sm"></div>

        <div className="flex flex-col items-center sm:items-start px-5 sm:px-10">
          <h2 className="w-[60%] sm:w-[30%] mb-4 h-10 sm:h-12 bg-slate-600 dark:bg-slate-300 rounded-sm"></h2>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-17 w-[88%] h-3 bg-slate-600 rounded-sm"></p>

          <div className="flex items-center sm:items-start justify-between">
            <h3 className="flex flex-col w-full h-10 rounded-sm">
              <p className="h-4 mb-2 bg-slate-600 w-[60%] sm:w-[20%] rounded-sm"></p>
              <p className="h-4 bg-slate-600 w-[50%] sm:w-[17%] rounded-sm"></p>
            </h3>
            <div className="shrink-0">
              <GoBackBtn href="/projects" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSkeleton;
