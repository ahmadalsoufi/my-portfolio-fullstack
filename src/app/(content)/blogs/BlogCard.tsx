"use client";

import Link from "next/link";

import { BlogType } from "../../types";

const BlogCard = ({
  loading = false,
  blog,
}: {
  loading: boolean;
  blog: BlogType;
}) => {
  return (
    <>
      <Link
        href={`/blogs/${blog.slug}`}
        onClick={(e) => loading && e.preventDefault()}
        scroll={true}
      >
        <div className="cursor-pointer rounded-2xl bg-slate-700 p-10 text-sm text-blue-400 shadow-md transition-transform duration-300 hover:scale-98 dark:bg-slate-800 animation-fade-in">
          <div>
            <h1 className="truncate capitalize">{blog.title}</h1>
            <p className={`mb-3 truncate text-slate-50`}>{blog.excerpt}</p>

            <p className="text-sm font-medium text-slate-400">
              This event took place in{" "}
              <span className="text-slate-300">
                {new Date(blog.event_date).toDateString()}
              </span>
              (approximate)
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
