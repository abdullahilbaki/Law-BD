import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

const NoLawyerError = () => {
  const navigate = useNavigate();
  const { licenseNumber } = useParams();
  return (
    <div className="container mx-auto p-4">
      <div className="mt-10 flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl sm:text-4xl font-bold">No Lawyer Found!!</h2>
        <p className="font-semibold text-gray-500">
          No Lawyer Found with this License No -{" "}
        </p>
        <p className="font-semibold flex items-center gap-1"><FaRegRegistered /> {licenseNumber}</p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-sm sm:btn-md bg-green-600 text-white rounded-full mb-50"
        >
          View All lawyers
        </button>
      </div>
    </div>
  );
};

export default NoLawyerError;
