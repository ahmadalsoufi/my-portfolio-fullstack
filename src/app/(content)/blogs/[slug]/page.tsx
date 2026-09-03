"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { getBlog } from "../BlogsProvider";

// types
import { BlogType } from "@/app/types";
import GoBackBtn from "@/app/components/GoBackBtn";
import BlogSkeleton from "./skeleton";

const BlogsDetailsPage = () => {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    async function load() {
      try {
        const blog = await getBlog(slug);
        setBlog(blog);
      } catch (err) {
        if (err instanceof Error) throw new Error(err.message);
      }
    }

    load();
  }, []);

  return (
    <>
      {blog ? (
        <section className="flex h-full flex-col items-center justify-center bg-slate-50 px-5 py-8 text-center shadow-md sm:m-5 sm:rounded-lg sm:px-10 dark:bg-slate-800 dark:text-slate-100 animation-fade-in">
          <div className="prose prose-h2:capitalize prose-h2:sm:text-3xl prose-h2:text-2xl prose-h2:dark:text-slate-100 prose-p:dark:text-slate-300 mb-17">
            <ReactMarkdown>{blog?.description}</ReactMarkdown>
          </div>

          <div className="flex w-full items-center justify-between">
            <h3 className="text-sm font-bold tracking-wide dark:text-slate-400">
              {new Date(blog?.event_date).toDateString()}
            </h3>

            <GoBackBtn href="/blogs" />
          </div>
        </section>
      ) : (
        <BlogSkeleton />
      )}
    </>
  );
};

export default BlogsDetailsPage;
