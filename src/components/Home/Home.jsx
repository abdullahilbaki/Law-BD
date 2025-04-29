import React from "react";
import Banner from "../Banner/Banner";
import Success from "../Success/Success";
import Lawyers from "../Lawyers/Lawyers";
import { useLoaderData } from "react-router";

const Home = () => {
  const lawyersData = useLoaderData();

  return (
    <>
      <Banner />
      <Lawyers lawyersData={lawyersData} />
      <Success />
    </>
  );
};

export default Home;
