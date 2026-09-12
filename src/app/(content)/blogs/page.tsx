import { Suspense } from "react";

// Components
import SearchFilter from "../../components/SearchFilter";
import OrderFilter from "../../components/OrderFilter";
import BlogsSkeleton from "./skeleton";
import RenderBlogs from "./renderBlogs";

// Constants
import { BLOGS_PER_PAGE } from "@/app/constants";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string; order?: string }>;
}) {
  return (
    <>
      <section>
        <div className="w-full p-5">
          <h1 className="my-5 text-3xl font-medium dark:text-slate-50">
            My Blogs
          </h1>
          <div className="mb-5 flex flex-col items-center gap-x-4 gap-y-4 sm:items-end">
            <Suspense fallback={null}>
              <SearchFilter />
            </Suspense>

            <Suspense fallback={null}>
              <OrderFilter />
            </Suspense>
          </div>
          <div className={`transition-opacity duration-200 flex flex-col`}>
            <Suspense
              fallback={<BlogsSkeleton count={BLOGS_PER_PAGE} onHome={false} />}
            >
              <RenderBlogs searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
