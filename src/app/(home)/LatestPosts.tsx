import BlogCard from "../(content)/blogs/BlogCard";
import { getLatestBlogs } from "../(content)/blogs/blogs";

export async function LatestPosts() {
  const recentBlogs = await getLatestBlogs({ latest: true });

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
