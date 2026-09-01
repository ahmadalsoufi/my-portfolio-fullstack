"use server";

import { prisma } from "../../../lib/prisma";
import { BlogType } from "../types";

export async function getBlogs() {
  const blogs = await prisma.blog.findMany();

  return blogs as BlogType[] | null;
}
