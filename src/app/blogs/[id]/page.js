import loadSingleBlockData from "@/app/utils/loadSingleBlockData";
import React from "react";

const SingleBlog = async ({ params }) => {
  const { id, title } = await loadSingleBlockData(params.id);
  return (
    <div className="block border border-blue-600 p-2 my-2">
      <h1>
        {id}.{title}
      </h1>
    </div>
  );
};

export default SingleBlog;
