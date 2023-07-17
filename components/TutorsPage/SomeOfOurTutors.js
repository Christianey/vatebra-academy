import React from "react";
import Image from "next/image";

const TutorCard = ({ img, lastName, firstName }) => {
  return (
    <div className="flex items-center gap-5 w-96 bg-white p-3 rounded-3xl">
      <div className="flex flex-col shrink-0 basis-[30%] justify-between self-stretch">
        <Image
          height={120}
          width={130}
          src={`/${img}`}
          alt="plus image"
          className="rounded-lg"
        />

        <div className="">
            <p className="font-bold leading-3 text-[1.3rem]">{lastName}</p>
            <p>{firstName}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div>
          <h1 className=" font-daxlineBold text-sm">About Me</h1>
          <h1 className=" font-daxlineRegular text-sm">
            I'm a Product Designer who enjoys creating innovative and beautiful
            user interfaces. My area of expertise is performing user research
            that leads to better user experiences on existing products.
          </h1>
        </div>

        <div>
          <h1 className=" font-daxlineBold text-sm">Tools</h1>
          <h1 className=" font-daxlineRegular text-sm">
            Axure, Figma, Node.JS
          </h1>
        </div>
      </div>
    </div>
  );
};

const SomeOfOurTutors = () => {
  return (
    <div className="my-32 py-20 rounded-3xl bg-gradient-to-b from-white to-lime-200">
      <div className="md:px-10 flex flex-col md:flex-row items-center md:items-start justify-around gap-6 md:gap-0">
        <h1 className=" font-daxlineRegular text-4xl">Some of Our Tutors</h1>
        <div className="flex gap-2">
          <div className="bg-[#CB1829] w-1"></div>
          <h1 className="w-96 font-daxlineBold text-2xl">
            You will receive invaluable mentorship from our tutors who are
            passionate about helping you get your career off to a flying start.{" "}
          </h1>
        </div>
        <Image height={120} width={130} src="/plus.svg" alt="plus image" />
      </div>

      <div className="flex flex-col xl:flex-row gap-7 justify-center flex-wrap items-center mt-20">
        <TutorCard
          img={"Abisola Fowosire.jpg"}
          lastName={"Abisola"}
          firstName={"Fowosire"}
        />
        <TutorCard
          img={"Benedict Olakunle.jpg"}
          lastName={"Olakunle"}
          firstName={"Benedict"}
        />
        <TutorCard
          img={"Busayo Ajakaiye.jpg"}
          lastName={"Ajakaiye"}
          firstName={"Busayo"}
        />
        <TutorCard
          img={"Robert Ogirri.jpg"}
          lastName={"Ogirri"}
          firstName={"Robert"}
        />
        <TutorCard
          img={"Waliyulahi Lukman.jpg"}
          lastName={"Lukman"}
          firstName={"Waliyulahi"}
        />
      </div>
    </div>
  );
};

export default SomeOfOurTutors;
