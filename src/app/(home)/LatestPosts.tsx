import BlogCard from "../(content)/blogs/BlogCard";
import { getBlogs } from "../(content)/blogs/blogs";
import { BlogType } from "../types";

export async function LatestPosts() {
  const recentBlogs = await getBlogs({ latest: "true" });

  return (
    <>
      <div className="mb-5 grid grid-cols-1 gap-3 text-start sm:grid-cols-2">
        {recentBlogs.blogs?.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </>
  );
}
