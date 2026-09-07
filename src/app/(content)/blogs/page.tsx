"use client";
import { useEffect, useState, useRef } from "react";

// types
import { BlogType } from "../../types";
import { getBlogs, countBlogs } from "./BlogsProvider";

// components
import BlogCard from "./BlogCard";

// filter components
import SearchFilter from "../../components/SearchFilter";
import OrderFilter from "../../components/OrderFilter";
import Pagination from "../../components/Pagination";

// loading effect
import BlogsSkeleton from "./skeleton";

const BlogsPage = () => {
  const initialMount = useRef(true);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogType[] | null>(null);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [order, setOrder] = useState("newest");
  const options = ["Newest", "Oldest"];
  const blogsPerPage = 4;

  useEffect(() => {
    setBlogs(null);
  }, [searchQuery]);

  useEffect(() => {
    async function load() {
      try {
        const [blogs, totalPages] = await Promise.all([
          getBlogs(curPage, blogsPerPage, order, searchQuery),
          countBlogs(searchQuery).then((res) => Math.ceil(res / blogsPerPage)),
        ]);

        setBlogs(blogs);
        setTotalPages(totalPages);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      }
    }

    const timer = setTimeout(() => {
      load();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    setLoading(true);
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

    async function load() {
      try {
        const [blogs, totalPages] = await Promise.all([
          getBlogs(curPage, blogsPerPage, order, searchQuery),
          countBlogs(searchQuery).then((res) => Math.ceil(res / blogsPerPage)),
        ]);

        setBlogs(blogs);
        setTotalPages(totalPages);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [curPage, order]);

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

        {blogs ? (
          <div className={`transition-opacity duration-200 flex flex-col`}>
            {blogs.length > 0 ? (
              <div
                className={`${loading ? "opacity-50" : "opacity-100"} flex flex-col gap-y-5`}
              >
                {blogs.map((blog) => (
                  <BlogCard loading={loading} key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-700 dark:text-slate-50">
                No results found.
              </p>
            )}

            <Pagination
              totalPages={totalPages}
              curPage={curPage}
              setCurPage={setCurPage}
            />
          </div>
        ) : (
          <BlogsSkeleton count={blogsPerPage} onHome={false} />
        )}
      </div>
    </>
  );
};

export default BlogsPage;
