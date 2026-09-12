import { prisma } from "../../../../lib/prisma";
import type { BlogType } from "@/app/types";
import { cacheLife } from "next/cache";

// Constants
import { BLOGS_PER_PAGE } from "@/app/constants";

export async function getBlogs({
  latest,
  searchQuery,
  page,
  order,
}: {
  latest?: string | null;
  searchQuery?: string | null;
  page?: string | null;
  order?: string | null;
}) {
  "use cache";
  cacheLife("days");

  try {
    const blogs = await prisma.blog.findMany({
      where: {
        ...(searchQuery
          ? {
              OR: [
                { title: { contains: searchQuery, mode: "insensitive" } },
                { excerpt: { contains: searchQuery, mode: "insensitive" } },
              ],
            }
          : {}),
      },

      orderBy: {
        event_date: order?.toLowerCase() === "oldest" ? "asc" : "desc",
      },

      // pagination
      skip: page ? (Number(page) - 1) * BLOGS_PER_PAGE : undefined,
      take: latest ? 2 : BLOGS_PER_PAGE,
    });

    const blogsCount = await prisma.blog.count({
      where: {
        ...(searchQuery
          ? {
              OR: [
                { title: { contains: searchQuery, mode: "insensitive" } },
                { excerpt: { contains: searchQuery, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      take: latest ? 2 : undefined,
    });

    return { blogs: blogs as BlogType[], blogsCount };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Failed to load blogs!");
  }
}

export async function getBlog({ slug }: { slug: string }) {
  "use cache";
  cacheLife("days");

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    return { blog };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Failed to load blog!");
  }
}
