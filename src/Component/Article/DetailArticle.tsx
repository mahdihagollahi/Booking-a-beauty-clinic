import React, { Fragment } from "react";
import Navbar from "../Landing/Navbar";
import Image from "next/image";
import ArticleHeader from "@/assent/Img/Article/ArticleHeader.svg";
import ArticleData from "./ArticleData";
import Footer from "../Landing/Footer";
import NoranidNews from "../Doctors/NoranidNews";

const DetailArticle = () => {
  const article = ArticleData().Artcle;
  return (
    <Fragment>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="mt-14 px-24">
        <Image src={ArticleHeader} width={316} height={30} alt="" />
      </div>

      <div className="mt-8 px-24">
        {article.map((section, index) => (
          <div key={index} className="mb-8">
            {section.images && (
              <div className="flex gap-10 mr-[25%]">
                {section.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    width={300}
                    height={200}
                    alt={`Article Image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
            {section.title && (
              <h4 className="font-medium text-2xl text-[#393939]">
                {section.title}
              </h4>
            )}
            {typeof section.description === "string" && (
              <p className="font-medium mt-10  text-xl text-[#8F8F8F]">
                {section.description}
              </p>
            )}
            {Array.isArray(section.description) && (
              <div>
                {section.description.map((items, idx) => (
                  <p
                    key={idx}
                    className="font-medium mt-10 text-xl text-[#8F8F8F]"
                  >
                    {items.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="">
        <NoranidNews/>
        <Footer />
      </div>
    </Fragment>
  );
};

export default DetailArticle;
