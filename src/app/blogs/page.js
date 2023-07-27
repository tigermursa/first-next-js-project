import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Blogs - next js ",
  description: "next js",
};

const blogs = [
  {
    id: 1,
    year: 2026,
    title: "title-1",
  },
  {
    id: 2,
    year: 2026,
    title: "title-2",
  },
  {
    id: 3,
    year: 2026,
    title: "title-3",
  },
];
const BlogPage = () => {
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link className="block border border-blue-600 p-2 my-2" to href={`/blogs/${year}/${id}`} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;


// onclick push useRouter 

// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import React from "react";
// export const metadata = {
//   title: "Blogs - next js ",
//   description: "next js",
// };

// const blogs = [
//   {
//     id: 1,
//     year: 2026,
//     title: "title-1",
//   },
//   {
//     id: 2,
//     year: 2026,
//     title: "title-2",
//   },
//   {
//     id: 3,
//     year: 2026,
//     title: "title-3",
//   },
// ];
// const BlogPage = () => {
//   const router = useRouter();
//   return (
//     <div className="container mx-auto">
//       {blogs.map(({ id, year, title }) => (
//         <button
//           className="block border border-blue-600 p-2 my-2"
//           to
//           // href={`/blogs/${year}/${id}`}
//           onClick={() => router.push(`/blogs/${year}/${id}? title=${title}`)}
//           key={id}
//         >
//           {title}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;
