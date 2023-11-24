import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import context from "../../context/stateContext";
import "animate.css";

const Nav = () => {
  const { page, setPage, check, setCheck, clicked, setClicked } =
    useContext(context);

  const onClick = (type) => {
    switch (type) {
      case "menuToggle":
        setClicked(!clicked);
        break;

      case "schoolClick":
        setCheck({
          ...check,
          companyClick: false,
          schoolClick: !check.schoolClick,
        });
        break;

      case "companyClick":
        setCheck({
          ...check,
          schoolClick: false,
          companyClick: !check.companyClick,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className="relative font-daxlineMedium z-[100000] text-base">
      {/* Desktop Navbar */}
      <div className="hidden xl:flex fixed w-full bg-white items-center justify-between px-24">
        <Link className="z-10" href="/">
          <Image src="/logo.svg" height={10} width={160} alt="Vatebra Logo" />
        </Link>
        <div className=" hidden xl:flex uppercase font-daxlineRegular items-center relative gap-16 ">
          <Link href="/About">
            <h1
              className={` cursor-pointer ${
                page === "about" && "border-b-2 border-[#c81d25]"
              } hover:text-[#C81D25]`}
            >
              ABOUT US
            </h1>
          </Link>

          <div
            onClick={() => onClick("schoolClick")}
            className="flex items-center gap-1"
          >
            <h1
              className={` cursor-pointer ${
                page === "schools" && "border-b-2 border-[#c81d25]"
              } hover:text-[#C81D25]`}
            >
              school
            </h1>
            <Image
              src="/downNavArrow.svg"
              height={11}
              width={10}
              alt="down arrow"
            />
            <div
              className={` ${
                check.schoolClick ? "flex" : "hidden"
              } gap-10 animate__animated animate__fadeInDown animate__faster -left-36 font-daxlineBold absolute w-max shadow border bg-white top-12 p-5`}
            >
              <div>
                <Link
                  href="/DataAcademy"
                  className="hover:text-[#C81D25] cursor-pointer"
                >
                  data academy
                </Link>
                <Link href="/UiuxAcademy">
                  <h1 className="hover:text-[#C81D25] cursor-pointer">
                    ui/ux academy
                  </h1>
                </Link>
              </div>
              <div>
                <Link
                  href="/ProductAcademy"
                  className="hover:text-[#C81D25] cursor-pointer"
                >
                  product academy
                </Link>{" "}
                <br />
                <Link
                  href="/SoftwareAcademy"
                  className="hover:text-[#C81D25] cursor-pointer"
                >
                  software development academy
                </Link>
              </div>
            </div>
          </div>

          {/* <Link href='#'  className={` cursor-pointer ${page === 'testimonials' && 'border-b-2 border-[#c81d25]'} hover:text-[#C81D25]`}>testimonials</Link> */}
          <Link
            href="/Tutors"
            className={` cursor-pointer ${
              page === "tutors" && "border-b-2 border-[#c81d25]"
            } hover:text-[#C81D25]`}
          >
            tutors
          </Link>

          {/* <div onClick={() => onClick("companyClick")} className="flex items-center gap-1">
              <h1 className="uppercas hover:text-[#C81D25] cursor-pointer">company</h1>
              <Image src="/downNavArrow.svg" height={11} width={10} alt="down arrow" />
              <div className={` ${check.companyClick ? 'flex' : "hidden"} gap-10 animate__animated animate__fadeInDown animate__faster absolute w-max shadow border bg-white top-12 p-5`}>
                <div>
                  <h1 className="hover:text-[#C81D25] cursor-pointer">our patners</h1>
                </div>
              </div>
            </div> */}

          <Link
            href="Gallery"
            className={` cursor-pointer ${
              page === "gallery" && "border-b-2 border-[#c81d25]"
            } hover:text-[#C81D25]`}
          >
            gallery
          </Link>

          <Link
            href="/Contact"
            className=" cursor-pointer hover:text-[#C81D25]"
          >
            contact us
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="xl:hidden w-screen z-50 fixed">
        <div className=" w-full flex justify-between px-5 bg-white">
          <Link className="" href="/">
            <Image
              src="/logo.svg"
              height={10}
              width={160}
              alt="Vatebra Logo"
              className=""
            />
          </Link>

          <Image
            className="xl:hidden"
            onClick={() => onClick("menuToggle")}
            src={clicked ? "close.svg" : "/menu.svg"}
            height={30}
            width={30}
            alt="Menu"
          />
        </div>
      </div>

      <div>
        <h1 className="xl:hidden pt-10">.</h1>
      </div>

      <div
        className={`${
          clicked
            ? "flex overflow-auto flex-col h-screen w-full animate__animated animate__fadeInLeft animate__faster"
            : "hidden"
        } xl:hidden text-lg items-center gap-10 px-10 uppercase font-daxlineBold bg-white pt-10 text-black`}
      >
        <Link href="/About">
          <h1
            onClick={() => {
              setClicked(false),
                onClick("schoolClick"),
                onClick("companyClick");
            }}
            className={`${
              page === "about" && "border-b-2 border-[#c81d25]"
            } cursor-pointer hover:text-[#C81D25]`}
          >
            ABOUT
          </h1>
        </Link>

        <div className=" flex w-full items-center flex-col relative z-50">
          <div
            onClick={() => onClick("schoolClick")}
            className="flex items-center gap-1"
          >
            <h1
              className={`${
                page === "schools" && "border-b-2 border-[#c81d25]"
              } hover:text-[#C81D25] cursor-pointer`}
            >
              school
            </h1>
            <Image
              src="/downNavArrow.svg"
              height={11}
              width={10}
              alt="down arrow"
            />
          </div>
          <div
            className={` ${
              check.schoolClick ? "flex gap-3 flex-col" : "hidden"
            } z-50 animate__animated animate__fadeInDown animate__faster font-daxlineRegular absolute w-max shadow border bg-white top-8 p-5`}
          >
            <Link
              onClick={() => setClicked(false)}
              href="/DataAcademy"
              className="hover:text-[#C81D25] cursor-pointer"
            >
              data academy
            </Link>
            <Link
              onClick={() => setClicked(false)}
              href="/UiuxAcademy"
              className="hover:text-[#C81D25] cursor-pointer"
            >
              ui/ux academy
            </Link>
            <Link
              onClick={() => setClicked(false)}
              href="/ProductAcademy"
              className="hover:text-[#C81D25] cursor-pointer"
            >
              product academy
            </Link>
            <Link
              onClick={() => setClicked(false)}
              href="/SoftwareAcademy"
              className="hover:text-[#C81D25] cursor-pointer"
            >
              software development academy
            </Link>
          </div>
        </div>

        <Link
          onClick={() => {
            setClicked(false), onClick("schoolClick"), onClick("companyClick");
          }}
          href="Tutors"
          className={` cursor-pointer ${
            page === "tutors" && "border-b-2 border-[#c81d25]"
          } hover:text-[#C81D25]`}
        >
          tutors
        </Link>

        <Link href="/Gallery">
          <h1
            onClick={() => {
              setClicked(false),
                onClick("schoolClick"),
                onClick("companyClick");
            }}
            className={` ${
              page === "gallery" && "border-b-2 border-[#c81d25]"
            } -z-50 cursor-pointer hover:text-[#C81D25]`}
          >
            gallery
          </h1>
        </Link>

        <Link href="/Contact">
          <h1
            onClick={() => {
              setClicked(false),
                onClick("schoolClick"),
                onClick("companyClick");
            }}
            className="-z-50 cursor-pointer hover:text-[#C81D25]"
          >
            contact us
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
