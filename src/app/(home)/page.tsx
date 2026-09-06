import Hero from "../components/Hero";
import AboutPreview from "../about/AboutPreview";

import ProjectsSkeleton from "../(content)/projects/skeleton";
import BlogsSkeleton from "../(content)/blogs/skeleton";

import { GiStarsStack } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import { LatestPosts } from "./LatestPosts";
import { FeaturedProjects } from "./FeaturedProjects";
import { Suspense } from "react";
import { getFeaturedProjects } from "../(content)/projects/ProjectsProvider";

export default async function HomePage() {
  return (
    <>
      <div className="mb-15">
        <Hero />
      </div>

      <div className="m-5">
        <section className="mx-auto flex max-w-5xl flex-col justify-center space-y-15">
          <h1 className="mt-4 mb-5 flex items-center gap-x-2 text-start font-bold capitalize">
            <GiStarsStack /> Featured projects
          </h1>
          <Suspense fallback={<ProjectsSkeleton count={1} />}>
            <FeaturedProjects />
          </Suspense>

          <div>
            <AboutPreview detailed={false} />
          </div>

          <h1 className="mb-5 flex items-center gap-x-2 text-start font-bold capitalize">
            <IoDocumentText /> Latest posts
          </h1>
          <Suspense fallback={<BlogsSkeleton count={2} onHome={true} />}>
            <LatestPosts />
          </Suspense>
        </section>
      </div>
    </>
  );
}
