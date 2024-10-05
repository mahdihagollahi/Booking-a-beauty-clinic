"use client";
import React, { Fragment, useState } from "react";
import Navbar from "../Landing/Navbar";
import NoranidNews from "../Doctors/NoranidNews";
import Footer from "../Landing/Footer";
import Paginate from "@/Component/Service/Component/Paginet";
import ArticleShow from "./Component/ArticleShow";
import ArticleData from "@/Component/Article/Component/ArticleData";
import FilterData from "@/Component/Article/Component/FilterDataToggle";
import ArticleImage from '@/assent/Img/Article/ArticleImage.svg'
import Image from "next/image";
import FilterArticle from "./Component/FilterArticle";

const Article = () => {

  const Data = ArticleData().Article;
  const [filledHeart, setFilledHeart] = useState<Record<number, boolean>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  const handleHeartClick = (index: number) => {
    setFilledHeart((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <Fragment>
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="my-10 px-20">
       <Image
       src={ArticleImage}
       width={184}
       height={30}
       alt=""
       />
      </div>
      <div>
        <FilterArticle/>
      </div>
      <div className="flex  ">
      <div>
          <FilterData />
        </div>
        <div className="grid grid-cols-3 mr-10 mt-10 gap-9 w-[80%]">
          <ArticleShow
            currentPageData={currentPageData}
            filledHeart={filledHeart}
            handleHeartClick={handleHeartClick}
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Paginate
          currentPageData={currentPageData}
          pageCount={pageCount}
          pageClick={pageClick}
        />
      </div>
      <div className="w-full">
        <NoranidNews />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Article;
