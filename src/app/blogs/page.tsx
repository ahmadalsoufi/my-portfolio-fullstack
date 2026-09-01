"use client";
import { useEffect, useState } from "react";

// components
import BlogCard from "./BlogCard";

// types
import { BlogType } from "../types";
import { getBlogs } from "./BlogsProvider";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogType[] | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const blogs = await getBlogs();
        setBlogs(blogs);
      } catch (err) {}
    }

    load();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-y-5">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default BlogsPage;
