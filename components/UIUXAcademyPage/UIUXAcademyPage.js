import React from "react";
import Image from "next/image";

const UIUXAcademyPage = () => {
  return (
    <div>
      <Image
        height={600}
        width={1500}
        src="/UI/UX.jpg"
        alt="aboutHeroImg"
        className="w-full"
      />
      <div className="mx-5">
        <div>
          <div className="flex flex-col justify-center items-center text-center my-20 gap-10">
            <h1 className="font-daxlineMedium text-xl md:text-3xl md:w-[53rem]">
              Welcome to Vatebra UI/UX Academy - Elevate Your Design Thinking
              and Product Design Skills.
            </h1>
            {/* <SecondSection /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXAcademyPage;
