import BlogCard from "./BlogCard";
import Pagination from "@/app/components/Pagination";
import { BLOGS_PER_PAGE } from "@/app/constants";
import { getBlogs } from "./blogs";

export default async function RenderBlogs({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string; order?: string }>;
}) {
  const { search, page, order } = await searchParams;

  const data = await getBlogs({
    searchQuery: search || null,
    page: page || null,
    order: order || null,
  });

  const blogs = data.blogs;
  const blogsCount = data.blogsCount;

  const totalPages = Math.ceil(blogsCount / BLOGS_PER_PAGE);

  return (
    <>
      {blogs.length > 0 ? (
        <div className={`flex flex-col gap-y-5`}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-700 dark:text-slate-50">
          No results found.
        </p>
      )}

      <Pagination totalPages={totalPages} />
    </>
  );
}
