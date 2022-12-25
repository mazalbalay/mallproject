import React from "react";
import Footer from "../Footers/Footer";
import StoreListNav from "../Navs/StoreListNav";
import About from "./About";
import FAQ from "./FAQ";

const AboutPage = () => {
  return (
    <>
      <div className="h-10">
        <StoreListNav />
      </div>
      <div className=" flex justify-center">
          <div className="w-6/12">
            <FAQ />
          </div>
          <div className="w-4/12">
            <About />
          </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;
