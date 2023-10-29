import { useState, useContext, useEffect } from "react";
import context from "../context/stateContext";
import Image from "next/image";
import LearningModel from "@/components/landingPage/LearningModel";
import PersonalInfoForm from "@/components/PersonalInfoForm";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const { page, setPage } = useContext(context);

  useEffect(() => {
    setPage("about");
    return () => setPage("");
  }, [setPage]);

  return (
    <>
      <div>
        <div className="relative">
          <Image
            height={600}
            width={1500}
            src="/aboutHeroImg.svg"
            alt="aboutHeroImg"
            className="w-full"
          />

          {/* Mission */}
          <div>
            <div className="flex flex-col xl:flex-row items-center bg-white shadow-2xl rounded-3xl md:rounded-[5rem] gap-10 md:mx-10 mx-5 px-5">
              <div className="flex flex-col gap-5">
                <div>
                  <Image
                    height={100}
                    width={62}
                    src="/quoteImg.svg"
                    alt="aboutHeroImg"
                  />
                </div>
                <div className="">
                  <h1 className=" font-daxlineMedium text-3xl text-[#3C9518]">
                    OUR MISSION
                  </h1>
                  <Image height={1} width={200} alt="line" src="/line.svg" />
                </div>
                <h2 className=" font-daxlineMedium">
                  Vatebra Academy strives to provide future-facing, specialized
                  and skill-based training in the technology ecosystem at a
                  reasonable cost and atmosphere that delivers value for our
                  customers.
                </h2>
              </div>

              <Image
                height={100}
                width={100}
                src="/africanAmerican.svg"
                alt="aboutHeroImg"
                className="w-full"
              />
            </div>
            <Image
              className=" ml-10 md:mx-10 mx-5 px-5"
              height={101}
              width={82}
              alt="line"
              src="/aboutDots.svg"
            />
          </div>

          {/* Networking Opportunities */}
          <div className="flex flex-col xl:flex-row items-center mx-5 bg-[#5CBF22] md:mx-10 rounded-[3rem] gap-10 my-44 text-white pb-10 md:p-0">
            <Image
              height={500}
              width={600}
              src="/groupPic.svg"
              alt="aboutHeroImg"
              className=""
            />
            <div className="px-10 mb:px-0 flex flex-col gap-5">
              <h1 className=" font-daxlineBold text-2xl md:text-3xl">
                Networking Opportunity
              </h1>
              <h1 className=" font-daxlineMedium text-md">
                At Vatebra Academy, we strive to be a first-class post-graduate
                technology training institute that will positively impact the
                Information Technology space and the business environment of
                Sub-Saharan Africa by building best in-class technology experts.
              </h1>
              <h1 className=" font-daxlineMedium text-md">
                Vatebra academy is incorporated in Nigeria with Registration
                Number 2594621 on the 6th of April 2018.
              </h1>
            </div>
          </div>

          {/* Certification */}
          <div className="my-44" style={{ background: "url(/certBg.svg" }}>
            <div className="flex flex-col xl:flex-row items-center mx-5 shadow-2xl bg-white md:mx-10 rounded-[3rem] gap-10 pb-10 md:p-0">
              <Image
                height={500}
                width={600}
                src="/aboutFemaleStudent.svg"
                alt="aboutHeroImg"
                className="md:order-1"
              />
              <div className="px-10 mb:px-0 flex flex-col gap-5">
                <h1 className=" font-daxlineBold text-2xl md:text-3xl">
                  Certification
                </h1>
                <h1 className=" font-daxlineMedium text-md">
                  Vatebra Certificate Recognized across Africa, in the US and
                  UK. We also work with our students to get globally recognized
                  certificates in respective fields.
                </h1>
                <h1 className=" font-daxlineMedium text-md">
                  Vatebra academy is incorporated in Nigeria with Registration
                  Number 2594621 on the 6th of April 2018.
                </h1>
                <a
                  target="_blank"
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=Mh3BWZEh3UuZrgByGktfMuEqhVoLQSNMpCGgmLjyMttUQ0lEWllQVERJWVdTWFdUODlTQllCNlZRVS4u"
                  className="bg-[#D40E1F] cursor-pointer md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Not Alone */}
          <div className="bg-[#b7ea9a]  py-20 flex flex-col md:flex-row items-center justify-center px-5 md:px-10">
            <div className=" p-4 border-l-2 border-t-2 border-b-2 rounded-[2rem]">
              <Image
                priority
                height={500}
                width={500}
                src="/notAlone.svg"
                alt="aboutHeroImg"
                className=""
              />
            </div>

            <div className="bg-white flex flex-col gap-5 justify-center md:w-[40rem] py-10 md:py-24 px-5 md:pl-20 md:pr-44 rounded-[2rem]">
              <h1 className=" font-daxlineBold text-3xl">You are not alone</h1>
              <h1 className=" font-daxlineMedium opacity-60">
                You have the opportunity to ask questions, join small groups for
                personal classwork, submit assignments and also get real-time
                feedback.
              </h1>
              <h1
                onClick={() => setShowModal(!showModal)}
                className="bg-[#D40E1F] md:w-[max-content] py-3 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold"
              >
                Get started
              </h1>
            </div>
          </div>

          {/* Learning Model */}
          <LearningModel />
        </div>
      </div>

      {/* {showModal ? <PersonalInfoForm  setShowModal={setShowModal}/> : null} */}
    </>
  );
};

export default About;
