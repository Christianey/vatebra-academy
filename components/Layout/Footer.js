import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import context from "../../context/stateContext";

const Footer = () => {
  const { clicked } = useContext(context);
  return (
    <div
      className={`${
        clicked && "hidden"
      } flex gap-10 bg-[#FCF3DF] pt-20 pb-10 flex-col xl:flex-row xl:justify-between px-5 md:px-24`}
    >
      <div className="flex flex-col gap-5 text-sm font-daxlineBold text-[#0B3954]">
        <Link className="" href="/">
          <Image
            src="/logo.svg"
            height={10}
            width={160}
            alt="Vatebra Logo"
            className=""
          />
        </Link>
        <h1>
          Plot 1187, Abimbola Awoniyi Close, Off Kasumu Ekemode Str, Via <br />{" "}
          Saka Tinubu Street,Victoria Island, Lagos, Nigeria.
        </h1>

        <div>
          <h1>E: E: academy@vatebra.com</h1>
          <h1>E: bmaxwell-akinyemi@vatebra.com</h1>
          <h1>T: 08130325171</h1>
        </div>
      </div>

      <div>
        <div className="flex gap-10 flex-col md:flex-row xl:gap-24 md:justify-between border-b border-[#707070]">
          <div className="flex flex-col gap-5 md:gap-8">
            <h1 className=" font-daxlineBold text-lg text-[#1F2829]">Info</h1>
            <div className="flex flex-col gap-8 font-daxlineBold text-base text-[#0B3954]">
              <Link href="/About">About Us</Link>
              <Link href="/Gallery">Gallery</Link>
              <Link href="/GetStarted">Schools</Link>
              <Link href="/Contact">Become a partner</Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 mb-5">
            <h1 className=" font-daxlineBold text-lg  text-[#1F2829]">
              Company Contact
            </h1>
            <div className="flex flex-col gap-8 items-start font-daxlineBold text-base text-[#0B3954]">
              <a className="flex items-center gap-4" href="tel:+2349062547247">
                <Image
                  height={24}
                  width={24}
                  src="/phoneLogo.svg"
                  alt="Phone logo"
                />
                <h1>2349062547247</h1>
              </a>
              <a
                className="flex items-center gap-4"
                href="mailto:customersupport@vatebra.com"
              >
                <Image
                  height={17}
                  width={25}
                  src="/mailLogo.svg"
                  alt="Phone logo"
                />
                <h1>customersupport@vatebra.com</h1>
              </a>
              <a className="flex items-center gap-4" href="#">
                <Image
                  height={21}
                  width={16}
                  src="/locationLogo.svg"
                  alt="Phone logo"
                />
                <p>
                  5th Floor, ICAN Building, <br />
                  Muritala  Muhammed Way, <br /> Ebute-Metta, Lagos
                </p>
              </a>
            </div>
          </div>

          {/* <div className='flex flex-col gap-5 md:gap-8 mb-5'>
            <h1 className=' font-daxlineBold text-lg  text-[#1F2829]'>Abuja Office</h1>
            <div className='flex flex-col gap-2 font-daxlineBold text-base text-[#0B3954]'>
              <h1>302 Fourtune Place, No. 8 Nairobi Street,</h1>
              <h1>Off Aminu Kano Cresent, Wuse 2,</h1>
              <h1>Abuja Nigeria.</h1>
              <a href='tel:+2349062547247'>T: 2349062547247</a>
              <a href='mailto:abujaoffice@vatebra.com'>E: abujaoffice@vatebra.com</a>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row mt-5 items-center md:justify-around xl:justify-between  text-base font-daxlineRegular text-[#0B3954]">
          <div className="flex gap-6">
            <a
              className="flex items-center gap-4"
              target="_blank"
              href="https://www.facebook.com/vatebraacademy?mibextid=LQQJ4d"
            >
              <Image
                height={41}
                width={41}
                src="/facebook.svg"
                alt="facebook logo"
              />
            </a>
            <a
              className="flex items-center gap-4"
              target="_blank"
              href="https://twitter.com/academyvatebra?s=21&t=8pWA2c1B3nRkdykEY4suWg"
            >
              <Image
                height={41}
                width={41}
                src="/twitter.svg"
                alt="twitter logo"
              />
            </a>
            <a
              className="flex items-center gap-4"
              target="_blank"
              href="https://instagram.com/vatebraacademy?igshid=MzRlODBiNWFlZA"
            >
              <Image
                height={41}
                width={41}
                src="/instagram.svg"
                alt="instagram logo"
              />
            </a>
            <a
              className="flex items-center gap-4"
              target="_blank"
              href="https://www.linkedin.com/company/vatebraacademy/"
            >
              <Image
                height={41}
                width={41}
                src="/linkedin.svg"
                alt="linkedin logo"
              />
            </a>
          </div>

          <h1 className="my-5 md:my-0">&#169; Copyright 2022 by Vatebra.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
