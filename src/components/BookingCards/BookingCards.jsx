import React from "react";

const BookingCards = ({ lawyers, handleClick }) => {
  return (
    lawyers.length > 0 &&
    lawyers.map((lawyer) => (
      <div
        key={lawyer.license_number}
        className="my-4 border border-gray-200 rounded-2xl p-6 gap-6 hover:shadow-sm"
      >
        <div className="flex flex-wrap gap-4 justify-between">
          <p className="text-lg font-semibold">{lawyer.name}</p>
          <p className="text-gray-500">Appointment Fee : ${lawyer.fee}</p>
        </div>
        <p className="text-gray-500">{lawyer.specialty} Expert</p>
        <hr className="mt-4 dashed" />
        <button
          onClick={() => handleClick(lawyer.license_number)}
          className="mt-4 w-full btn btn-sm sm:btn-md text-red-500 border-red-500 rounded-full"
        >
          Cancel Appointment
        </button>
      </div>
    ))
  );
};

export default BookingCards;
