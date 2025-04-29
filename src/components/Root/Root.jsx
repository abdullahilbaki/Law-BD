import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { ScaleLoader } from "react-spinners";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="container mx-auto p-4">
        <ScrollToTop />
        <Navbar />
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <ScaleLoader />
          </div>
        ) : (
          <div className="transition-opacity duration-500 opacity-0 animate-fadeIn">
            <Outlet />
          </div>
        )}

        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Root;
