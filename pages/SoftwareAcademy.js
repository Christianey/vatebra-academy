import SoftwareAcademyPage from "@/components/SoftwareAcademyPage/SoftwareAcademyPage";
import Image from "next/image";
import React from "react";
import { useState, ß } from "react";
import Link from "next/link";
import LearningModel from "@/components/landingPage/LearningModel";
import ValuableInsights from "@/components/getStartedPage/ValuableInsights";

export const ProgramCard = ({
  courseName,
  bookLink = "#",
  courseOutline,
  courseDetails,
  duration,
  times,
  shadow,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className="md:w-[35rem] bg-white flex flex-col gap-10 p-10 rounded-3xl"
        style={{ boxShadow: shadow ? shadow : null }}
      >
        <div className="flex gap-5 flex-wrap">
          <h1 className="text-2xl font-daxlineExtraBold text-[#338603]">
            {courseName}
          </h1>
          <h1
            onClick={() => setOpenModal(!openModal)}
            className="border-gray-400 border text-black font-daxlineRegular hover:bg-gray-400 hover:text-white max-w-fit cursor-pointer px-5 p-1 rounded-full"
          >
            Program details
          </h1>
        </div>
        <p className="text-base text-black font-daxlineMedium">
          {courseDetails}
        </p>
        <p className=" text-lg font-daxlineBold text-[#E8AC28]">
          Duration: {duration}
        </p>
        <div className="flex flex-col md:flex-row max-w-fit gap-5">
          <Link
            href={bookLink}
            target="_blank"
            className="text-base border-2 hover:bg-slate-300 cursor-pointer bg-gray-400 text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
          >
            <h1 className="">Download brochure</h1>
            <Image height={20} width={28} alt="line" src="/downloadLogo.svg" />
          </Link>
          <Link
            target="_blank"
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
            className="bg-[#D40E1F] font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg"
          >
            Pay now
          </Link>
        </div>
      </div>
      {openModal ? (
        <div className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-fit">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 rounded-t"></div>
              {/*body*/}
              <div className="relative font-daxlineBold p-6 flex-auto">
                <form className="flex flex-col gap-7 md:gap-10 text-black">
                  <div className="flex flex-col xl:flex-row gap-5 xl:gap-32">
                    <div>
                      <h1 className=" font-daxlineBold text-[#5CBF22] mb-5 text-2xl">
                        {courseName}
                      </h1>
                      <h1 className="mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem] text-black">
                        {courseDetails}
                      </h1>
                    </div>
                    <div>
                      <h1 className=" font-daxlineBold mb-5 text-2xl">
                        Virtual Live Classes
                      </h1>
                      {times?.map((time) => (
                        <h1 className="mb-3 font-daxlineMedium text-sm  opacity-75">
                          {time}
                        </h1>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row w-full">
                    <div className="w-full">
                      <h1 className="mb-3 opacity-75">Course Outline</h1>
                      <textarea
                        readOnly
                        value={courseOutline}
                        type="email"
                        placeholder="Enter your email address"
                        className=" border-opacity-10 text-black border w-full h-32 py-5 p-3 px-8"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex items-center justify-start p-6 rounded-b">
                <button
                  className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setOpenModal(false)}
                >
                  Go back
                </button>
                <Link
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
                  target="_blank"
                >
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Proceed to payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
const SoftwareAcademy = () => {
  const [frontendModal, setFrontendModal] = useState(false);
  const [backend, setBackendModal] = useState(false);
  const [fullstackModal, setFullstackModal] = useState(false);
  const [dotnetstackModal, setDotnetstackModal] = useState(false);

  return (
    <>
      <div className="w-full">
        <SoftwareAcademyPage />

        <div className="relative">
          <div className="grid place-items-center">
            <div className="px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-10 md:gap-10 md:my-20">
              <div className="z-[10000]">
                <Image
                  height={703}
                  width={600}
                  alt="hero img"
                  src="/accelerate.svg"
                />
              </div>

              <div className=" flex flex-col max-w-lg gap-6">
                <h1 className="text-[#030303] font-daxlineBold text-xl max-w-4xl  md:text-2xl">
                  This 2 –month training is designed by top professionals to
                  provide in-depth knowledge to beginners while also
                  establishing a leading industry relationship that leads to job
                  opportunities
                </h1>
                <div className="flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5">
                  <a
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
                    target="_blank"
                    className="bg-[#D40E1F] mx-auto md:mx-0 text-white hover:bg-black font-daxlineRegular cursor-pointer max-w-fit px-20 py-3 rounded-lg"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ background: "url(/programsBgImg.svg)" }}
          className="my-20 py-20"
        >
          <div className="mx-5">
            <div className="grid place-items-center">
              <h1 className=" font-daxlineExtraBold text-white text-4xl">
                Programs
              </h1>
              <div className="bg-white w-60 h-1"> </div>
            </div>

            <div className="grid place-items-center gap-10 mt-20">
              <div className=" text-white flex flex-col xl:flex-row  gap-5 justify-center">
                <ProgramCard
                  courseName={"Front-end Development"}
                  courseDetails={
                    "Embark on an immersive journey from Enthusiast/Zero Level to a skilled Software Developer ready to craft world-class tech solutions. Our intensive 12-week training, conducted on weekends, combines hands-on learning and in-depth knowledge, crafted by top professionals. Get ready to build entire websites from scratch, master software engineering fundamentals, and acquire the art of productive teamwork."
                  }
                  duration={"12 Weeks (Weekends only)"}
                  bookLink={"/Front end Dev.pdf"}
                  courseOutline={
                    "Basics of User Interface & Introduction to UI/UX, Product Design: Design Sprint Overview, Future Steps: Implement a Design Sprint, Formatting/Markup & Styling, JavaScript Web: Functions & Events, Working with API & JSON, REACT.JS, Work on Capstone Projects, Develop and Present Your Software Portfolio Plan, Vatebra Academy Software Development Certification"
                  }
                  times={[
                    "Saturdays: 10:00 AM - 1:00 PM WAT",
                    "Sundays: 2:00 PM - :500 PM",
                  ]}
                />
                <ProgramCard
                  courseName={"Back-end Development"}
                  courseDetails={
                    "Transform from an Enthusiast/Zero Level to a skilled Software Developer ready to craft cutting-edge tech solutions. Our intensive 12-week training, conducted exclusively on weekends, combines hands-on learning with in-depth knowledge designed by top professionals. Learn how to create entire websites from scratch, mastering software engineering fundamentals, and honing the art of productive teamwork."
                  }
                  duration={"12 Weeks (Weekends only)"}
                  bookLink={"/Backend.pdf"}
                  courseOutline={
                    "Rudiments of JavaScript, Working with API & JSON, NODEJS & EXPRESS JS, Problem Solving, Formation Methods: Learn by solving actual situations."
                  }
                  times={["Saturdays: 10 am - 2 pm", "Sundays: 2 pm - 5 pm"]}
                />
              </div>

              <div className=" text-white flex flex-col xl:flex-row  gap-5 justify-center">
                <ProgramCard
                  courseName={"Full-stack Development"}
                  courseDetails={
                    "Transform from an Enthusiast/Zero Level to a skilled Software Developer ready to craft cutting-edge tech solutions. Our intensive 12-week training, conducted exclusively on weekends, combines hands-on learning with in-depth knowledge designed by top professionals. Learn how to create entire websites from scratch, mastering software engineering fundamentals, and honing the art of productive teamwork."
                  }
                  duration={"16 Weeks (Weekends only)"}
                  bookLink={"/Full stack Dev.pdf"}
                  courseOutline={
                    "Basics of User Interface, Introduction to UI/UX, Design Thinking, Product Design, Formatting/Markup & Styling, Introduction to JavaScript, Problem Solving for REACT.JS, Debugging: Using the Chrome Developer Tools/Peer to Peer Session, ●	Introduction to NodeJS & ExpressJS,ExpressJs: CRUD operations on Database,ExpressJs: Searching the database for blog Pagination, Using NPM and Packages, Building and publishing an NPM package"
                  }
                  times={["Saturdays: 10 am - 2 pm", "Sundays: 2 pm - 5 pm"]}
                />
                <ProgramCard
                  courseName={"DotNet Stack Programming"}
                  courseDetails={
                    "Are you ready to embark on a journey from coding novice to a programming powerhouse? Vatebra Academy's Full Stack C# .NET program is designed to elevate your skills and prepare you for an entry-level position as a full-stack developer. In just 12-14 weeks, you will master the .NET programming framework, heavily integrated with C#, and gain the expertise needed to build robust tech solutions."
                  }
                  duration={"12-14 weeks"}
                  // bookLink={"/Full stack Dev.pdf"}
                  courseOutline={
                    "Basics of Coding with C#, SQL - Data Structures, Web Application Architecture, Building Frontends for Interactive Web Apps, Full Stack C# .NET Syllabus"
                  }
                  times={["Saturdays: 10 am - 2 pm", "Sundays: 2 pm - 5 pm"]}
                />
              </div>
            </div>
          </div>
        </div>

        <LearningModel />
        <ValuableInsights />

        <div className="relative bg-[#E8AC28] bg-opacity-40 py-10">
          <div className="grid place-items-center">
            <div className="px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-7 md:gap-10 md:my-20">
              <div className="z-[10000] xl:order-1">
                <Image
                  height={500}
                  width={800}
                  alt="hero img"
                  src="/manCoding.svg"
                />
              </div>

              <div className=" flex flex-col max-w-lg gap-6">
                <h1 className=" text-xl font-daxlineExtraBold">
                  Learn from seasoned industry experts and develop the ability
                  to drive successful products.
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl">
                  At Vatebra Academy, we strive to be a first-class
                  post-graduate technology training institute that will
                  positively impact the Information Technology space and the
                  business environment of Sub-Saharan Africa by building best
                  in-class technology experts.
                </h1>

                <Link
                  href="/GetStarted"
                  className="bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareAcademy;
