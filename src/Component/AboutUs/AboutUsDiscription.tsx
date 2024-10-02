import React, { Fragment } from "react";
import Navbar from "../Landing/Navbar";
import AboutUsTitle from "./AboutUsTitle";
import AboutUsPicture from "./AboutUsPicture";
import ContactUs from "./ContactUs";
import InformationInput from "./InformationInput";
import Footer from "../Landing/Footer";
import NoranidNews from "../Doctors/NoranidNews";

const AboutUsDiscription = () => {
  return (
    <Fragment>
      <div className="bg-white duration-300">
        <Navbar />
      </div>
      <div className="px-12 pl-12 py-16">
        <div className=" mx-auto p-6">
          <div className="flex justify-between">
            <AboutUsTitle />

            <AboutUsPicture />
          </div>
          <div className="mt-32 flex gap-40 items-center">
            <div>
              <ContactUs />
            </div>
            <div>
              <InformationInput />
            </div>
          </div>
        </div>
      </div>
      <div>
        <NoranidNews />
        <Footer />
      </div>
    </Fragment>
  );
};

export default AboutUsDiscription;
