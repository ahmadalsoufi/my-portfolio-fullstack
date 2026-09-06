const CategoryFilter = ({
  categories,
  curCategory,
  setCurCategory,
}: {
  categories: string[];
  curCategory: string;
  setCurCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div className="flex w-full items-center justify-end gap-x-2 max-[400px]:justify-center sm:w-auto">
        {categories.map((category: any) => (
          <button
            key={category}
            className={`${category === curCategory ? "bg-blue-500" : "bg-slate-700 dark:bg-slate-800"} sm:text-md cursor-pointer rounded-md px-3 py-1 text-sm font-medium text-slate-50 capitalize shadow-sm transition-colors duration-200 hover:bg-blue-500 hover:text-slate-100 sm:rounded-lg sm:px-5 sm:py-2 dark:text-slate-100`}
            onClick={() => setCurCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
