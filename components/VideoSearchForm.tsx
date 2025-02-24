"use client";
import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import searchIcon from "@/public/icons/search.svg";
import MobileSearchBox from "./MobileSearchBox";
const VideoSearchForm = () => {
  const [isMobileSearchForm, setIsMobileSearchForm] = useState(false);
  const handleSubmit = () => {};
  return (
    <>
      <div className="w-full h-full flex items-center justify-end px-2 sm:hidden">
        <Image
          src={searchIcon}
          alt="searchBox"
          className="sm:hidden w-8 cursor-pointer"
          onClick={() => {
            setIsMobileSearchForm(true);
          }}
        />
      </div>
      <form className="relative max-sm:hidden w-96 lg:w-[30rem] h-12 flex items-center justify-center">
        <Input
          type="text"
          placeholder="Search for videos or live streams"
          className="w-full h-full border-[1px] rounded-full outline-none absolute pl-4 pr-12"
        />
        <Image
          src={searchIcon}
          alt="search"
          className="w-7 cursor-pointer absolute right-4"
          onClick={handleSubmit}
        />
      </form>
      <MobileSearchBox
        show={isMobileSearchForm}
        onClickOutside={() => {
          setIsMobileSearchForm(false);
        }}
      />
    </>
  );
};

export default VideoSearchForm;
