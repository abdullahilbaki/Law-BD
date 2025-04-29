import React, { Suspense, useState } from "react";
import { FaRegRegistered } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router";

const LawyersList = ({ lawyersData }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedLawyers = showAll ? lawyersData : lawyersData.slice(0, 6);

  const handleClick = () => {
    setShowAll(!showAll);

    if (showAll) {
      setTimeout(() => {
        const section = document.getElementById("lawyers");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedLawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className="rounded-xl border border-gray-300 p-4 flex gap-4 sm:gap-8 hover:shadow"
          >
            {/* left image section  */}
            <LazyLoadImage
              src={lawyer.image_url}
              alt={lawyer.name}
              loading="lazy"
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "0.3s" },
              }}
              className="object-cover rounded-xl w-40 h-full"
            />

            {/* right info section  */}
            <div>
              <div className="flex flex-wrap gap-2">
                <button className="px-2 rounded-full text-sm text-green-700 bg-green-100">
                  {lawyer.availability.length > 0 && "Available"}
                </button>
                <button className="px-2 rounded-full text-sm text-blue-600 bg-blue-100">
                  {lawyer.experience_years}+ Years Experience
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-4 text-gray-500 text-sm">
                <p className="text-lg font-bold text-black">{lawyer.name}</p>
                <p>{lawyer.specialty} Expert</p>
                <p className="flex items-center gap-1">
                  <FaRegRegistered /> License No: {lawyer.license_number}
                </p>
                <Link to={`/lawyerDetails/${lawyer.license_number}`}>
                  <button className="btn btn-sm btn-outline btn-info rounded-full w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="mt-6 mb-10 mx-auto block btn btn-sm sm:btn-md bg-green-600 text-white rounded-full"
      >
        {showAll ? "Show Less" : "Show All Lawyer"}
      </button>
    </>
  );
};

export default LawyersList;
