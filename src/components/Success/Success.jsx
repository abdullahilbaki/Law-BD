import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import SuccessBox from "../SuccessBox/SuccessBox";
import lawyerIcon from "../../assets/success-doctor.png";
import successReview from "../../assets/success-review.png";
import successPatients from "../../assets/success-patients.png";
import successStaffs from "../../assets/success-staffs.png";

const Success = () => {
  const title = "We Provide Best Law Services";
  const subtitle = `Our platform connects you with verified, experienced 
    Lawyers across various specialties — all at your convenience.`;

  const boxes = [
    {
      icon: lawyerIcon,
      number: 199,
      title: "Total Lawyer",
    },
    {
      icon: successReview,
      number: 467,
      title: "Total Reviews",
    },
    {
      icon: successPatients,
      number: 1900,
      title: "Cases Initiated",
    },
    {
      icon: successStaffs,
      number: 300,
      title: "Total Stuffs",
    },
  ];
  return (
    <>
      <SubHeader title={title} subtitle={subtitle} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10">
        {boxes.map(({ icon, number, title }, index) => (
          <SuccessBox key={index} icon={icon} number={number} title={title} />
        ))}
      </div>
    </>
  );
};

export default Success;
