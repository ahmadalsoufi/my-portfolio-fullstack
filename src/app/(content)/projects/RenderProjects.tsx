import { ProjectType } from "@/app/types";
import { CategoriesNames } from "@/generated/prisma/enums";
import ProjectCard from "./ProjectCard";
import SearchFilter from "@/app/components/SearchFilter";
import CategoryFilter from "@/app/components/CategoryFilter";
import Pagination from "@/app/components/Pagination";
import { PROJECTS_PER_PAGE } from "@/app/constants";
import { getProjects } from "./projects";

export default async function RenderProjects({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string | null;
    category?: CategoriesNames | null;
    page?: string | null;
  }>;
}) {
  const { search, category, page } = await searchParams;

  const validateCategory = Object.values(CategoriesNames).find(
    (value) => String(value) === category,
  );

  const projects = await getProjects({
    category: validateCategory ? category : null,
    searchQuery: search || null,
    page: page || null,
  });

  const totalPages = Math.ceil(projects.projectsCount / PROJECTS_PER_PAGE);

  return (
    <>
      {projects.projects.length > 0 ? (
        <div
          className={`transition-opacity duration-200 my-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:grid-cols-2 gap-3`}
        >
          {projects.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-700 dark:text-slate-50">
          No results found.
        </p>
      )}

      <Pagination totalPages={totalPages} />
    </>
  );
}
