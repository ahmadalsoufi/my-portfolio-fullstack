import Hero from "../components/Hero";
import { getBlogs } from "../(content)/blogs/BlogsProvider";
import { getProjects } from "../(content)/projects/ProjectsProvider";
import ProjectCard from "../(content)/projects/ProjectCard";
import AboutPreview from "../about/AboutPreview";
import BlogCard from "../(content)/blogs/BlogCard";

import { GiStarsStack } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";

export default async function HomePage() {
  const recentBlogs = (await getBlogs())
    ?.slice()
    .sort((a, b) => {
      const aDate = new Date(a.event_date).getTime();
      const bDate = new Date(b.event_date).getTime();

      return aDate - bDate;
    })
    .slice(0, 2);
  const featuredProjects = (await getProjects())?.filter(
    (project) => project.featured,
  );

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

          <div className="mb-5 grid grid-cols-1 gap-3 gap-y-4 text-start sm:grid-cols-2">
            {featuredProjects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div>
            <AboutPreview detailed={false} />
          </div>

          <h1 className="mb-5 flex items-center gap-x-2 text-start font-bold capitalize">
            <IoDocumentText /> Latest posts
          </h1>

          <div className="mb-5 grid grid-cols-1 gap-3 text-start sm:grid-cols-2">
            {recentBlogs?.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
