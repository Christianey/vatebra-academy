import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import context from "@/context/stateContext";

const Hero = () => {
  const { showModal, setShowModal } = useContext(context);

  const router = useRouter();

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const onSubmit = () => {
    // e.preventDefault()
    router.push("/GetStarted");
  };

  return (
    <>
      {/* <iframe height='700' src="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUQ0lEWllQVERJWVdTWFdUODlTQllCNlZRVS4u" frameborder="0"></iframe> */}

      <div className="relative mb-20">
        <Image
          priority
          src="/heroBgImg.svg"
          width={1780}
          height={1056}
          alt="Hero Background Image"
          className=" -z-50 absolute top-0 right-0"
        />
        <div className="px-5 pt-10 md:pt-10 justify-center text-center xl:text-left md:px-24 flex flex-col xl:flex-row items-center md:justify-between md:gap-5">
          <div className="flex flex-col max-w-2xl gap-6">
            <h1 className="text-3xl font-daxlineBold md:text-4xl">
              Building the Next Generation <br /> of Tech Talent
            </h1>
            <h1 className="text-[#030303] font-daxlineMedium max-w-4xl text-lg md:text-xl">
              Learn from IT specialists and professionals, with years of
              experience in the field. The curriculum for our courses is
              tailored to match industry standards, with an emphasis on
              practical, hands-on skills learning.
            </h1>
            <a
              target="_blank"
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUQ0lEWllQVERJWVdTWFdUODlTQllCNlZRVS4u"
              className="bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold"
            >
              Get started
            </a>
          </div>

          <div className="z-[10000]">
            <Image height={703} width={745} alt="hero img" src="/heroImg.svg" />
          </div>
        </div>

        <div className="px-5 md:px-24">
          <Image height={26} width={186} src="dotImg1.svg" alt="dot img1" />
          <div className="bg-gradient-to-r from-green-500 to-red-500 h-1 w-[70%] mt-10"></div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center z-[50000] items-center flex overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <form
                onSubmit={onSubmit}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full p-5 bg-white outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-daxlineBold font-semibold">
                    Personal Information
                  </h3>
                </div>
                {/*body*/}
                <div className="relative font-daxlineBold p-6 flex-auto">
                  <div className="flex flex-col gap-7 md:gap-10 ">
                    <div className="flex flex-col md:flex-row gap-5">
                      <div>
                        <h1 className="mb-3 opacity-75">First name</h1>
                        <input
                          required
                          type="text"
                          placeholder="Enter your first name"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                      <div>
                        <h1 className="mb-3 opacity-75">Last name</h1>
                        <input
                          required
                          placeholder="Enter your last name"
                          type="text"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <div>
                        <h1 className="mb-3 opacity-75">Email</h1>
                        <input
                          required
                          type="email"
                          placeholder="Enter your email address"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                      <div>
                        <h1 className="mb-3 opacity-75">Phone Number</h1>
                        <input
                          required
                          placeholder="Enter your phone number"
                          type="tel"
                          className="rounded-xl p-3 px-8"
                        />
                      </div>
                    </div>
                  </div>
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
                  <input
                    value="Proceed"
                    type="submit"
                    className="bg-[#D40E1F] text-white active:bg-emerald-600 px-14 cursor-pointer font-bold uppercase text-sm py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    // onClick={() => setShowModal(false)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Hero;
