import GoBackBtn from "@/app/components/GoBackBtn";

const ProjectSkeleton = () => {
  return (
    <>
      {/* Check this, animate-pulse, or animations overall are only given to the parent and then it applies to nested children. */}
      <section className="space-y-7 bg-slate-50 py-8 shadow-md sm:m-5 sm:rounded-lg sm:text-start dark:bg-slate-800 animate-pulse">
        <div className="flex flex-col px-5 sm:px-10">
          <h1 className="w-[40%] mb-4 h-12 bg-slate-600 rounded-sm"></h1>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-[60%] h-3 bg-slate-600 rounded-sm"></p>
        </div>

        <div className="h-48 w-full border-y-2 border-y-slate-700 bg-contain object-cover shadow-md bg-slate-300 rounded-sm"></div>

        <div className="px-5 sm:px-10">
          <h2 className="mb-4 w-[30%] h-6 bg-slate-600 animate-pulse"></h2>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
          <p className="mb-17 w-[88%] h-3 bg-slate-600 rounded-sm"></p>

          <div className="flex items-center justify-between">
            <h3 className="flex flex-col w-full h-10">
              <p className="h-4 mb-2 bg-slate-600 w-[20%] rounded-sm"></p>
              <p className="h-4 bg-slate-600 w-[17%] rounded-sm"></p>
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
