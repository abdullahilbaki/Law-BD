import React from "react";
import SubHeader from "../SubHeader/SubHeader";

const InfoCard = () => {
  const title = "Lawyer's Profile Details";
  const subtitle = `Explore the lawyer's professional background, areas of 
  specialization, and years of experience. This profile also includes important 
  information about availability, consultation fees, and the range of legal 
  services offered.`;

  return (
    <div className="my-4 border-2 border-gray-200 bg-gray-200 rounded-2xl p-6 flex flex-col gap-2 hover:shadow-sm">
      <SubHeader title={title} subtitle={subtitle} />
    </div>
  );
};

export default InfoCard;
