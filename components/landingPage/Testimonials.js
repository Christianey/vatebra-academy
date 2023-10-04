import Image from "next/image";
import Slider from "react-slick";
import styles from "./TestimonialVideos.module.css";

const Testimonial = ({ name, academy, testimony, image }) => {
  return (
    <div className={"bg-[#5CBF22] py-4 px-14 rounded-[2rem] m-4"}>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white text-center">{testimony}</h1>
        <Image width={150} height={150} src={`/${image}`} alt="avatars" />
        <div className="flex justify-center items-center gap-3 text-white">
          <h1 className=" font-daxlineMedium">{name}</h1>
          <div className=" h-5 w-1 bg-white"></div>
          <h1 className=" font-daxlineRegular text-sm">{academy}</h1>
        </div>
      </div>
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

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow next={false} />,
  };

  return (
    <div className=" grid relative place-content-center bg-[#F4E4C6]  mb-20 bg-transparent md:shadow-2xl md:mx-24 rounded-3xl md:rounded-[5rem] py-32">
      <div className="shadow-2xl w-full bg-white p-5 rounded-3xl md:rounded-[5rem] relative md:w-[55rem] md:h-[30rem]">
        <h1 className="text-center mb-5 px-10 font-daxlineBold text-3xl">
          Testimonials from Alumni
        </h1>
        <div className="">
          <Slider {...settings}>
            <Testimonial
              name={"Busayo Ajakaiye"}
              academy={"Product Design"}
              testimony={`My Name is Busayo Ajakaiye, I studied Economics from the Lagos State University.  I currently work as a Relationship Manager in one of the leading Nigerian Banks. My focus in Banking is the Downstream Sector. 
I had no experience in tech. 
The major drivers of my interest are: first, to keep abreast of the rapidly changing world.  The world is going digital and in a few years from now, the illiterate of the next world will not be those who cannot read or write but those who will be digitally deficient. E.g., so many people will require help to use their banking application today.  This is very risky for that set of people. 
Secondly, the desire to keep learning.  It refreshes the brain. 
A friend referred Vatebra to me. 
The learning experience has been good.  The learning is interactive, you can always reach-out to the Academy anytime any day, there are also recorded classes to refresh your learning. 
The trainers are partners in progress.  That is how they all presented themselves. 
If you are still contemplating on joining Vatebra Academy, there is no need to contemplate, quickly join the moving train. `}
              image={"Busayo.png"}
            />
            <Testimonial
              name={"Robert Ogirri"}
              academy={"Data Academy"}
              testimony={`My name is Robert Ogirri and I manage a company at executive level. 
              I had no experience in tech. Closest thing to IT are basic appreciation courses all my working career 
              I do Consulting and it was becoming important to be able to put my research findings into formats and presentations that were appealing and compliant. Also, Business Analysis and analytics is becoming a mainstay in Strategic discussions and in taking decisions. This made me realize I had to acquaint myself with the necessary knowledge  
              I initially wanted to take the program abroad but another participant in the program Fikayokemi Ogunleye convinced me that Vatebra would deliver even better quality at a lower cost 
              I like the cordiality and ease of learning with Vatebra. The commitment to ensuring we are learning and the tools deployed in ensuring this 
               The Trainers are excellent. I had an issue once and reached out one on one and she was very helpful and followed up to ensure all was okay. 
              If you are still trying to decide if you should join Vatebra Acadmy. I believe you should join up fast…Vatebra is the real deal. `}
              image={"Robert.png"}
            />
            <Testimonial
              name={"Lukman Waliyullahi Olalekan"}
              academy={"Product Academy"}
              testimony={`My name is Lukman Waliyullahi Olalekan, an aspiring Product Manager. I currently work with AFEX Commodity Exchange as a Warehouse Manager 
I do not have a background experience in tech before as my course of studies were Agricultural Engineering and Mechanical Engineering but we were taught all these theory computer programming back then in four wall of classroom. 
I like the way the learning module has been selected with no rush and the facilitators have been awesome with us. The Product lead (Uduak) has been helpful as she always tried to take revision of any missed class and I do gain a lot from her wireframe teaching as I'm now mastering my wireframe skills too. I hope one day myself can start teaching some cohorts on Product Management. 
If you've been thinking on where to start your tech career don't sleep on Vatebra, It's actually the way to go this 2023 and don't be like me that have been sleeping on tech for almost 2 years. `}
              image={"Waliyulahi.png"}
            />
            <Testimonial
              name={"Abisola Fowosire"}
              academy={"Product Academy"}
              testimony={`My name is Abisola Fowosire, I work as a key account manager in a payment company. 
              I had no experience in Tech, my background was in finance. 
              Having moved to fintech from the Banking industry. The passion to transition to tech especially product manager ignited. 
              A good friend of mine referred me to Vatebra Academy and no regrets so far. 
              It’s been an enlightening experience thus far. 
              The Trainers are engaging and wanting to carry everyone along.   
              For those still contemplating on joining Vatebra. I’d say they will definitely be taught well as it has been a delightful experience for me. `}
              image={"Abisola Fowosire.jpg"}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
