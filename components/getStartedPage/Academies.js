import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Academies = () => {
  const [showDataAcademyModal, setShowDataAcademyModal] = useState(false);
  const [showProductAcademyModal, setShowProductAcademyModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="px-5 md:px-10 m-10 bg-white mx-5 md:mx-6 py-20 shadow-2xl rounded-3xl md:grid md:place-items-center justify-around flex flex-col xl:flex xl:flex-row gap-10">
        <div className="text-center rounded-3xl bg-white shadow-2xl p-6 flex flex-col gap-7 md:text-left md:w-[40rem] 2xl:w-[50rem]">
          <Image
            height={351}
            width={600}
            src="/getStartedDataAcademy.svg"
            alt="get started Data Academy image"
            className="2xl:w-[37rem]"
          />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-daxlineExtraBold text-2xl">Data Academy</h1>
            <h1
              onClick={() => setShowDataAcademyModal(!showDataAcademyModal)}
              className="mt-6 text-lg font-daxlineBold hover:underline cursor-pointer"
            >
              Program details
            </h1>
          </div>

          <p className=" opacity-80 text-lg font-daxlineMedium">
            The Vatebra Program Data School aids with your quick transition into
            one of the most sought-after in the digital industry. We assist you
            in accelerating your professional growth within a few months with a
            set of thoughtfully created business-focused data tools learning
            materials.
          </p>
          <div className="flex mx-auto md:mx-0 items-center justify-between flex-col md:flex-row max-w-fit gap-5">
            <Link
              href="/DataAcademy"
              className="bg-[#D40E1F] mx-auto md:mx-0 text-white font-daxlineRegular hover:bg-black px-4 py-2 cursor-pointer max-w-fit rounded-lg"
            >
              Enroll now
            </Link>

            <div className="text-base hover:bg-slate-300 cursor-pointer px-5 py-2 bg-gray-500 text-black font-daxlineBold rounded-lg items-center flex gap-2">
              <Link
                download="Vatebra Data Academy"
                href="/Vatebra-Data-Academy.zip"
                className="text-white hover:text-black"
              >
                Download broachure
              </Link>
              <Image
                height={20}
                width={28}
                alt="line"
                src="/downloadLogo.svg"
              />
            </div>
            <div className=" hidden md:block bg-[#707070] w-1 rounded-3xl h-10"></div>
            <div className="flex flex-col text-sm">
              <h1 className=" font-daxlineRegular">for enquires</h1>
              <Link
                href="tel:+2348038320933"
                className="cursor-pointer font-daxlineBold"
              >
                +234 803 832 0933
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center rounded-3xl bg-white shadow-2xl p-6 flex flex-col gap-7 md:text-left md:w-[40rem] 2xl:w-[50rem]">
          <Image
            height={351}
            width={600}
            src="/getStartedDataAcademy2.svg"
            alt="get started Data Academy image"
            className="2xl:w-[37rem]"
          />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-daxlineExtraBold text-2xl">Product Academy</h1>
            <h1
              onClick={() =>
                setShowProductAcademyModal(!showProductAcademyModal)
              }
              className="mt-6 text-lg font-daxlineBold hover:underline cursor-pointer"
            >
              Program details
            </h1>
          </div>
          <p className=" opacity-80 text-lg font-daxlineMedium">
            The Vatebra Program Data School aids with your quick transition into
            one of the most sought-after in the digital industry. We assist you
            in accelerating your professional growth within a few months with a
            set of thoughtfully created business-focused data tools learning
            materials.
          </p>
          <div className="flex mx-auto md:mx-0 items-center justify-between flex-col md:flex-row max-w-fit gap-5">
            <Link
              href="/ProductAcademy"
              className="bg-[#D40E1F] mx-auto md:mx-0 text-white font-daxlineRegular px-4 py-2 cursor-pointer max-w-fit rounded-lg"
            >
              Enroll now
            </Link>

            <div className="text-base hover:bg-slate-300 cursor-pointer px-5 py-2 bg-gray-500 text-black font-daxlineBold rounded-lg items-center flex gap-2">
              <Link
                download="Vatebra Product Academy"
                href="/Product-Academy.pdf"
                className="text-white hover:text-black"
              >
                Download broachure
              </Link>
              <Image
                height={20}
                width={28}
                alt="line"
                src="/downloadLogo.svg"
              />
            </div>
            <div className=" hidden md:block bg-[#707070] w-1 rounded-3xl h-10"></div>
            <div className="flex flex-col text-sm">
              <h1 className=" font-daxlineRegular">for enquires</h1>
              <Link
                href="tel:+2348038320933"
                className="cursor-pointer font-daxlineBold"
              >
                +234 803 832 0933
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showDataAcademyModal ? (
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
                          The Vatebra Program Data School aids with your quick
                          transition into one of the most sought-after in the
                          digital industry. We assist you in accelerating your
                          professional growth within a few months with a set of
                          thoughtfully created business-focused data tools
                          learning materials.
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
                          value="The Vatebra Program Data School aids with your quick transition into one of the most sought-after in the digital industry. We assist you in accelerating your professional growth within a few months with a set of thoughtfully created business-focused data tools learning materials."
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
                    onClick={() => setShowDataAcademyModal(false)}
                  >
                    Go back
                  </button>
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {
                      setShowModal(true), setShowDataAcademyModal(false);
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

      {showProductAcademyModal ? (
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
                          Product Academy
                        </h1>
                        <h1 className="mb-3 font-daxlineMedium text-sm opacity-75 w-96 md:w-[45rem]">
                          This intensive training takes a hands-on approach to
                          advancing you from Enthusiast/Zero Level to Product
                          Manager ready to build world-class products. This
                          training is designed by top professionals to provide
                          in-depth knowledge to beginners while also
                          establishing a leading industry relationship that
                          leads to job opportunities.{" "}
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
                          value="This intensive training takes a hands-on approach to advancing you from Enthusiast/Zero Level to 
                          Product Manager ready to build world-class products. 
                          This training is designed by top professionals to provide in-depth knowledge to beginners while also 
                          establishing a leading industry relationship that leads to job opportunities. "
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
                    onClick={() => setShowProductAcademyModal(false)}
                  >
                    Go back
                  </button>
                  <button
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {
                      setShowModal(true), setShowProductAcademyModal(false);
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

export default Academies;
