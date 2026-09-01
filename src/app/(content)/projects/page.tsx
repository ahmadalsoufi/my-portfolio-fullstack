"use client";
import { useEffect, useState } from "react";

import { getProjects } from "./ProjectsProvider";
import ProjectCard from "./ProjectCard";

// types
import { ProjectType } from "../../types";
import CategoryFilter from "../../components/CategoryFilter";
import SearchFilter from "../../components/SearchFilter";
import Pagination from "../../components/Pagination";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectType[] | null>(null);

  // get data
  useEffect(() => {
    async function load() {
      try {
        const projects: ProjectType[] | null = await getProjects();
        setProjects(projects);
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
      }
    }

    load();
  }, []);

  // filter by category
  const [curCategory, setCurCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects?.map((project) => project.category)),
  ];

  const projectsByCategory = projects?.filter((project) =>
    curCategory === "All" ? projects : project.category === curCategory,
  );

  // filter by search
  const [searchQuery, setSearchQuery] = useState<string>("");
  const projectsBySearch = projects?.filter(
    (project) =>
      project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // pagination
  const [curPage, setCurPage] = useState(1);
  const projectsPerPage = 4;
  const totalPages = projectsBySearch
    ? Math.ceil(projectsBySearch?.length / projectsPerPage)
    : 0;

  const lastProject = curPage * projectsPerPage;
  const firstProject = lastProject - projectsPerPage;
  const currentProjects = projectsBySearch?.slice(firstProject, lastProject);

  return (
    <>
      <section className="w-full p-5">
        <h1 className="my-5 text-3xl font-medium dark:text-slate-50">
          My Projects
        </h1>

        <div className="mb-5 flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row">
          <SearchFilter search={searchQuery} setSearch={setSearchQuery} />

          <CategoryFilter
            curCategory={curCategory}
            setCurCategory={setCurCategory}
            categories={categories}
          />
        </div>

        {currentProjects ? (
          <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:grid-cols-2 gap-3 gap-y-4">
            {currentProjects.length > 0 ? (
              currentProjects.map((project: any) => (
                <ProjectCard key={project.slug} project={project} />
              ))
            ) : (
              <p className="text-center text-slate-700 dark:text-slate-50">
                No results found.
              </p>
            )}
          </div>
        ) : (
          <div>loading...</div>
        )}

        <Pagination
          totalPages={totalPages}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      </section>
    </>
  );
}
