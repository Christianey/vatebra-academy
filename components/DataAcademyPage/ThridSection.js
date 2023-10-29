import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ThridSection = () => {
  const [showDataAnalyticsModal, setShowDataAnalyticsModal] = useState(false);
  const [showDataScienceModal, setShowDataScienceModal] = useState(false);
  const [showDataBrooderModal, setShowDataBrooderModal] = useState(false);
  const [showDataBoosterModal, setShowDataBoosterModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="my-20 bg-[#ECEDEB] py-20">
        <div className="mx-5">
          <div className="grid place-items-center">
            <h1 className=" font-daxlineExtraBold text-4xl">
              Our Data Programs
            </h1>
            <Image height={4} width={400} alt="line" src="/line.svg" />
          </div>

          <div className="grid place-items-center gap-10 mt-20">
            <div className=" text-white flex flex-col xl:flex-row gap-5 justify-center">
              <div className=" md:w-[35rem] bg-[#D1B43D] flex flex-col gap-10 p-10 rounded-3xl">
                <div className="flex gap-5 flex-wrap">
                  <h1 className="text-2xl font-daxlineBold">Data Analytics</h1>
                  <h1
                    onClick={() =>
                      setShowDataAnalyticsModal(!showDataAnalyticsModal)
                    }
                    className="border-white border font-daxlineRegular hover:bg-white hover:text-black max-w-fit cursor-pointer px-5 p-1 rounded-full"
                  >
                    Program details
                  </h1>
                </div>
                <p className=" text-base font-daxlineMedium">
                  The Data Analytics Programs helps you grasp analytics and the
                  ways it is reshaping the future of work, we anticipate an
                  exciting 2–month immersive learning experience. Live lectures,
                  interactive examples, and immersive group projects will be
                  used to help you enhance your skills in large data processing.
                  Querying and Visualization using Advanced Excel, Structured
                  Query Language (SQL) and Microsoft Power Business
                  Intelligence.
                </p>
                <div className="flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5">
                  <a
                    target="_blank"
                    href="/Vatebra Data Analytics.pdf"
                    className="text-base hover:bg-slate-300 cursor-pointer bg-white text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
                  >
                    <h1 className="">Download brochure</h1>
                    <Image
                      height={20}
                      width={28}
                      alt="line"
                      src="/downloadLogo.svg"
                    />
                  </a>
                  <Link
                    target="_blank"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
                    className="bg-[#D40E1F] mx-auto md:mx-0 font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg"
                  >
                    Pay now
                  </Link>
                </div>
              </div>

              <div className=" md:w-[35rem] bg-[#FC5A5F] flex flex-col gap-10 p-10 rounded-3xl">
                <div className="flex gap-5 flex-wrap">
                  <h1 className="text-2xl font-daxlineBold">Data Science</h1>
                  <h1
                    onClick={() =>
                      setShowDataScienceModal(!showDataScienceModal)
                    }
                    className="border-white border font-daxlineRegular hover:bg-white hover:text-black max-w-fit cursor-pointer px-5 p-1 rounded-full"
                  >
                    Program details
                  </h1>
                </div>
                <p className=" text-base font-daxlineMedium">
                  The Data Analytics Programs helps you grasp analytics and the
                  ways it is reshaping the future of work, we anticipate an
                  exciting 2–month immersive learning experience. Live lectures,
                  interactive examples, and immersive group projects will be
                  used to help you enhance your skills in large data processing.
                  Querying and Visualization using Advanced Excel, Structured
                  Query Language (SQL) and Microsoft Power Business
                  Intelligence.
                </p>
                <div className="flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5">
                  <a
                    target="_blank"
                    href="/Vatebra Data Science.pdf"
                    className="text-base hover:bg-slate-300 cursor-pointer bg-white text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
                  >
                    <h1 className="">Download brochure</h1>
                    <Image
                      height={20}
                      width={28}
                      alt="line"
                      src="/downloadLogo.svg"
                    />
                  </a>
                  <Link
                    target="_blank"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
                    className="bg-[#D40E1F] mx-auto md:mx-0 font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg"
                  >
                    Pay now
                  </Link>
                </div>
              </div>
            </div>

            <div className=" text-white flex flex-col xl:flex-row gap-5 justify-center">
              <div className=" md:w-[35rem] bg-[#58C22C] flex flex-col gap-10 p-10 rounded-3xl">
                <div className="flex gap-5 flex-wrap">
                  <h1 className="text-2xl font-daxlineBold">Data Brooder</h1>
                  <h1
                    onClick={() =>
                      setShowDataBrooderModal(!showDataBrooderModal)
                    }
                    className="border-white border font-daxlineRegular hover:bg-white hover:text-black max-w-fit cursor-pointer px-5 p-1 rounded-full"
                  >
                    Program details
                  </h1>
                </div>
                <p className=" text-base font-daxlineMedium">
                  The Data Analytics Programs helps you grasp analytics and the
                  ways it is reshaping the future of work, we anticipate an
                  exciting 2–month immersive learning experience. Live lectures,
                  interactive examples, and immersive group projects will be
                  used to help you enhance your skills in large data processing.
                  Querying and Visualization using Advanced Excel, Structured
                  Query Language (SQL) and Microsoft Power Business
                  Intelligence.
                </p>
                <div className="flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5">
                  <a
                    target="_blank"
                    href="/Vatebra Data Brooder.pdf"
                    className="text-base hover:bg-slate-300 cursor-pointer bg-white text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
                  >
                    <h1 className="">Download brochure</h1>
                    <Image
                      height={20}
                      width={28}
                      alt="line"
                      src="/downloadLogo.svg"
                    />
                  </a>
                  <Link
                    target="_blank"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
                    className="bg-[#D40E1F] mx-auto md:mx-0 font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg"
                  >
                    Pay now
                  </Link>
                </div>
              </div>

              <div className=" md:w-[35rem] bg-[#1F2829] flex flex-col gap-10 p-10 rounded-3xl">
                <div className="flex gap-5 flex-wrap">
                  <h1 className="text-2xl font-daxlineBold">Data Booster</h1>
                  <h1
                    onClick={() =>
                      setShowDataBoosterModal(!showDataBoosterModal)
                    }
                    className="border-white border font-daxlineRegular hover:bg-white hover:text-black max-w-fit cursor-pointer px-5 p-1 rounded-full"
                  >
                    Program details
                  </h1>
                </div>
                <p className=" text-base font-daxlineMedium">
                  The Data Analytics Programs helps you grasp analytics and the
                  ways it is reshaping the future of work, we anticipate an
                  exciting 2–month immersive learning experience. Live lectures,
                  interactive examples, and immersive group projects will be
                  used to help you enhance your skills in large data processing.
                  Querying and Visualization using Advanced Excel, Structured
                  Query Language (SQL) and Microsoft Power Business
                  Intelligence.
                </p>
                <div className="flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5">
                  <a
                    target="_blank"
                    href="/Vatebra Data Booster.pdf"
                    className="text-base hover:bg-slate-300 cursor-pointer bg-white text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
                  >
                    <h1 className="">Download brochure</h1>
                    <Image
                      height={20}
                      width={28}
                      alt="line"
                      src="/downloadLogo.svg"
                    />
                  </a>
                  <Link
                    target="_blank"
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
                    className="bg-[#D40E1F] mx-auto md:mx-0 font-daxlineRegular cursor-pointer max-w-fit px-10 py-3 rounded-lg"
                  >
                    Pay now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDataAnalyticsModal ? (
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
                          Data Academy
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]">
                          Data analysis, Excel, and cleaning. Excel may be used
                          to work with data more effectively. Learn how to use
                          functions and pivot tables to import, store, organize,
                          and analyze data. How you intend to use what you learn
                          Start by using Excel to clean, analyze, and display
                          data to find trends and get insights into a business
                          problem.
                        </h1>
                      </div>
                      <div>
                        <h1 className=" font-daxlineBold mb-5 text-2xl">
                          Classes
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full">
                      <div className="w-full">
                        <h1 className="mb-3 opacity-75">Course Outline</h1>
                        <textarea
                          readOnly
                          value="Data analysis, Excel, and cleaning.
                                                    Excel may be used to work with data more effectively. Learn how to use functions and pivot tables to import, store, organize, and analyze data. 
                                                    How you intend to use what you learn
                                                    Start by using Excel to clean, analyze, and display data to find trends and get insights into a business problem."
                          type="email"
                          placeholder="Enter your email address"
                          className=" border-opacity-10 border w-full h-32 py-5 p-3 px-8"
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
                    onClick={() => setShowDataAnalyticsModal(false)}
                  >
                    Go back
                  </button>
                  <Link
                    href="https://paystack.com/pay/f7jf3lscts"
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={() => {setShowModal(true), setShowDataAnalyticsModal(false)}}
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

      {showDataScienceModal ? (
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
                          Data Science
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]">
                          We assist you in accelerating your professional growth
                          in 3-4 months with a set of thoughtfully created
                          business-focused data analytics learning materials.
                          The program combines learning assistant teams from top
                          institutions across the world with top instructors
                          from some of the best digital businesses in Africa.
                          With your help, they will investigate data science in
                          ways that no other program has ever done.
                        </h1>
                      </div>
                      <div>
                        <h1 className=" font-daxlineBold mb-5 text-2xl">
                          Classes
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full">
                      <div className="w-full">
                        <h1 className="mb-3 opacity-75">Course Outline</h1>
                        <textarea
                          readOnly
                          value="We assist you in accelerating your professional growth in 3-4 months with a set of thoughtfully 
created business-focused data analytics learning materials. 
The program combines learning assistant teams from top institutions across the world with top 
instructors from some of the best digital businesses in Africa. With your help, they will investigate 
data science in ways that no other program has ever done. "
                          type="email"
                          placeholder="Enter your email address"
                          className=" border-opacity-10 border w-full h-32 py-5 p-3 px-8"
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
                    onClick={() => setShowDataScienceModal(false)}
                  >
                    Go back
                  </button>
                  <Link
                    href="https://paystack.com/pay/f7jf3lscts"
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={() => {setShowModal(true), setShowDataAnalyticsModal(false)}}
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

      {showDataBrooderModal ? (
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
                          Data Brooder
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]">
                          The Vatebra Data Brooder curriculum aids with your
                          quick transition into one of the most soughtafter
                          positions in the digital industry with the most
                          effective abilities of Advanced Excel for Analytics
                          and Structured Query Language (SQL). We assist you in
                          accelerating your professional growth in 4-Weeks with
                          a set of thoughtfully created business-focused data
                          analytics learning materials.
                        </h1>
                      </div>
                      <div>
                        <h1 className=" font-daxlineBold mb-5 text-2xl">
                          Classes
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full">
                      <div className="w-full">
                        <h1 className="mb-3 opacity-75">Course Outline</h1>
                        <textarea
                          readOnly
                          value="The Vatebra Data Brooder curriculum aids with your quick transition into one of the most soughtafter positions in the digital industry with the most effective abilities of Advanced Excel for 
Analytics and Structured Query Language (SQL). 
We assist you in accelerating your professional growth in 4-Weeks with a set of thoughtfully 
created business-focused data analytics learning materials."
                          type="email"
                          placeholder="Enter your email address"
                          className=" border-opacity-10 border w-full h-32 py-5 p-3 px-8"
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
                    onClick={() => setShowDataBrooderModal(false)}
                  >
                    Go back
                  </button>
                  <Link
                    href="https://paystack.com/pay/f7jf3lscts"
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={() => {setShowModal(true), setShowDataAnalyticsModal(false)}}
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

      {showDataBoosterModal ? (
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
                          Data Booster
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]">
                          The Vatebra Data Booster Curriculum aids with your
                          quick transition into one of the most sought-after
                          positions in the digital industry with the most
                          effective abilities of Structured Query Language (SQL)
                          and MS Power Business Intelligence. We assist you in
                          accelerating your professional growth in 4-Weeks with
                          a set of thoughtfully created business-focused data
                          analytics learning materials.{" "}
                        </h1>
                      </div>
                      <div>
                        <h1 className=" font-daxlineBold mb-5 text-2xl">
                          Classes
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75">
                          Weekdays - 10:00AM - 12:00AM
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full">
                      <div className="w-full">
                        <h1 className="mb-3 opacity-75">Course Outline</h1>
                        <textarea
                          readOnly
                          value="The Vatebra Data Booster Curriculum aids with your quick transition into one of the most 
sought-after positions in the digital industry with the most effective abilities of Structured Query 
Language (SQL) and MS Power Business Intelligence. 
We assist you in accelerating your professional growth in 4-Weeks with a set of thoughtfully 
created business-focused data analytics learning materials. "
                          type="email"
                          placeholder="Enter your email address"
                          className=" border-opacity-10 border w-full h-32 py-5 p-3 px-8"
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
                    onClick={() => setShowDataBoosterModal(false)}
                  >
                    Go back
                  </button>
                  <Link
                    href="https://paystack.com/pay/f7jf3lscts"
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    // onClick={() => {setShowModal(true), setShowDataAnalyticsModal(false)}}
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
                    onClick={() => setShowModal(false)}
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

export default ThridSection;
