import Link from "next/link";
import React from "react";
import loadBlogData from "../utils/loadBlogData";
export const metadata = {
  title: "Blogs - next js ",
  description: "next js",
};

const BlogPage = async () => {
  const blogs = await loadBlogData();

  return (
    <div className="container mx-auto">
      {blogs.map(({ id, completed, title }) => (
        <div key={id} className="block border border-blue-600 p-2 my-2">
          <h1>
            {id}.{title}
          </h1>
          <Link href={`/blogs/${id}`} className="inline-block mt-5">
            <button className="text-white px-2 py-1 bg-blue-500">Go</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
