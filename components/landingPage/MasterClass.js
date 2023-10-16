import React from "react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./TestimonialVideos.module.css";

const Arrow = ({ next = true, onClick, className }) => {
  return (
    <div
      className={`${className} ${styles.btn_arrow} ${
        next ? styles.next : styles.prev
      }`}
      onClick={onClick}
    >
      {next ? (
        <span className="w-[20px] h-[20px] text-white z-[200000] grid place-content-center text-[.7rem]">
          &#9664;
        </span>
      ) : (
        <span className="w-[20px] h-[20px] text-white z-[200000] grid place-content-center text-[.7rem]">
          &#9654;
        </span>
      )}
    </div>
  );
};

const ResponsiveYouTube = ({ src }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const MasterClass = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    prevArrow: <Arrow />,
    nextArrow: <Arrow next={false} />,
  };

  return (
    <>
      <div className="relative text-center flex flex-col justify-center items-center py-20 px-5 md:px-24 w-full">
        <Image
          priority
          src="/masterclassBg.svg"
          width={1000}
          height={5}
          alt="Why Background Image"
          className="top-32 w-full md:-top-96 -z-50 absolute right-0"
        />
        <div className=" xl:w-[60rem]">
          <div className="grid place-items-center">
            <h1 className=" font-daxlineBold text-4xl">Our Masterclass</h1>
            <Image height={4} width={300} alt="line" src="/line.svg" />
          </div>
          <h4 className="mt-5 opacity-90 font-daxlineBold">
            Vatebra Academy strives to provide future-facing, specialized and
            skill-based training in the technology ecosystem at a reasonable
            cost and atmosphere that delivers value for our and the society at
            large.
          </h4>
        </div>
        <div className="w-[80%] mx-auto mb-10">
          <Slider {...settings}>
            <ResponsiveYouTube
              src={
                "https://www.youtube.com/embed/ScnwH1K-cIQ?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"
              }
            />

            <ResponsiveYouTube
              src={
                "https://www.youtube.com/embed/Fk-SC3RdZ9s?si=gu_8XzmdDDGF_Ty4"
              }
            />

            <ResponsiveYouTube
              src={"https://www.youtube.com/embed/MGlI9ptXub4"}
            />
          </Slider>
        </div>

        <Link
          href="/GetStarted"
          className="bg-[#D40E1F] md:w-[max-content] py-2 px-24 hover:bg-black rounded-lg mx-auto xl:mx-0 text-white font-daxlineBold"
        >
          Get started
        </Link>
      </div>
    </>
  );
};

export default MasterClass;
