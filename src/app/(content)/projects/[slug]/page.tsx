// "use client";
import GoBackBtn from "@/app/components/GoBackBtn";
import { getProject } from "../ProjectsProvider";

// types
import { ProjectType } from "@/app/types";
import { Suspense } from "react";
import ProjectSkeleton from "./skeleton";

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
  const project = (await getProject(slug)) as ProjectType;

  return (
    <>
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
    </>
  );
}
