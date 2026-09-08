import { IoDocumentText } from "react-icons/io5";
import BlogCard from "../(content)/blogs/BlogCard";
import { getBlogs } from "../(content)/blogs/BlogsProvider";
import { getLatestBlogs } from "../(content)/blogs/BlogsProvider";
import ErrorUI from "./ErrorUI";

export async function LatestPosts() {
  const recentBlogs = await getLatestBlogs();
  if (!recentBlogs) return <ErrorUI />;

  return (
    <>
      <div className="mb-5 grid grid-cols-1 gap-3 text-start sm:grid-cols-2">
        {recentBlogs?.map((blog) => (
          <BlogCard loading={false} key={blog.slug} blog={blog} />
        ))}
      </div>
    </>
  );
}
