"use client";
import { useEffect, useState } from "react";

import { getProjects, getCategories, countProjects } from "./ProjectsProvider";

// components
import ProjectCard from "./ProjectCard";

// types
import { ProjectType } from "../../types";
import CategoryFilter from "../../components/CategoryFilter";
import SearchFilter from "../../components/SearchFilter";
import Pagination from "../../components/Pagination";
import ProjectsSkeleton from "./skeleton";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectType[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [curCategory, setCurCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);
  const projectsPerPage = 4;

  useEffect(() => {
    setProjects(null);
  }, [searchQuery]);

  useEffect(() => {
    async function load() {
      try {
        let categories = await getCategories();
        const allCategories = [
          "All",
          ...categories.map((category) => category.category),
        ];

        setCategories(allCategories);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      }
    }

    load();
  }, []);

  useEffect(() => {
    async function load() {
      try {
        const projects: ProjectType[] | null = await getProjects(
          curPage,
          projectsPerPage,
          searchQuery,
          curCategory,
        );

        const totalPages = Math.ceil(
          (await countProjects(searchQuery, curCategory)) / projectsPerPage,
        );

        setTotalPages(totalPages);
        setProjects(projects);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      }
    }

    const timer = setTimeout(() => {
      load();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    async function load() {
      try {
        const projects: ProjectType[] | null = await getProjects(
          curPage,
          projectsPerPage,
          searchQuery,
          curCategory,
        );

        const totalPages = Math.ceil(
          (await countProjects(searchQuery, curCategory)) / projectsPerPage,
        );

        setTotalPages(totalPages);
        setProjects(projects);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      }
    }
    load();
  }, [curPage, curCategory]);

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

        {projects ? (
          <div className="flex flex-col">
            {projects.length > 0 ? (
              <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] sm:grid-cols-2 gap-3">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-700 dark:text-slate-50">
                No results found.
              </p>
            )}

            <Pagination
              totalPages={totalPages}
              curPage={curPage}
              setCurPage={setCurPage}
            />
          </div>
        ) : (
          <ProjectsSkeleton count={4} />
        )}
      </section>
    </>
  );
}
