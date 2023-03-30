import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Services from "../../Components/Services/Services";
import Trusted from "../../Components/Trusted/Trusted";

const Home = () => {
  const data = {
    name: "Shivhare Store",
  };
  return (
    <div>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
