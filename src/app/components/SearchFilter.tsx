"use client";

// It's Dynamically rendered, due to using a runtime-data (useSearchParams)
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  // The state remains upon navigating.
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (search) {
        params.set("page", "1");
        params.set("search", search);
      } else params.delete("search");

      router.push(`?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Filter result"
        className="w-full rounded-full bg-slate-50 px-5 py-3 shadow-md outline-none focus:outline-1 sm:focus:outline-2 focus:outline-blue-400 focus:outline-solid dark:bg-slate-800 dark:text-slate-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchFilter;
