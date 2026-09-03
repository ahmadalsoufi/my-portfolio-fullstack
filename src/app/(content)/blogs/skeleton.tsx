const BlogsSkeleton = ({
  count,
  onHome = false, // Changing its design on homepage.
}: {
  count: number;
  onHome: boolean;
}) => {
  return (
    <div className={`${onHome ? "flex-row" : "flex-col"} flex gap-5`}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i + 1}
          className="rounded-2xl bg-slate-700 p-10 text-sm shadow-md dark:bg-slate-800 w-full animate-pulse"
        >
          <h2 className="w-[70%] h-10 bg-slate-600 mb-3 rounded-sm"></h2>
          <p className="mb-5 h-3 bg-slate-600 w-[88%] rounded-sm"></p>
          <p className="bg-slate-600 w-[60%] h-3 rounded-sm"></p>
        </div>
      ))}
    </div>
  );
};

export default BlogsSkeleton;
