"use server";

import { prisma } from "../../../../lib/prisma";
import { BlogType } from "../../types";

export async function getBlogs() {
  const blogs = await prisma.blog.findMany();

  return blogs as BlogType[] | null;
}

export async function getBlog(slug: string) {
  const blog = await prisma.blog.findUnique({ where: { slug: slug } });
  return blog as BlogType | null;
}
