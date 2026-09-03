"use client";
import GoBackBtn from "@/app/components/GoBackBtn";
import { getProject } from "../ProjectsProvider";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// types
import { ProjectType } from "@/app/types";
import { DiVim } from "react-icons/di";
import ProjectSkeleton from "./skeleton";

const ProjectDetails = () => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    async function load() {
      try {
        const project: ProjectType | null = await getProject(slug);
        setProject(project);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      }
    }

    load();
  }, [slug]);

  return (
    <>
      {project ? (
        <section className="space-y-7 bg-slate-50 py-8 text-center shadow-md sm:m-5 sm:rounded-lg sm:text-start dark:bg-slate-800 dark:text-slate-100 animation-fade-in">
          <div className="flex flex-col px-5 sm:px-10">
            <h1 className="text-2xl/relaxed font-bold capitalize sm:text-3xl/loose">
              {project.title}
            </h1>
            <p className="text-md font-medium text-slate-600 sm:text-lg dark:text-slate-300">
              {project.excerpt}
            </p>
          </div>

          <img
            src={project.image.url}
            alt={project.title || project.slug}
            className="h-48 w-full border-y-2 border-y-slate-700 bg-contain object-cover shadow-md"
          />

          <div className="px-5 sm:px-10">
            <h2 className="text-xl/relaxed font-bold capitalize sm:text-2xl/loose">
              About {project?.title}
            </h2>
            <p className="text-md mb-17 font-medium text-slate-600 sm:text-lg dark:text-slate-300">
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <h3 className="flex flex-col text-lg font-bold sm:text-xl">
                Category:
                <span className="text-sm font-medium tracking-wide text-slate-600 uppercase dark:text-slate-400">
                  {project.title}
                </span>
              </h3>
              <GoBackBtn href="/projects" />
            </div>
          </div>
        </section>
      ) : (
        <ProjectSkeleton />
      )}
    </>
  );
};

export default ProjectDetails;
