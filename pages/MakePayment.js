import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProgramCard = ({ name, fileName, discountPrice, price }) => {
  const percentage = (((discountPrice - price) / price) * 100).toFixed();

  return (
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
        <h1 className="mt-6 text-lg font-daxlineBold hover:underline cursor-pointer">
          Program details
        </h1>
      </div>

      <h1 className=" text-3xl font-daxlineExtraBold text-[#CA28E8]">{name}</h1>

      <div className="flex mx-auto md:mx-0 flex-col md:flex-row max-w-fit gap-5 border-t-2 border-gray-500 py-5">
        <Link
          download="Vatebra Data Brooder"
          href={fileName}
          className="text-base hover:bg-gray-500 cursor-pointer bg-gray-400 text-black font-daxlineBold px-7 py-3 rounded-lg flex gap-5"
          target="_blank"
        >
          <h1 className="text-white">Download broachure</h1>
          <Image height={20} width={28} alt="line" src="/downloadLogo.svg" />
        </Link>
        {/* <h1 onClick={()=> setShowModal2(!showModal2)} className='bg-[#D40E1F] mx-auto md:mx-0 font-daxlineRegular cursor-pointer max-w-fit text-white hover:bg-slate-700 px-10 py-3 rounded-lg'>Pay now</h1> */}
        <Link
          target="_blank"
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUOVRWOFJQR01GMVhXV0w1S0RKMTBEOFZQMS4u"
          className="bg-[#D40E1F] mx-auto md:mx-0 font-daxlineRegular cursor-pointer max-w-fit text-white hover:bg-slate-700 px-10 py-3 rounded-lg"
        >
          Pay now
        </Link>
      </div>
    </div>
  );
};

const MakePayment = () => {
  const [showDataBrooderModal, setShowDataBrooderModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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
          />

          <ProgramCard
            name="DATA BOOSTER"
            fileName={"/Vatebra Data Booster.pdf"}
            discountPrice={"82500"}
            price={"49500"}
            percentage={"40"}
          />

          <ProgramCard
            name="DATA ANALYTICS"
            fileName={"/Vatebra Data Analytics.pdf"}
            discountPrice={"112000"}
            price={"67500"}
            percentage={"40"}
          />

          <ProgramCard
            name="DATA SCIENCE"
            fileName={"/Vatebra Data Science.pdf"}
            discountPrice={"210000"}
            price={"126000"}
            percentage={"40"}
          />

          <ProgramCard
            name="PRODUCT MANAGEMENT"
            fileName={"/Product-Academy.pdf"}
            discountPrice={"120000"}
            price={"72000"}
            percentage={"40"}
          />

          <ProgramCard
            name="UI/UX (PRODUCT)"
            fileName={"/Design-Academy.pdf"}
            discountPrice={"60000"}
            price={"36000"}
            percentage={"40"}
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
          />

          <ProgramCard
            name="BACKEND PROGRAMMING"
            fileName={"/Backend.pdf"}
            discountPrice={"210000"}
            price={"126000"}
            percentage={"40"}
          />

          <ProgramCard
            name="FULLSTACK PROGRAMMING"
            fileName={"/Full stack Dev.pdf"}
            discountPrice={"375000"}
            price={"225000"}
            percentage={"40"}
          />

          <ProgramCard
            name="DOT NET STACK PROGRAMMING"
            fileName={"/Vatebra Data Brooder.pdf"}
            discountPrice={"425000"}
            price={"255000"}
            percentage={"40"}
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
                          The Data Analytics Programs helps you grasp analytics
                          and the ways it is reshaping the future of work, we
                          anticipate an exciting 2–month immersive learning
                          experience. Live lectures, interactive examples, and
                          immersive group projects will be used to help you
                          enhance your skills in large data processing. Querying
                          and Visualization using Advanced Excel, Structured
                          Query Language (SQL) and Microsoft Power Business
                          Intelligence.
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
                          value="The Data Analytics Programs helps you grasp analytics and the ways it is reshaping the future of work, we anticipate an exciting 2–month immersive learning experience. Live lectures, interactive examples, and immersive group projects will be used to help you enhance your skills in large data processing. Querying and Visualization using Advanced Excel, Structured Query Language (SQL) and Microsoft Power Business Intelligence.
                                        The Data Analytics Programs helps you grasp analytics and the ways it is reshaping the future of work, we anticipate an exciting 2–month immersive learning experience. Live lectures, interactive examples, and immersive group projects will be used to help you enhance your skills in large data processing. Querying and Visualization using Advanced Excel, Structured Query Language (SQL) and Microsoft Power Business Intelligence."
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

export default MakePayment;
