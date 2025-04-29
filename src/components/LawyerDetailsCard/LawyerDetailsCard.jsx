import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LawyerDetailsCard = ({ lawyer }) => {
  return (
    <div className="my-4 border border-gray-200 rounded-2xl p-6 flex flex-wrap items-center gap-6 hover:shadow-sm ">
      {/* left image section  */}
      <div className="w-40 h-40 md:w-80 md:h-80 min-w-[7rem] overflow-hidden rounded-xl">
        <LazyLoadImage
          src={lawyer.image_url}
          alt={lawyer.name}
          loading="lazy"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "0.3s" },
          }}
          className="object-cover rounded-xl w-full h-full"
        />
      </div>

      {/* right info section  */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <button className="px-2 rounded-full text-sm text-blue-600 bg-blue-100">
            {lawyer.experience_years}+ Years Experience
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-4 text-gray-500 text-sm">
          <p className="text-2xl font-bold text-black">{lawyer.name}</p>

          <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
            <p>{lawyer.specialty} Expert</p>
            <p className="flex items-center gap-1">
              <FaRegRegistered /> License No: {lawyer.license_number}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <h4 className="font-semibold text-gray-600 ">Availability</h4>
            {lawyer.availability.length > 0 &&
              lawyer.availability.map((day, index) => (
                <button
                  className="px-2 rounded-full text-sm font-medium text-yellow-600 bg-yellow-100"
                  key={index}
                >
                  {day}
                </button>
              ))}
          </div>

          <h4 className="mt-4 font-semibold text-gray-600 ">
            Consultation Fee:{" "}
            <span className="text-green-600 ml-4 font-bold">${lawyer.fee}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetailsCard;
