import { IoDocumentText } from "react-icons/io5";
import BlogCard from "../(content)/blogs/BlogCard";
import { getBlogs } from "../(content)/blogs/BlogsProvider";

export async function LatestPosts() {
  const recentBlogs = (await getBlogs())
    ?.slice()
    .sort((a, b) => {
      const aDate = new Date(a.event_date).getTime();
      const bDate = new Date(b.event_date).getTime();

      return aDate - bDate;
    })
    .slice(0, 2);

  return (
    <>
      <div className="mb-5 grid grid-cols-1 gap-3 text-start sm:grid-cols-2">
        {recentBlogs?.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </>
  );
}
