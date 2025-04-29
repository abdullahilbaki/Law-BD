import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SuccessBox = ({ icon, title, number }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="border-2 border-gray-200 bg-gray-200 rounded-2xl p-6 flex flex-col gap-2 hover:shadow-sm"
    >
      <img src={icon} alt={title} className="w-12" />
      <h2 className="font-extrabold text-3xl">
        {inView ? <CountUp end={number} duration={5} /> : 0}+
      </h2>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

export default SuccessBox;
