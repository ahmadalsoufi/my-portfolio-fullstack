const ProjectsSkeleton = ({ count }: { count: number }) => {
  return (
    <>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:grid-cols-2 gap-3">
        {Array.from({ length: count }, () => (
          <div
            key={count + 1}
            className="rounded-2xl shadow-md transition-transform duration-300 animate-pulse"
          >
            <div className="h-40 w-full rounded-tl-2xl rounded-tr-2xl bg-slate-300 rounded-sm"></div>
            <div className="rounded-br-2xl rounded-bl-2xl bg-slate-700 p-10 shadow-md dark:bg-slate-800">
              <h2 className="w-[70%] h-10 bg-slate-600 mb-3"></h2>
              <p className="mb-2 h-3 bg-slate-600 rounded-sm"></p>
              <p className="mb-2 h-3 bg-slate-600 rounded-sm"></p>
              <p className="mb-5 h-3 bg-slate-600 w-[88%] rounded-sm"></p>
              <p className="bg-slate-600 w-[30%] h-6 rounded-sm"></p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectsSkeleton;
