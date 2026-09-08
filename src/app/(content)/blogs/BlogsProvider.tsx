"use server";

import { prisma } from "../../../../lib/prisma";
import { BlogType } from "../../types";

// used for getting a single blog's info by slug
export async function getBlog(slug: string) {
  try {
    const blog = await prisma.blog.findUnique({ where: { slug: slug } });
    return blog as BlogType;
  } catch (err) {
    return null;
  }
}
// applies pagination, filter by order, and filter by search
export async function getBlogs(
  page: number,
  limit: number,
  order: string,
  searchQuery: string,
) {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        OR: [
          { title: { contains: searchQuery.trim(), mode: "insensitive" } },
          { excerpt: { contains: searchQuery.trim(), mode: "insensitive" } },
        ],
      },
      orderBy: {
        event_date: order.toLowerCase() === "newest" ? "desc" : "asc",
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return blogs as BlogType[];
  } catch (err) {
    return null;
  }
}
// countsBlogs to then count pages(totalPages) -> used for paginatioon
export async function countBlogs(searchQuery: string) {
  try {
    const count = await prisma.blog.count({
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { excerpt: { contains: searchQuery, mode: "insensitive" } },
        ],
      },
    });

    return count;
  } catch (err) {
    return null;
  }
}

// homePage
export async function getLatestBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        event_date: "desc",
      },
      take: 2,
    });

    return blogs as BlogType[];
  } catch (err) {
    return null;
  }
}
