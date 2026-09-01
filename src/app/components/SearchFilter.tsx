"use client";

const SearchFilter = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Filter result"
        className="w-full rounded-full bg-slate-50 px-5 py-3 shadow-md outline-blue-500 dark:bg-slate-800 dark:text-slate-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchFilter;
