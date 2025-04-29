import React from "react";
import pageNotFound from "../../assets/404.png";
import Navbar from "../Navbar/Navbar";
import { useNavigate, useNavigation } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScaleLoader } from "react-spinners";

const ErrorPage = () => {
  const navigation = useNavigation();

  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      {navigation.state === "loading" ? (
        <ScaleLoader className="text-center my-10" />
      ) : (
        <div className="flex flex-col items-center text-center gap-4">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={pageNotFound}
            wrapperProps={{
              style: { transitionDelay: "0.3s" },
            }}
            alt="page not found"
            className="mx-auto block mt-10 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] rounded-2xl shadow-lg"
          />
          <h2 className="text-2xl text-red-500 font-bold">
            404 - Page Not Found
          </h2>
          <p className="font-semibold">
            Oops! The page you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="btn btn-sm sm:btn-md bg-green-600 text-white rounded-full mb-50"
          >
            Go Back Home
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
