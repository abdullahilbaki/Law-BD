import React from "react";
import bannerBackground from "../../assets/banner-img-1.png";

const Banner = () => {
  const styles = {
    textSh: {
      textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
    },
  };

  return (
    <div
      className="my-8 h-full hero rounded-2xl text-neutral-content text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
      <div className="hero-content px-4 py-32 md:py-36 lg:py-40 relative z-10">
        <div className="w-full lg:max-w-[70%] mx-auto">
          <h1
            className="mb-4 sm:mb-8 text-2xl sm:text-4xl font-bold  text-white"
            style={styles.textSh}
          >
            Our Best Lawyers
          </h1>
          <p
            className="mb-6 poppins text-gray-300 text-sm sm:text-base"
            style={styles.textSh}
          >
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
