import React from "react";
import { BsExclamationSquare } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

const BookAppointment = ({ lawyer }) => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const existingLawyers =
      JSON.parse(localStorage.getItem("selectedLawyers")) || [];
    const isAlreadyAdded = existingLawyers.some((l) => l.id === lawyer.id);
    if (!isAlreadyAdded) {
      existingLawyers.push(lawyer);
      localStorage.setItem("selectedLawyers", JSON.stringify(existingLawyers));

      navigate("/bookings");

      toast.success(`Appointment scheduled for ${name} successfully`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Appointment already scheduled for today", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="my-4 border border-gray-200 rounded-2xl p-6 gap-6 hover:shadow-sm ">
      <h3 className="text-center font-bold text-lg">Book an Appointment</h3>
      <hr className="mt-4 dashed" />
      <div className="mt-4 flex flex-wrap gap-4 justify-between">
        <p>Availability</p>
        <button className="px-2 rounded-full text-sm text-green-700 bg-green-100">
          Lawyer Available Today
        </button>
      </div>
      <hr className="mt-4 border text-gray-300" />
      <p className="flex items-center justify-start gap-2 mt-4 p-2 rounded-xl text-sm font-medium text-yellow-600 bg-yellow-100 ">
        <BsExclamationSquare />
        Due to high patient volume, we are currently accepting appointments for
        today only. We appreciate your understanding and cooperation.
      </p>
      <button
        onClick={() => handleClick(lawyer.name)}
        className="mt-4 mx-auto block w-[90%] btn btn-sm sm:btn-md bg-green-600 text-white rounded-full"
      >
        Book Appointment Now{" "}
      </button>
    </div>
  );
};

export default BookAppointment;
