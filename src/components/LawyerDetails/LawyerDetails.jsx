import React from "react";
import { useLoaderData } from "react-router";
import InfoCard from "../InfoCard/InfoCard";
import LawyerDetailsCard from "../LawyerDetailsCard/LawyerDetailsCard";
import BookAppointment from "../BookAppointment/BookAppointment";

const LawyerDetails = () => {
  const lawyer = useLoaderData();

  return (
    <div>
      <InfoCard />
      <LawyerDetailsCard lawyer={lawyer} />
      <BookAppointment lawyer={lawyer} />
    </div>
  );
};

export default LawyerDetails;
