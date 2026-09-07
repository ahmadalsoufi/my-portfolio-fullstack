import GoBackBtn from "@/app/components/GoBackBtn";

const BlogSkeleton = () => {
  const bgText = "bg-slate-50 dark:bg-slate-600";
  return (
    <section className="flex flex-col items-center px-5 py-8 m-10 animate-pulse bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md">
      <h1 className="w-[40%] mb-4 h-12 bg-slate-600 dark:bg-slate-300 rounded-sm"></h1>
      {Array.from({ length: 14 }, (_, i) => (
        <p
          key={i + 1}
          className={`${i + 1 !== 7 && i + 1 !== 8 ? "w-full bg-slate-400 dark:bg-slate-600 h-3" : i + 1 !== 8 ? "bg-slate-400 dark:bg-slate-600 w-[50%] h-3" : "bg-slate-50 dark:bg-slate-800 h-1"} max-w-140 mb-2 rounded-sm`}
        ></p>
      ))}
      <p className="w-[30%] mb-20 h-3 bg-slate-400 dark:bg-slate-600 max-w-140 rounded-sm"></p>

      <div className="flex w-full items-center justify-between mt-auto">
        <p className="mb-2 w-[20%] h-3 bg-slate-600 dark:bg-slate-300 rounded-sm"></p>

        <div className="shrink-0">
          <GoBackBtn href="/blogs" />
        </div>
      </div>
    </section>
  );
};

export default BlogSkeleton;
