"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function hero() {
  const t = useTranslations("HomePage");
  const heroTexts = t.raw("hero");

  return (
    <div className=" bg-cover bg-top bg-no-repeat pt-26  md:min-h-[500px]  bg-[url('/assets/images/bg.avif')] m-auto mt-8 w-[100%] flex flex-col gap-1 justify-center items-center text-center">
      <div className="flex flex-col gap-4  justify-center items-center text-center m-auto px-4 md:px-0">
        <div className="flex md:flex-row flex-col gap-2   justify-center items-center text-center m-auto">
          <h1 className="text-[#0000ff] flex md:gap-2  gap-1 md:text-[60px] text-[24px] font-[700]">
            {heroTexts[0]}
          </h1>
          <span className="text-[#000] flex md:gap-2  gap-1 md:text-[60px] text-[24px] font-[700]  ">
            {heroTexts[1]}
          </span>
        </div>

        <h2 className="md:text-[20px]  text-[12px] mb-6  text-[#50595f]">
          {heroTexts[2]}
        </h2>
      </div>
      <div className="flex flex-wrap md:gap-10 gap-2 w-full justify-center items-center m-auto">
        <div className="flex">
          <Link
            href="/contact"
            className="cursor-pointer md:text-[16px] text-[12px]  font-bold md:block bg-[#0000ff] hover:bg-[#8700FF] text-white md:px-[45px] px-[20px] py-[6px]  rounded-[3px]  transition  font[600] shadow-sm"
          >
            {heroTexts[5]}
          </Link>
        </div>
        <div>
          <a
            href="https://tajhouse.com/luster"
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer bg-[#0000ff]  flex text-center md:text-[16px] font-bold text-[12px] items-center flex-row  gap-2   px-[20px] md:py-[1.5px] py-[0px] rounded-sm hover:bg-[#dc0d09] text-[#fff] transition  font[600] shadow-lg"
          >
            <img
              src="/assets/images/cropped-52b7709ad276b2f8fcae9fa75255370f045aa349-e1757838916671.png"
              width={28}
              alt=""
            />
            {heroTexts[4]}
          </a>
        </div>
      </div>
    </div>
  );
}
