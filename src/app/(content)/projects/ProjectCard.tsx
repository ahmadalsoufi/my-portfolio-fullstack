import Link from "next/link";

// react-icons
import { FaStar } from "react-icons/fa";

// types

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="relative cursor-pointer rounded-2xl text-blue-400 shadow-md transition-transform duration-300 hover:scale-98 animation-fade-in">
        <span className="cursor-pointe absolute top-3 left-3 text-2xl text-yellow-300 text-shadow-2xs">
          {project.featured && <FaStar />}
        </span>
        <img
          src={project.image.url}
          className="inline-block h-40 w-full rounded-tl-2xl rounded-tr-2xl bg-cover bg-center object-cover"
          alt={project.title}
        />
        <div className="rounded-br-2xl rounded-bl-2xl bg-slate-700 p-10 text-sm shadow-md dark:bg-slate-800">
          <h2 className="mb-1 truncate text-2xl font-medium capitalize">
            {project.title}
          </h2>
          <p className="mb-5 h-20 overflow-hidden text-slate-50">
            {project.excerpt}
          </p>
          <p className="text-md flex flex-col font-medium text-slate-400">
            <span className="text-sm tracking-wide text-slate-400 uppercase">
              {project.category}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
