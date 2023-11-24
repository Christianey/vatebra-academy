import ProductAcademyPage from "@/components/ProductAcademyPage/ProductAcademyPage";
import Image from "next/image";
import React from "react";
import { useState, useContext, useEffect } from "react";
import context from "../context/stateContext";
import Link from "next/link";
import LearningModel from "@/components/landingPage/LearningModel";
import { ProgramCard } from "./SoftwareAcademy";
import UIUXAcademyPage from "@/components/UIUXAcademyPage/UIUXAcademyPage";
import ExperienceProfessional from "@/components/UIUXAcademyPage/ExperienceProfessional";

const UiuxAcademy = () => {
  const { page, setPage } = useContext(context);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  useEffect(() => {
    setPage("schools");
    return () => setPage("");
  }, [setPage]);

  return (
    <>
      <div className="w-full">
        {/* <ProductAcademyPage /> */}
        <UIUXAcademyPage/>
        <ExperienceProfessional/>

 

        <div className="flex bg-[#ECEDEB] py-20 flex-col text-center px-5 md:px-24 justify-center items-center mt-32 gap-5">
          <h1 className="md:w-[30rem] font-daxlineBold text-2xl">
          Build and Showcase Your UI/UX Portfolio Project
          </h1>
          <h1 className="md:w-[45rem] font-daxlineMedium text-lg">
          To earn your Product Design certification, showcase everything you've learned in a pitch presentation where experts evaluate your new product design skillset. Receive clear steps every week to iteratively develop your final project. By the course end, you'll have a formal product design proposal presentation, demonstrating your end-to-end product, thought processes, design processes, and implementation.
          </h1>

          <Link
            href="/GetStarted"
            className="bg-[#D40E1F] mx-auto md:mx-0 text-white hover:bg-black font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg"
          >
            Get Started
          </Link>
        </div>

        <div className="relative bg-[#E8AC28] bg-opacity-40 py-10">
          <div className="grid place-items-center">
            <div className="px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-7 md:gap-10 md:my-20">
              <div className="z-[10000] xl:order-1">
                <Image
                  height={703}
                  width={600}
                  alt="hero img"
                  src="/africanSmilingLady.svg"
                />
              </div>

              <div className=" flex flex-col max-w-lg gap-6">
                <h1 className=" text-xl font-daxlineExtraBold">
                  How you will learn
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl">
                Learning Model: A 3-week experiential learning and hands-on training session.
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl">
                Training Methodology: Learn through real-life business cases.
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl">
                Product Design: Work in a team to develop a product prototype.
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl">
                Design Lab: Three different sessions of 3 hours of a coffee shop hangout with colleagues.
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl">
                Alumni Network: Join an ecosystem of talents and connect with leading employers.
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

        <LearningModel />
      </div>

      {showModal ? (
        <>
          <div className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-daxlineBold font-semibold">
                    Personal Information
                  </h3>
                </div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <form className="flex flex-col gap-7 md:gap-10 ">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div>
                        <h1 className="mb-3 opacity-75">First name</h1>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                      <div>
                        <h1 className="mb-3 opacity-75">Last name</h1>
                        <input
                          placeholder="Enter your last name"
                          type="text"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <div>
                        <h1 className="mb-3 opacity-75">Email Address</h1>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                      <div>
                        <h1 className="mb-3 opacity-75">Phone Number</h1>
                        <input
                          placeholder="Enter your phone number"
                          type="number"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <div>
                        <h1 className="mb-3 opacity-75">Occupation</h1>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                      <div>
                        <h1 className="mb-3 opacity-75">Location</h1>
                        <input
                          placeholder="Enter your phone number"
                          type="number"
                          className="rounded-xl p-3 px-8"
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
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {
                      setShowModal2(true), setShowModal(false);
                    }}
                  >
                    Proceed to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModal2 ? (
        <>
          <div className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-daxlineBold font-semibold">
                    Personal Information
                  </h3>
                </div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <form className="flex flex-col gap-7 md:gap-10 ">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div>
                        <h1 className="mb-3 opacity-75">First name</h1>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                      <div>
                        <h1 className="mb-3 opacity-75">Last name</h1>
                        <input
                          placeholder="Enter your last name"
                          type="text"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <div>
                        <h1 className="mb-3 opacity-75">Enter card number</h1>
                        <input
                          type="number"
                          placeholder="Enter your card number"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                      <div>
                        <h1 className="mb-3 opacity-75">Enter CVV</h1>
                        <input
                          placeholder="Enter your CVV"
                          type="tel"
                          className="rounded-xl p-3 px-8"
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
                    onClick={() => setShowModal2(false)}
                  >
                    Go back
                  </button>
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={() => setShowModal(false)}
                  >
                    Proceed
                  </button>
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

export default UiuxAcademy;
