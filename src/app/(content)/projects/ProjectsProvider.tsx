"use server";

import { prisma } from "../../../../lib/prisma";
import { ProjectType } from "../../types";

export async function getProjects() {
  const projects = await prisma.project.findMany();

  return projects as ProjectType[] | null;
}

export async function getProject(slug: string): Promise<ProjectType | null> {
  const project = await prisma.project.findUnique({ where: { slug: slug } });

  return project as ProjectType | null;
}
