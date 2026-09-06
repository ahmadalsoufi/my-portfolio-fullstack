import ProjectCard from "../(content)/projects/ProjectCard";
import { getFeaturedProjects } from "../(content)/projects/ProjectsProvider";

export async function FeaturedProjects() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <div className="mb-5 grid grid-cols-1 gap-3 gap-y-4 text-start sm:grid-cols-2 animation-fade-in">
        {featuredProjects?.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
