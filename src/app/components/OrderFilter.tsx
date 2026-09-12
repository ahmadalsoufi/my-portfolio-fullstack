"use client";

import OrderOption from "./OrderOption";
import { useRouter, useSearchParams } from "next/navigation";

const OrderFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const options = ["Newest", "Oldest"];

  return (
    <>
      <div className="flex items-center justify-end gap-x-2 max-[400px]:justify-center">
        <p className="text-md sm:text-md font-medium capitalize dark:text-slate-100">
          order by
        </p>
        <select
          className="sm:text-md dark:text-slate100 cursor-pointer rounded-md bg-slate-700 px-3 py-1 text-sm font-medium text-slate-50 capitalize shadow-sm transition-colors duration-200 sm:rounded-lg sm:px-5 sm:py-2 dark:bg-slate-800"
          value={searchParams.get("order") || ""}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams.toString());

            params.set("order", e.target.value);

            router.push(`?${params.toString()}`);
          }}
        >
          {options.map((option) => (
            <OrderOption key={option} option={option} />
          ))}
        </select>
      </div>
    </>
  );
};

export default OrderFilter;
