import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import { useLoaderData } from "react-router";
import { MdOutlineDateRange } from "react-icons/md";

const Blogs = () => {
  const title = "Blogs";
  const subtitle =
    "Let's explore some basic concept that will make you a good developer";

  const blogs = useLoaderData();

  return (
    <>
      <SubHeader title={title} subtitle={subtitle} />
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="my-4 border-2 border-gray-200 bg-gray-200 text-gray-500 rounded-2xl p-6 flex flex-col gap-2 hover:shadow-sm"
        >
          <h2 className="text-lg font-semibold text-black">{blog.question}</h2>
          <hr className="dashed" />
          <p className="text-blue-500">Answer: </p>
          <p>{blog.answer}</p>
          <hr className="dashed" />
          <div className="flex items-center gap-2">
            <MdOutlineDateRange />
            <p>Added at {blog.date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
