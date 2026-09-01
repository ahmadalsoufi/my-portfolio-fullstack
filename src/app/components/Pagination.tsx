const Pagination = ({
  totalPages,
  setCurPage,
  curPage,
}: {
  totalPages: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
  curPage: number;
}) => {
  if (totalPages <= 1) return;

  return (
    <>
      <div className="space-x-2 text-center mt-5 ">
        {Array.from({ length: totalPages }, (_, i) => {
          return (
            <button
              key={i + 1}
              onClick={() => {
                setCurPage(i + 1);
              }}
              className={`${i + 1 === curPage ? "bg-blue-500" : "bg-slate-700 dark:bg-slate-800"} cursor-pointer rounded-xl px-5 py-2 text-slate-50 shadow-sm transition-colors duration-200 hover:bg-blue-500 dark:text-slate-100`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
