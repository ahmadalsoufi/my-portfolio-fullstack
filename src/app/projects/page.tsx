"use client";
import { useEffect, useState } from "react";

import { getProjects } from "./ProjectsProvider";
import ProjectCard from "./ProjectCard";

// types
import { ProjectType } from "../types";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectType[] | null>(null);

  useEffect(() => {
    async function load() {
      // in server actions you handle it via try catch since ther's no a promise response, it's a straight answer or an error
      try {
        const projects: ProjectType[] | null = await getProjects();
        setProjects(projects);
      } catch (err) {
        // You don't specify the ts type for the error you check it this way:
        // "is the err an instance of Error" - "Is it a JavaScript error object?"
        if (err instanceof Error) console.error(err.message);
      }
    }

    load();
  }, []);

  return (
    <>
      <section className="w-full p-5">
        <h1 className="my-5 text-3xl font-medium dark:text-slate-50">
          My Projects
        </h1>

        {projects ? (
          <div className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 gap-y-4">
            {projects.length > 0 ? (
              projects.map((project: any) => (
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
      </section>
    </>
  );
}
