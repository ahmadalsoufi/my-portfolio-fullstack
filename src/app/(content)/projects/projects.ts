import { prisma } from "../../../../lib/prisma";
import { cacheLife } from "next/cache";

// Constants
import { PROJECTS_PER_PAGE } from "@/app/constants";

// Types
import { CategoriesNames } from "@/generated/prisma/enums";

export async function getProjects({
  featured,
  category,
  searchQuery,
  page,
}: {
  featured?: string | null;
  category?: CategoriesNames | null;
  searchQuery?: string | null;
  page?: string | null;
}) {
  "use cache";
  cacheLife("days");

  try {
    const projects = await prisma.project.findMany({
      where: {
        ...(featured ? { featured: featured === "true" } : {}),
        ...(category ? { category: category } : {}),
        ...(searchQuery
          ? {
              OR: [
                { title: { contains: searchQuery, mode: "insensitive" } },
                { excerpt: { contains: searchQuery, mode: "insensitive" } },
              ],
            }
          : {}),
      },

      // pagination
      skip: page ? (Number(page) - 1) * PROJECTS_PER_PAGE : undefined,
      take: PROJECTS_PER_PAGE,
    });

    const projectsCount = await prisma.project.count({
      where: {
        ...(featured ? { featured: featured === "true" } : {}),
        ...(category ? { category: category } : {}),
        ...(searchQuery
          ? {
              OR: [
                { title: { contains: searchQuery, mode: "insensitive" } },
                { excerpt: { contains: searchQuery, mode: "insensitive" } },
              ],
            }
          : {}),
      },
    });

    return { projects, projectsCount };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Failed to load projects!");
  }
}

export async function getProject({ slug }: { slug: string }) {
  "use cache";
  cacheLife("days");

  try {
    const project = await prisma.project.findUnique({
      where: {
        slug: slug,
      },
    });

    return project;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Failed to load project!");
  }
}

export async function getCategories() {
  "use cache";
  cacheLife("weeks");

  try {
    const categories = await prisma.project.findMany({
      select: {
        category: true,
      },
      distinct: ["category"],
    });

    return categories;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Failed to load categories!");
  }
}
