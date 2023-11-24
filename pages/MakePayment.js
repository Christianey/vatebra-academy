import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProgramCard = ({
  name,
  fileName = "#",
  discountPrice,
  price,
  modalContent,
  courseOutline,
  times = [],
}) => {
  const [showModal, setShowModal] = useState(false);
  const percentage = (((discountPrice - price) / price) * 100).toFixed();

  return (
    <>
      <div className="bg-white grid place-items-center gap-7 md:w-[30rem] py-5 rounded-2xl">
        <div className="flex items-center justify-around w-full">
          <div className="relative">
            <div className="absolute grid bg-red-700 h-[40px] w-[40px] text-white p-2 rounded-full text-[.7rem] place-content-center -right-2 -top-4">
              {percentage}%
            </div>
            <div className=" border-[1px] rounded-full py-2 px-8 flex flex-col">
              <div className="flex">
                <h4 className="text-[1.6rem] font-bold leading-none line-through decoration-red-500">
                  N{discountPrice}
                </h4>
              </div>
              <h5 className="font-bold text-[#787676] self-end">Pay {price}</h5>
            </div>
          </div>
          <h1
            onClick={() => setShowModal(true)}
            className="mt-6 text-lg font-daxlineBold hover:underline cursor-pointer"
          >
            Program details
          </h1>
        </div>

        <h1 className=" text-3xl font-daxlineExtraBold text-[#CA28E8]">
          {name}
        </h1>

        <div className="flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5 border-t-2 border-gray-500 py-5">
          <Link
            target="_blank"
            href={fileName}
            className="text-base hover:bg-gray-500 cursor-pointer bg-gray-400 text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
          >
            <h1 className="text-white">Download broachure</h1>
            <Image height={20} width={28} alt="line" src="/downloadLogo.svg" />
          </Link>
          <Link
            target="_blank"
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
            className="bg-[#D40E1F] mx-auto md:mx-0 font-daxlineRegular cursor-pointer max-w-fit text-white hover:bg-slate-700 px-10 py-3 rounded-lg"
          >
            Pay now
          </Link>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-fit">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t"></div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <form className="flex flex-col gap-7 md:gap-10 ">
                    <div className="flex flex-col xl:flex-row gap-5 xl:gap-32">
                      <div>
                        <h1 className=" font-daxlineBold text-[#5CBF22] mb-5 text-2xl">
                          {name}
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]">
                          {modalContent}
                        </h1>
                      </div>
                      <div>
                        <h1 className=" font-daxlineBold mb-5 text-2xl">
                          Virtual Live Classes
                        </h1>
                        {times?.length > 0 ? (
                          times?.map((time) => (
                            <h1 className="mb-3 font-daxlineMedium text-sm  opacity-75">
                              {time}
                            </h1>
                          ))
                        ) : (
                          <>
                            <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                              Weekdays - 10:00AM - 12:00AM
                            </h1>
                            <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                              Weekdays - 10:00AM - 12:00AM
                            </h1>
                            <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                              Weekdays - 10:00AM - 12:00AM
                            </h1>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full">
                      <div className="w-full">
                        <h1 className="mb-3 opacity-75">Course Outline</h1>
                        <textarea
                          readOnly
                          value={courseOutline}
                          className=" border-opacity-10 border w-full h-32 py-5 p-3 px-8"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6 rounded-b">
                  <button
                    className="text-black opacity-80 background-transparent order-1 font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Go back
                  </button>
                  <Link
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    target="_blank"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
                  >
                    Proceed to payment
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

const MakePayment = () => {
  return (
    <>
      <div className="">
        <Image
          height={600}
          width={1500}
          src="/makePaymentHeroImg.svg"
          alt="aboutHeroImg"
          className="w-full"
        />
        <h1 className="text-center py-10 text-5xl font-daxlineExtraBold text-[#CB1829]">
          All Programs
        </h1>

        <div className="bg-[#ECEDEB] mx- p-5 flex flex-col justify-center flex-wrap md:flex-row gap-10 md:gap-20">
          <ProgramCard
            name="DATA BROODER"
            fileName={"/Vatebra Data Brooder.pdf"}
            discountPrice={"60000"}
            price={"36000"}
            percentage={"40"}
            modalContent={
              "The Vatebra Data Brooder curriculum aids with your quick transition into one of the most soughtafter positions in the digital industry with the most effective abilities of Advanced Excel for Analytics and Structured Query Language (SQL). We assist you in accelerating your professional growth in 4-Weeks with a set of thoughtfully created business-focused data analytics learning materials."
            }
            courseOutline={
              "The Vatebra Data Brooder curriculum aids with your quick transition into one of the most soughtafter positions in the digital industry with the most effective abilities of Advanced Excel for Analytics and Structured Query Language (SQL). We assist you in accelerating your professional growth in 4-Weeks with a set of thoughtfully created business-focused data analytics learning materials."
            }
          />

          <ProgramCard
            name="DATA BOOSTER"
            fileName={"/Vatebra Data Booster.pdf"}
            discountPrice={"82500"}
            price={"49500"}
            percentage={"40"}
            modalContent={
              "The Vatebra Data Booster Curriculum aids with your quick transition into one of the most sought-after positions in the digital industry with the most effective abilities of Structured Query Language (SQL) and MS Power Business Intelligence. We assist you in accelerating your professional growth in 4-Weeks with a set of thoughtfully created business-focused data analytics learning materials."
            }
            courseOutline={
              "The Vatebra Data Booster Curriculum aids with your quick transition into one of the most sought-after positions in the digital industry with the most effective abilities of Structured Query Language (SQL) and MS Power Business Intelligence. We assist you in accelerating your professional growth in 4-Weeks with a set of thoughtfully created business-focused data analytics learning materials. "
            }
          />

          <ProgramCard
            name="DATA ANALYTICS"
            fileName={"/Vatebra Data Analytics.pdf"}
            discountPrice={"112000"}
            price={"67500"}
            percentage={"40"}
            modalContent={
              "Data analysis, Excel, and cleaning. Excel may be used to work with data more effectively. Learn how to use functions and pivot tables to import, store, organize, and analyze data. How you intend to use what you learn Start by using Excel to clean, analyze, and display data to find trends and get insights into a business problem."
            }
            courseOutline={
              "Data analysis, Excel, and cleaning. Excel may be used to work with data more effectively. Learn how to use functions and pivot tables to import, store, organize, and analyze data. How you intend to use what you learn Start by using Excel to clean, analyze, and display data to find trends and get insights into a business problem."
            }
          />

          <ProgramCard
            name="DATA SCIENCE"
            fileName={"/Vatebra Data Science.pdf"}
            discountPrice={"210000"}
            price={"126000"}
            percentage={"40"}
            modalContent={
              "We assist you in accelerating your professional growth in 3-4 months with a set of thoughtfully created business-focused data analytics learning materials. The program combines learning assistant teams from top institutions across the world with top instructors from some of the best digital businesses in Africa. With your help, they will investigate data science in ways that no other program has ever done."
            }
            courseOutline={
              "We assist you in accelerating your professional growth in 3-4 months with a set of thoughtfully created business-focused data analytics learning materials. The program combines learning assistant teams from top institutions across the world with top instructors from some of the best digital businesses in Africa. With your help, they will investigate data science in ways that no other program has ever done. "
            }
          />

          <ProgramCard
            name="PRODUCT MANAGEMENT"
            fileName={"/Product-Academy.pdf"}
            discountPrice={"120000"}
            courseOutline={
              "Product Management Fundamentals, Design Consciousness/Thinking, Product Design, Building and Refining Products, Agile Execution - Scrum Framework & Methodology, Product Strategy, Metrics for Product Managers, Product Launch"
            }
            price={"72000"}
            percentage={"40"}
            modalContent={
              "Unlock your potential and fast-track your journey from Enthusiast/Zero Level to a skilled Product Manager ready to shape the future of world-class products. Our intensive training, meticulously crafted by industry professionals, not only imparts in-depth knowledge but also establishes valuable industry relationships that pave the way for exciting job opportunities."
            }
          />

          <ProgramCard
            name="UI/UX (PRODUCT)"
            fileName={"/Design-Academy.pdf"}
            discountPrice={"60000"}
            price={"36000"}
            percentage={"40"}
            modalContent={
              "Our Product Design program is meticulously crafted by industry experts to equip you with the latest skills in design thinking, sketching, wireframing, and prototyping. This project-based learning experience is designed to help you develop the skills needed to create exceptional user experiences for digital products."
            }
            courseOutline={
              "User Research & Information Architecture, Wireframing and Testing Plan, Sketching and Wireframing, Functional Prototypes"
            }
            times={[
              "Saturdays: 10:00 AM - 1:00 PM WAT",
              "Sundays: 2:00 PM - 5:00 PM",
            ]}
          />
        </div>

        <Image
          height={600}
          width={500}
          src="/choose.svg"
          alt="aboutHeroImg"
          className="w-full"
        />

        <div className="bg-[#ECEDEB] mb-20 p-5 flex flex-col justify-center flex-wrap md:flex-row gap-10 md:gap-20">
          <ProgramCard
            name="FRONTEND PROGRAMMING"
            fileName={"/Front end Dev.pdf"}
            discountPrice={"210000"}
            price={"126000"}
            percentage={"40"}
            modalContent={
              "Embark on an immersive journey from Enthusiast/Zero Level to a skilled Software Developer ready to craft world-class tech solutions. Our intensive 12-week training, conducted on weekends, combines hands-on learning and in-depth knowledge, crafted by top professionals. Get ready to build entire websites from scratch, master software engineering fundamentals, and acquire the art of productive teamwork.v"
            }
            courseOutline={
              "Basics of User Interface & Introduction to UI/UX, Product Design: Design Sprint Overview, Future Steps: Implement a Design Sprint, Formatting/Markup & Styling, JavaScript Web: Functions & Events, Working with API & JSON, REACT.JS, Work on Capstone Projects, Develop and Present Your Software Portfolio Plan, Vatebra Academy Software Development Certification"
            }
            times={[
              "Saturdays: 10:00 AM - 1:00 PM WAT",
              "Sundays: 2:00 PM - :500 PM",
            ]}
          />

          <ProgramCard
            name="BACKEND PROGRAMMING"
            fileName={"/Backend.pdf"}
            discountPrice={"210000"}
            price={"126000"}
            percentage={"40"}
            modalContent={
              "Transform from an Enthusiast/Zero Level to a skilled Software Developer ready to craft cutting-edge tech solutions. Our intensive 12-week training, conducted exclusively on weekends, combines hands-on learning with in-depth knowledge designed by top professionals. Learn how to create entire websites from scratch, mastering software engineering fundamentals, and honing the art of productive teamwork."
            }
            courseOutline={
              "Rudiments of JavaScript, Working with API & JSON, NODEJS & EXPRESS JS, Problem Solving, Formation Methods: Learn by solving actual situations."
            }
            times={["Saturdays: 10 am - 2 pm", "Sundays: 2 pm - 5 pm"]}
          />

          <ProgramCard
            name="FULLSTACK PROGRAMMING"
            fileName={"/Full stack Dev.pdf"}
            discountPrice={"375000"}
            price={"225000"}
            percentage={"40"}
            modalContent={
              "Transform from an Enthusiast/Zero Level to a skilled Software Developer ready to craft cutting-edge tech solutions. Our intensive 12-week training, conducted exclusively on weekends, combines hands-on learning with in-depth knowledge designed by top professionals. Learn how to create entire websites from scratch, mastering software engineering fundamentals, and honing the art of productive teamwork."
            }
            courseOutline={
              "Basics of User Interface, Introduction to UI/UX, Design Thinking, Product Design, Formatting/Markup & Styling, Introduction to JavaScript, Problem Solving for REACT.JS, Debugging: Using the Chrome Developer Tools/Peer to Peer Session, ●	Introduction to NodeJS & ExpressJS,ExpressJs: CRUD operations on Database,ExpressJs: Searching the database for blog Pagination, Using NPM and Packages, Building and publishing an NPM package"
            }
            times={["Saturdays: 10 am - 2 pm", "Sundays: 2 pm - 5 pm"]}
          />

          <ProgramCard
            name="DOT NET STACK PROGRAMMING"
            discountPrice={"425000"}
            price={"255000"}
            percentage={"40"}
            modalContent={
              "Are you ready to embark on a journey from coding novice to a programming powerhouse? Vatebra Academy's Full Stack C# .NET program is designed to elevate your skills and prepare you for an entry-level position as a full-stack developer. In just 12-14 weeks, you will master the .NET programming framework, heavily integrated with C#, and gain the expertise needed to build robust tech solutions."
            }
            courseOutline={
              "Basics of Coding with C#, SQL - Data Structures, Web Application Architecture, Building Frontends for Interactive Web Apps, Full Stack C# .NET Syllabus"
            }
          />
        </div>

        <div className="relative my-10">
          <div className="grid place-items-center">
            <div className="px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-20">
              <div className="z-[10000]">
                <Image
                  height={703}
                  width={745}
                  alt="hero img"
                  src="/whyImgInMakePayment.svg"
                />
              </div>

              <div className=" flex flex-col max-w-2xl gap-6">
                <h1 className="text-3xl font-daxlineBold md:text-4xl">
                  Why Vatebra Academy?
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium max-w-4xl md:text-base">
                  Vatebra Academy is set up to bridge the digital skill gap in
                  the areas of technology. It is also positioned to
                  revolutionize the IT industry by providing quality tech
                  training and certification.
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium max-w-4xl  md:text-base">
                  At Vatebra Academy, we strive to be a first-class
                  post-graduate technology training institute that will
                  positively impact the Information Technology space and the
                  business environment of Sub-Saharan Africa by building best
                  in-class technology experts.
                </h1>
                <Link href="/GetStarted">
                  <button className="bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#5CBF22] px-5 grid place-items-center py-20 mt-20">
          <div className="bg-[#1B390A] md:w-[55rem] py-10 px-5 md:px-14 rounded-2xl text-white flex justify-center items-center flex-col gap-12">
            <h1 className="text-center text-3xl font-daxlineBold">
              Whether you’re just starting out or looking to upskill, we have
              courses that will help you achieve your career goals.
            </h1>
            <Link
              href="GetStarted"
              className="text-center max-w-fit hover:bg-black text-xl font-daxlineBold px-20 py-2 rounded-lg bg-[#CB1829]"
            >
              Explore courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
