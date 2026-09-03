"use client";
import { useEffect, useState } from "react";

// components
import BlogCard from "./BlogCard";

// types
import { BlogType } from "../../types";
import { getBlogs } from "./BlogsProvider";
import SearchFilter from "../../components/SearchFilter";
import OrderFilter from "../../components/OrderFilter";
import Pagination from "../../components/Pagination";
import BlogsSkeleton from "./skeleton";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogType[] | null>(null);

  // get data
  useEffect(() => {
    async function load() {
      try {
        const blogs = await getBlogs();
        setBlogs(blogs);
      } catch (err) {}
    }

    load();
  }, []);

  // filter by search
  const [searchQuery, setSearchQuery] = useState<string>("");
  const blogsBySearch = blogs?.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // filter by order
  const [order, setOrder] = useState("newest");
  const options = ["Newest", "Oldest"];
  const blogsByOrder = blogsBySearch?.slice().sort((a, b) => {
    const aDate = new Date(a.event_date).getTime();
    const bDate = new Date(b.event_date).getTime();

    switch (order.toLowerCase()) {
      case "newest":
        return bDate - aDate;
      case "oldest":
        return aDate - bDate;
    }

    return 0;
  });

  // pagination
  const [curPage, setCurPage] = useState(1);
  const blogsPerPage = 4;
  const totalPages = blogsByOrder
    ? Math.ceil(blogsByOrder?.length / blogsPerPage)
    : 0;

  const lastBlog = curPage * blogsPerPage;
  const firstBlog = lastBlog - blogsPerPage;
  const currentBlogs = blogsByOrder?.slice(firstBlog, lastBlog);

  return (
    <>
      <div className="w-full p-5">
        <h1 className="my-5 text-3xl font-medium dark:text-slate-50">
          My Blogs
        </h1>

        <div className="mb-5 flex flex-col items-center gap-x-4 gap-y-4 sm:items-end">
          <SearchFilter
            search={searchQuery}
            setSearch={(query) => {
              setSearchQuery(query);
              setCurPage(1);
            }}
          />
          <OrderFilter order={order} setOrder={setOrder} options={options} />
        </div>

        {currentBlogs ? (
          <div className="flex flex-col gap-y-5">
            {currentBlogs.length > 0 ? (
              currentBlogs?.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div>no results were found.</div>
            )}
          </div>
        ) : (
          <BlogsSkeleton count={blogsPerPage} onHome={false} />
        )}

        <Pagination
          totalPages={totalPages}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      </div>
    </>
  );
};

export default BlogsPage;
