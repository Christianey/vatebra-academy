import { useState } from "react";
import ModalVideo from "react-modal-video";
import { createPortal } from "react-dom";
import "node_modules/react-modal-video/scss/modal-video.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialVideos.module.css";
import { BsYoutube } from "react-icons/bs";

import Slider from "react-slick";

const Testimonial = ({
  name,
  title,
  bgImage = "https://source.unsplash.com/GhKOvIAp7AE",
}) => {
  const [isOpen, setOpen] = useState(false);
  const buttonClasses = `flex justify-center items-center min-w-full h-[200px] rounded-3xl md:rounded-[2rem] bg-no-repeat bg-center bg-cover bg-[#00000076] bg-blend-soft-light`;

  return (
    <div className="px-4 relative">
      <button className={buttonClasses} style={{backgroundImage: `url(${bgImage})`}} onClick={() => setOpen(!isOpen)}>
        <div className="flex justify-center items-center rounded-full p-2 bg-red-600">
          <BsYoutube size={"1.5rem"} color="white" />
        </div>
      </button>
      <div className="absolute bottom-7 left-8 text-white">
        <h5 className="font-bold text-[1.5rem]">{name}</h5>
        <p className="text-sm">{title}</p>
      </div>
      {isOpen &&
        createPortal(
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 1, autoplay: 1 }}
            isOpen={isOpen}
            videoId="lJkQmERWS-4"
            onClose={() => setOpen(false)}
          />,
          document.body
        )}
    </div>
  );
};

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

const TestimonialVideos = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    initialSlide: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow next={false} />,
  };

  return (
    <div className="bg-[#FBA0A021]  mb-20 md:shadow-2xl md:mx-24 rounded-3xl md:rounded-[5rem] py-32  relative">
      <h1 className="text-center mb-10 px-10 font-daxlineBold text-3xl">
        Hear what our Students are saying{" "}
      </h1>

      <div className="relative flex flex-col px-8">
        <Slider
          {...settings}
          responsive={[
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ]}
        >
          <Testimonial name="John Steve" title={"Graphics Design Student"} />
          <Testimonial
            name="Joy Steve"
            title={"Frontend Development Student"}
          />
          <Testimonial name="Harry Ken" title={"Product Design Student"} />
          <Testimonial
            name="John Mark"
            title={"Frontend Development Student"}
          />
          <Testimonial name="Jane Doe" title={"Backend Development Student"} />
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialVideos;
