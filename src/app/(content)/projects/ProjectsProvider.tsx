"use server";

import { prisma } from "../../../../lib/prisma";
import { ProjectType } from "../../types";
import type { CategoriesNames } from "@/generated/prisma/enums";

export async function getProjects(
  curPage: number,
  projectsPerPage: number,
  searchQuery: string,
  curCategory: string,
) {
  try {
    const projects = await prisma.project.findMany({
      where: {
        ...(curCategory !== "All" && {
          category: curCategory as CategoriesNames,
        }),

        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { excerpt: { contains: searchQuery, mode: "insensitive" } },
        ],
      },
      skip: (curPage - 1) * projectsPerPage,
      take: projectsPerPage,
    });

    return projects as ProjectType[];
  } catch (err) {
    return null;
  }
}

// used to count pagination pages
export async function countProjects(searchQuery: string, curCategory: string) {
  try {
    return await prisma.project.count({
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { excerpt: { contains: searchQuery, mode: "insensitive" } },
          { title: { contains: curCategory, mode: "insensitive" } },
          { excerpt: { contains: curCategory, mode: "insensitive" } },
        ],
      },
    });
  } catch (err) {
    return null;
  }
}

export async function getCategories() {
  try {
    return await prisma.project.findMany({
      select: {
        category: true,
      },
    });
  } catch (err) {
    return null;
  }
}

export async function getProject(slug: string): Promise<ProjectType | null> {
  try {
    return (await prisma.project.findUnique({
      where: { slug: slug },
    })) as ProjectType;
  } catch (err) {
    return null;
  }
}

// homepage
export async function getFeaturedProjects() {
  try {
    const featuredProjects = await prisma.project.findMany({
      where: {
        featured: true,
      },
      take: 2,
    });

    return featuredProjects as ProjectType[] | null;
  } catch (err) {
    return null;
  }
}
