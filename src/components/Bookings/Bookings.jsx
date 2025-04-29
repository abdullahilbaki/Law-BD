import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import BookingCards from "../BookingCards/BookingCards";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router";
import CustomShapeBarChart from "../CustomShapeBarChart/CustomShapeBarChart";
import { ScaleLoader } from "react-spinners";

const Bookings = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const storedLawyers =
      JSON.parse(localStorage.getItem("selectedLawyers")) || [];
    setLawyers(storedLawyers);
    setLoading(false);
  }, []);

  const handleClick = (license_number) => {
    const existingLawyers = JSON.parse(localStorage.getItem("selectedLawyers"));
    const updatedLawyers = existingLawyers.filter(
      (l) => l.license_number !== license_number
    );

    localStorage.setItem("selectedLawyers", JSON.stringify(updatedLawyers));
    setLawyers(updatedLawyers);

    toast.error("Appointment Canceled", {
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
  };

  const title =
    lawyers.length > 0
      ? "My Today Appointments"
      : "You Have not Booked any appointment yet";
  const subtitle = `Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.`;

  if (loading) {
    return <ScaleLoader className="text-center my-10" />;
  }
  return loading ? (
    <ScaleLoader className="text-center my-10" />
  ) : (
    <div>
      {lawyers.length > 0 && <CustomShapeBarChart lawyers={lawyers} />}
      <SubHeader title={title} subtitle={subtitle} />
      <BookingCards lawyers={lawyers} handleClick={handleClick} />
      {lawyers.length === 0 ? (
        <button
          onClick={() => navigate("/")}
          className="mx-auto block btn bg-blue-500 text-white rounded-full mb-40"
        >
          Book an Appointment
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Bookings;
