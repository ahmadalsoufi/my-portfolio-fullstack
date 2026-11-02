// "use client";
import GoBackBtn from "@/app/components/GoBackBtn";

// types
import { ProjectType } from "@/app/types";
import { Suspense } from "react";
import ProjectSkeleton from "./skeleton";
import { getProject } from "../projects";
import { notFound } from "next/navigation";

export default async function GetProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}

export async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = (await getProject({ slug })) as ProjectType;

  if (!project) notFound();

  return (
    <>
      <section className="space-y-7 bg-slate-50 py-8 text-center shadow-md sm:m-5 sm:rounded-lg sm:text-start dark:bg-slate-800 dark:text-slate-100 animation-fade-in">
        <div className="flex flex-col px-5 sm:px-10">
          <h1 className="text-2xl/relaxed font-bold capitalize sm:text-3xl/loose">
            {project?.title}
          </h1>
          <p className="text-md font-medium text-slate-600 sm:text-lg dark:text-slate-300">
            {project.excerpt}
          </p>
        </div>
        {project.image?.url ? (
          <img
            src={project.image?.url}
            alt={project?.title || project?.slug}
            className="h-48 w-full border-y-2 border-y-slate-700 bg-contain object-cover shadow-md"
          />
        ) : (
          <div className="bg-slate-200 dark:bg-slate-900 h-48 w-full border-y-2 border-y-slate-700 bg-contain object-cover shadow-md" />
        )}

        <div className="px-5 sm:px-10">
          <h2 className="text-xl/relaxed font-bold capitalize sm:text-2xl/loose">
            {project?.title}
          </h2>
          <p className="text-md mb-7 font-medium text-slate-600 sm:text-lg dark:text-slate-300">
            {project?.description}
          </p>

          {project.url ? (
            <a
              target="_blank"
              className="text-sm sm:text-base inline-block shadow-sm cursor-pointer mb-7 bg-blue-500 rounded-sm py-1 px-4 text-slate-50 hover:text-slate-100 hover:bg-blue-600 transition-colors duration-200"
              href={project.url}
            >
              Open URL
            </a>
          ) : (
            <p className="w-fit text-sm sm:text-base shadow-sm cursor-not-allowed mb-7 bg-slate-500 dark:bg-slate-900 rounded-sm py-1 px-4 text-slate-50">
              The URL for this project is missing
            </p>
          )}

          <div className="flex items-center justify-between">
            <h3 className="flex flex-col text-lg font-bold sm:text-xl">
              Category:
              <span className="text-sm font-medium tracking-wide text-slate-600 uppercase dark:text-slate-400">
                {project?.category}
              </span>
            </h3>
            <GoBackBtn href="/projects" />
          </div>
        </div>
      </section>
    </>
  );
}
