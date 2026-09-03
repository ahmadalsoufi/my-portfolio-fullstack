import GoBackBtn from "@/app/components/GoBackBtn";

const BlogSkeleton = () => {
  return (
    <section className="flex h-full flex-col items-center px-5 py-8 sm:m-10 animate-pulse bg-slate-800 rounded-lg">
      <h1 className="w-[40%] mb-4 h-12 bg-slate-600 rounded-sm"></h1>
      <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
      <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
      <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
      <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
      <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
      <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
      <p className="mb-2 w-full h-3 bg-slate-600 rounded-sm"></p>
      <p className="mb-17 w-[88%] h-3 bg-slate-600 rounded-sm"></p>

      <div className="flex w-full items-center justify-between">
        <p className="mb-2 w-[30%] h-3 bg-slate-600 rounded-sm"></p>

        <div className="shrink-0">
          <GoBackBtn href="/blogs" />
        </div>
      </div>
    </section>
  );
};

export default BlogSkeleton;
