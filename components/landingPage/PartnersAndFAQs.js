import React from "react";
import Accordion from "./FAQAccordion";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";

const PartnersAndFAQs = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        priority
        src="/cohortBg.svg"
        width={1000}
        height={5}
        alt="Why Background Image"
        className=" w-full -z-50 absolute right-0 scale-[2] top-[-10rem]"
      />
      {/* Partners */}
      <div className="mt-20 px-5 md:px-24 py-32">
        <h1 className="text-center mb-10 px-10 font-daxlineBold text-3xl">
          Partners
        </h1>
        <div className="flex p-2 items-center gap-10 md:gap-20 flex-wrap justify-center bg-[white]">
          <Image height={91} width={192} src="P1Image.svg" alt="patner image" />
          <Image height={91} width={192} src="p2Image.svg" alt="patner image" />
          <Image height={91} width={192} src="p3Image.svg" alt="patner image" />
        </div>
      </div>
      {/* FAQs */}
      <div className="p-5 md:px-24 md:py-14 bg-[#FBF9F9] bg-opacity-[0.69]  rounded-[3.5rem] w-full md:max-w-[90%] mx-auto my-20">
        <div className="max-w-[22rem] flex justify-center items-center border-b-4 px-8 border-b-[#CB1829] mx-auto">
          <h2 className="text-[2rem] mdtext-[2.8rem] font-daxlineBold fontweight-bold">
            FAQ
          </h2>
        </div>
        <div className="max-w-full lg:max-w-[80%] mx-auto">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default PartnersAndFAQs;
