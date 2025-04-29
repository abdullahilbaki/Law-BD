import React from "react";
import SubHeader from "../SubHeader/SubHeader";
import LawyersList from "../LawyersList/LawyersList";

const Lawyers = ({ lawyersData }) => {
  const title = "Our Best Lawyers";
  const subtitle = `Our platform connects you with verified, experienced 
    Lawyers across various specialties — all at your convenience. Whether it's
    a routine checkup or urgent consultation, book appointments in minutes and 
    receive quality care you can trust.`;

  return (
    <div id="lawyers">
      <SubHeader title={title} subtitle={subtitle} />
      <LawyersList lawyersData={lawyersData} />
    </div>
  );
};

export default Lawyers;
