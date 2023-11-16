import ProductAcademyPage from "@/components/ProductAcademyPage/ProductAcademyPage";
import Image from "next/image";
import React from "react";
import { useState, useContext, useEffect } from "react";
import context from "../context/stateContext";
import Link from "next/link";
import LearningModel from "@/components/landingPage/LearningModel";

const ProductAcademy = () => {
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
        <ProductAcademyPage />

        <div className="relative">
          <div className="grid place-items-center">
            <div className="px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between gap-10 md:gap-10 md:my-20">
              <div className="z-[10000]">
                <Image
                  height={703}
                  width={600}
                  alt="hero img"
                  src="/notAlone.svg"
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
                  <Link
                    download="Vatebra Product Academy"
                    href="/Product-Academy.pdf"
                    className="text-base hover:bg-[#6a6363] cursor-pointer bg-[#ACACAC] text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
                  >
                    <h1 className="text-white">Download brochure</h1>
                    <Image
                      height={20}
                      width={28}
                      alt="line"
                      src="/downloadLogo.svg"
                    />
                  </Link>
                  {/* <h1 onClick={()=> setShowModal(!showModal)} className='bg-[#D40E1F] mx-auto md:mx-0 text-white hover:bg-black font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg'>Pay now</h1> */}
                  <Link
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u" target="_blank"
                    className="bg-[#D40E1F] mx-auto md:mx-0 text-white hover:bg-black font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg"
                  >
                    Pay now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-[#ECEDEB] py-20 flex-col text-center px-5 md:px-24 justify-center items-center mt-32 gap-5">
          <h1 className="md:w-[30rem] font-daxlineBold text-2xl">
            Learn from seasoned industry experts <br /> and develop the ability
            to drive successful products.
          </h1>
          <h1 className="md:w-[45rem] font-daxlineMedium text-lg">
            Product Managers are in charge of owning a product at every stage of
            its life cycle, from ideation to market success. To lead products
            and features to long term success, balance business viability,
            technical feasibility, and customer desire.
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
                  Accelerate Your Product Management Career; Learn the Best
                  Product Management Practices, Led by Experienced Product
                  Leaders
                </h1>
                <h1 className="text-[#030303] font-daxlineMedium text-base opacity-80 max-w-4xl  md:text-xl">
                  Product Managers are in charge of owning a product at every
                  stage of its life cycle, from ideation to market success. To
                  lead products and features to long term success, balance
                  business viability, technical feasibility, and customer
                  desire.
                </h1>

                {/* <h1 onClick={()=> setShowModal(!showModal)} className='bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold'>Get started</h1>  */}

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

        {/* <div className=' bg-[#5CBF22] px-5 md:px-24 py-10 flex flex-col gap-10'>
            <div className='grid place-items-center'>
                <h1 className=' font-daxlineBold text-3xl text-white'>Product Management Programs</h1>
                <div className='h-1 w-[27rem] md:w-[35rem] rounded-3xl bg-white'></div>
            </div>
            <main className='flex flex-wrap justify-around gap-10'>
                <div className='flex flex-col gap-10'>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                </div>
                <div className='flex flex-col gap-10'>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                    <h1 className='bg-white p-5 rounded-xl text-xl font-daxlineBold px-32'>Design Thinking</h1>
                </div>
            </main>
        </div> */}

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
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    I always felt like I could do anything. That’s the main
                                    thing people are controlled by! Thoughts- their perception
                                    of themselves! Theyre slowed down by their perception of
                                    themselves. If youre taught you can’t do anything, you
                                    won’t do anything. I was taught I could do everything.
                                </p> */}
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
                  {/* <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the main
                            thing people are controlled by! Thoughts- their perception
                            of themselves! Theyre slowed down by their perception of
                            themselves. If youre taught you can’t do anything, you
                            won’t do anything. I was taught I could do everything.
                        </p> */}
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

export default ProductAcademy;
