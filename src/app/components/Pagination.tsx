"use client";

import { useRouter, useSearchParams } from "next/navigation";
const Pagination = ({ totalPages }: { totalPages: number }) => {
  if (totalPages <= 1) return;

  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const page = searchParams.get("page") || "1";

  return (
    <>
      <div className="space-x-2 text-center mt-5 ">
        {Array.from({ length: totalPages }, (_, i) => {
          return (
            <button
              key={i + 1}
              onClick={() => {
                params.set("page", String(i + 1));
                router.push(`?${params.toString()}`);
              }}
              className={`${String(i + 1) === page ? "bg-blue-500" : "bg-slate-700 dark:bg-slate-800"} cursor-pointer rounded-xl px-5 py-2 text-slate-50 shadow-sm transition-colors duration-200 hover:bg-blue-500 dark:text-slate-100`}
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
