import React from "react";

const SubHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center p-4">
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <p className="text-gray-500 text-sm sm:text-base lg:w-[80%]">{subtitle}</p>
    </div>
  );
};

export default SubHeader;
