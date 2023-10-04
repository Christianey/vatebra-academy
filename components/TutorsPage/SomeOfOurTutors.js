import React from "react";
import Image from "next/image";

const TutorCard = ({ img, lastName, firstName, bio, faculty, linkedinUrl }) => {
  return (
    <div className="flex items-center gap-5 w-96 bg-white p-3 rounded-3xl self-stretch">
      <div className="flex flex-col shrink-0 basis-[30%] justify-between self-stretch">
        <Image
          height={120}
          width={130}
          src={`/${img}`}
          alt="plus image"
          className="rounded-lg"
        />

        <a href={linkedinUrl} target="_blank">
          <div className="">
            <p className="font-bold leading-3 text-[1.3rem]">{lastName}</p>
            <p>{firstName}</p>
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-3 self-stretch justify-between">
        <div>
          <h1 className=" font-daxlineBold text-sm">About Me</h1>
          <h1 className=" font-daxlineRegular text-sm">{bio}</h1>
        </div>

        <div>
          <h1 className=" font-daxlineBold text-sm">Faculty</h1>
          <h1 className=" font-daxlineRegular text-sm">{faculty}</h1>
        </div>
      </div>
    </div>
  );
};

const SomeOfOurTutors = () => {
  return (
    <div className="my-32 py-20 rounded-3xl bg-gradient-to-b from-white to-lime-200">
      <div className="md:px-10 flex flex-col md:flex-row items-center md:items-start justify-around gap-6 md:gap-0">
        <h1 className=" font-daxlineRegular text-4xl">Some of Our Tutors</h1>
        <div className="flex gap-2">
          <div className="bg-[#CB1829] w-1"></div>
          <h1 className="w-96 font-daxlineBold text-2xl">
            You will receive invaluable mentorship from our tutors who are
            passionate about helping you get your career off to a flying start.{" "}
          </h1>
        </div>
        <Image height={120} width={130} src="/plus.svg" alt="plus image" />
      </div>

      <div className="flex flex-col xl:flex-row gap-7 justify-center flex-wrap items-center mt-20">
        <TutorCard
          img={"Raphael-Okojie.jpg"}
          lastName={"Raphael"}
          firstName={"Okojie"}
          bio={
            " I'm a Product Designer who enjoys creating innovative and beautiful user interfaces. My area of expertise is performing user research that leads to better user experiences on existing products."
          }
          faculty={"Design Academy"}
          linkedinUrl="https://www.linkedin.com/in/rafreo"
        />
        <TutorCard
          img={"Gbemisola-Owolabi.jpg"}
          lastName={"Gbemisola"}
          firstName={"Owolabi"}
          bio={
            "I am passionate about creating innovative and user-friendly products that are both aesthetically pleasing and highly functional. I enjoy the creative process of ideation and prototyping."
          }
          faculty={"Design Academy"}
          linkedinUrl={
            "https://www.linkedin.com/in/owolabi-gbemisola-802a87135"
          }
        />
        <TutorCard
          img={"Joy Itua__.jpg"}
          lastName={"Joy"}
          firstName={"Itua"}
          bio={
            "I am a UX designer interested in solving problems and designing meaningful and engaging products to meet users' needs by improving the user experience while impacting the company's growth. "
          }
          faculty={"Design Academy"}
          linkedinUrl={"https://www.linkedin.com/in/joy-itua-176962176"}
        />
        <TutorCard
          img={"Ricky Omoareghan.jpg"}
          lastName={"Ricky"}
          firstName={"Omoareghan "}
          bio={
            " I am fascinated by the Future Of Work in Data Capabilities, Artificial Intelligence, Machine Learning, and Web 3.0. I have supported the building of Africa's First Omni-commerce digitalized platform for Global Retailers and further pivoted it to a platform that powers African retail sales for global brands. "
          }
          faculty={"Product Management Academy"}
          linkedinUrl={"https://www.linkedin.com/in/ricky-omoareghan"}
        />
        <TutorCard
          img={"Bode Maxwell-Akinyemi.jpg"}
          lastName={"Bode"}
          firstName={"Maxwell-Akinyemi"}
          bio={
            "He is a certified Project and Product Manager with close to a decade of experience in Technology Education, Social Entrepreneurship, and product development, with broad-band knowledge of in-demand technology conversations from Data Science, Product/ Software Development, IoTs (Internet of Things), AI to Web 3"
          }
          faculty={"Product Management Academy"}
          linkedinUrl={"https://www.linkedin.com/in/bodemaxwell-akinyemi"}
        />

        <TutorCard
          img={"Ifeanyi Okondu.jpg"}
          lastName={"Ifeanyi"}
          firstName={"Okondu"}
          bio={
            " I’m a certified product manager and freelance tech content writer with a broad grounding in digital marketing, SEO, and content management. As a product manager, I help founders and companies develop viable products through in-depth market research, idea stress testing, and viability assessment."
          }
          faculty={"Product Management Academy"}
          linkedinUrl={"https://linkedin.com/in/ifeanyi-joseph-okondu"}
        />

        <TutorCard
          img={"Oluwatosin Alo.jpg"}
          lastName={"Oluwatosin"}
          firstName={"Alo"}
          bio={
            "An Agricultural and Bioresources Engineer with two years experience. A graduate member of the Nigeria Society of Engineers (GMNSE). Certified Product Manager. Health, Safety and Environment Officer ( Level I, II and III)"
          }
          faculty={"Design Academy"}
          linkedinUrl={"https://www.linkedin.com/in/oluwatosin-alo-b13414194"}
        />

        <TutorCard
          img={"Adedotun Alausa.jpeg"}
          lastName={"Adedotun"}
          firstName={"Alausa"}
          bio={
            "I design systems, develop applications and design cloud architectures. Mechanical engineering thought me a lot and I owe a lot of my soft skills to the period spent working as a mechanical engineer. Moreover, software engineering has also offered an opportunity to constantly learn and improve my skills in solving technical problems and communicating effectively."
          }
          faculty={"Software Development"}
          linkedinUrl={"https://www.linkedin.com/in/adedotun-alausa"}
        />

        <TutorCard
          img={"Adedotun Alausa.jpeg"}
          lastName={"Olamilekan"}
          firstName={"Animashaun"}
          bio={"CTO, Caudal and Ex- Engineering Team Lead, CARS45"}
          faculty={"Software Development"}
          linkedinUrl={
            "https://www.linkedin.com/in/olalekan-animashaun-b0b34b2b"
          }
        />

        <TutorCard
          img={"Adedotun Alausa.jpeg"}
          lastName={"Okpara"}
          firstName={"Obinna"}
          bio={
            "A software developer highly proficient in C#, ASP.NET, Restful Services, .NetCore, Solid principle, Microservices & SQL. An excellent communicator, who can relate well with people at all levels and has the flexibility of working well as part of a team and on my own."
          }
          faculty={"Software Development"}
        />

        <TutorCard
          img={"Adedotun Alausa.jpeg"}
          lastName={"Newportright"}
          firstName={"Angel"}
          bio={
            " I am a business and data analyst. I love using data analysis and its insights to drive software projects that innovates business processes for organizations."
          }
          faculty={"Data"}
        />

        <TutorCard
          img={"Adedotun Alausa.jpeg"}
          lastName={"Adekanye"}
          firstName={"Mariam"}
          bio={
            " I'm passionate about leveraging data to inform business decisions and drive growth. I possess a solid foundation in statistical analysis and data visualization, I excel at translating complex data into actionable insights that inform strategy and improve operations. "
          }
          faculty={"Data"}
          linkedinUrl={"https://www.linkedin.com/in/mariam-adekanye"}
        />

        <TutorCard
          img={"Adedotun Alausa.jpeg"}
          lastName={"Ogundipe"}
          firstName={"Olanrewaju"}
          bio={
            "i am a Dedicated and passionate HR/Data Analytics Enthusiast with a demonstrated history of working and volunteering in organization development. Skilled in HR Analytics with Microsoft Excel and Power BI, recruitment process, training and development, program coordination, policies development and employee relations with effective data management. Focused on integrating technology and HR functions to build a robust strategic HR system. "
          }
          faculty={"Data"}
          linkedinUrl={"https://www.linkedin.com/in/ogundipe-olanrewaju-sodiq"}
        />

        <TutorCard
          img={"Adedotun Alausa.jpeg"}
          lastName={"Ezeilo"}
          firstName={"Chisom"}
          bio={
            "A Tableau Developer and data analyst who is interested in helping organizations tell stories from any form of data. I have spent the 3+ years building my skills through work experiences and staying updated within the analytics industry. I am skilled in using Tableau, R, SQL & Excel to make sense out of a large data set. Growing every day is a priority for me, so I engage myself by reviewing thought leadership articles within my space."
          }
          faculty={"Data"}
          linkedinUrl={"https://www.linkedin.com/in/chisomezeilo"}
        />
      </div>
    </div>
  );
};

export default SomeOfOurTutors;
