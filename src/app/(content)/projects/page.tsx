import { Suspense } from "react";

// Types
import { CategoriesNames } from "@/generated/prisma/enums";

// Components
import RenderProjects from "./RenderProjects";
import CategoryFilter from "@/app/components/CategoryFilter";
import SearchFilter from "@/app/components/SearchFilter";
import ProjectsSkeleton from "./skeleton";

// Constants
import { BLOGS_PER_PAGE } from "@/app/constants";
import { getCategories } from "./projects";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string | null;
    category?: CategoriesNames | null;
    page?: string | null;
  }>;
}) {
  const categories = await getCategories();

  return (
    <>
      <section className="w-full p-5">
        <h1 className="my-5 text-3xl font-medium dark:text-slate-50">
          My Projects
        </h1>

        <div className="mb-5 flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row">
          <Suspense fallback={null}>
            <SearchFilter />
          </Suspense>

          <Suspense fallback={null}>
            <CategoryFilter categories={categories} />
          </Suspense>
        </div>

        <div className={`flex flex-col`}>
          <Suspense fallback={<ProjectsSkeleton count={BLOGS_PER_PAGE} />}>
            <RenderProjects searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
