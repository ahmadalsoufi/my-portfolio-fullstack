"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { CategoryType } from "../types";

export default function CategoryFilter({
  categories,
}: {
  categories: CategoryType[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const allCategories = [
    "All",
    ...categories.map((category) => category.category),
  ];

  const curCategory = searchParams.get("category") || "All";

  return (
    <>
      <div className="flex w-full items-center justify-end gap-x-2 max-[400px]:justify-center sm:w-auto">
        {allCategories.map((category) => {
          return (
            <button
              key={category}
              className={`${category === curCategory ? "bg-blue-500" : "bg-slate-700 dark:bg-slate-800"} 
            sm:text-md cursor-pointer rounded-md px-3 py-1 text-sm font-medium text-slate-50 capitalize shadow-sm transition-colors duration-200 hover:bg-blue-500 hover:text-slate-100 
            sm:rounded-lg sm:px-5 sm:py-2 dark:text-slate-100`}
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString());

                params.set("category", category);
                router.push(`?${params.toString()}`);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}
