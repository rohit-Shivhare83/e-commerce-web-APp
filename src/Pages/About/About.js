import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";

const About = () => {
  const data = {
    name: "Ecommerce web",
  };
  return (
    <div>
      <HeroSection myData={data} />
    </div>
  );
};

export default About;
