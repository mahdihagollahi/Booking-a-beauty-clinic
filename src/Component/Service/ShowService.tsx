"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/assent/Img/Service/arrowLeft.png";
import ranking from "@/assent/Img/Service/ranking.svg";
import Navbar from "../Landing/Navbar";
import ServiceData from "./ServiceData";
import Comments from "@/Component/Service/Comments";
import RatingForm from "./RatingForm";
import Modal from "./Modal";
import ServiceInfo from "./ServiceInfo";
import ServiceDescription from "./ServiceDescription";
import ServiceReservation from "./ServiceReservation";
import WhyUs from "./WhyUs";
import Metod from "./Metod";
import SetComment from "./SetComment";

const ServiceDetails = ({ serviceData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    console.log("Opening modal...");
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setIsModalVisible(false);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <Image key={i} src={ranking} width={24} height={24} alt="Ranking" />
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="font-medium flex items-center text-xl text-[#727272]">
        خدمات
        <Image src={ArrowLeft} width={24} height={24} alt="Arrow Left" />
        <p className="mr-1 text-[#393939]">{serviceData.serviceTitle}</p>
      </div>

      <div className="flex">
        <div>
          <ServiceInfo serviceData={serviceData} />

          <ServiceDescription serviceData={serviceData} />

          <ServiceReservation serviceData={serviceData} />
        </div>

        <div>img</div>
      </div>

      <div className="mt-20">
        <WhyUs serviceData={serviceData} />
      </div>

      <div className="mt-20">
        <Metod serviceData={serviceData} />
      </div>

      <div className="mt-32">
        <SetComment
          serviceData={serviceData}
          renderRatingStars={renderRatingStars}
          handleOpenModal={handleOpenModal}
        />
      </div>

      <div className=" px-20">
        <Comments />
      </div>
      <div className="w-full">
        <Modal isVisible={isModalVisible} handleCloseModal={handleCloseModal}>
          <RatingForm handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
};

const ShowService = () => {
  const serviceData = ServiceData();

  return (
    <div className="h-full">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="mt-20 px-24">
        <ServiceDetails serviceData={serviceData} />
      </div>
    </div>
  );
};

export default ShowService;
