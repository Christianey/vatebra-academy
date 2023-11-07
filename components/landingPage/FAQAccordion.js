import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { BsChevronDown } from "react-icons/bs";

const FAQAccordion = () => (
  <Accordion.Root
    className="bg-mauve6 w-full space-y-4 my-6"
    type="single"
    collapsible
  >
    <AccordionItem className="" value="item-1">
      <AccordionTrigger>What is Vatebra Academy about?</AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Vatebra Academy, a subsidiary of Vatebra Limited, is an technology
        education company that focuses on teaching tech skills, such as software
        development, Data Analytics/science, Product Management and other
        IT-related disciplines.
        <br /> <br /> We help bridge the gap between the demand for Tech talents
        by assisting tech enthusiasts have a smooth learning experience and
        transition into the Tech ecosystem.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-2">
      <AccordionTrigger>
        What are the benefits of enrolling in vatebra academy?{" "}
      </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Vatebra Tech Academy provides hands-on training, mentorship, and access
        to a network of professionals in the tech industry. We can help you gain
        practical skills and increase your job prospects in the technology
        sector. We also provide an internship program to help you kickstart your
        career and gain real-life industry experience after your training
        program. <br />
        <p>Other benefits include:</p>
        <ol className="list-decimal list-inside [&>li]:ml-4">
          <li>
            Capstone Projects that have been co-created with Industry
            Professionals and companies to consolidate your learning.
          </li>
          <li>Extra Session: 4-hour Hackathons with technology leaders.</li>
          <li>
            Extra Session: 3 hours of Online Consulting Practice – LinkedIn
            Optimization Session, CV Reviews, and Demo Interviews.
          </li>
          <li>
            Certification: Vatebra Certificate Recognized across Africa, in the
            US, and UK. We also work with our students to get globally
            recognized certificates in respective fields.
          </li>
          <li>
            Internship to help you build your portfolio and get real-life
            practice.
          </li>
        </ol>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-3">
      <AccordionTrigger>
        What Tech skills can I learn at Vatebra academy?{" "}
      </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Vatebra academy offers a wide range of courses, including Software
        development (programming languages like HTML/CSS, Python and JavaScript,
        web development, mobile app development), Data Science and Analytics,
        Product Management, Product Design (UI/UX), etc.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-4">
      <AccordionTrigger>
        Can I Register in Vatebra academy if I have no prior tech knowledge or
        experience?{" "}
      </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Yes, Vatebra tech academy’s curriculum is beginner-friendly and with or
        without prior tech familiarity, we gradually build your skills from the
        ground-up.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-5">
      <AccordionTrigger>
        How long do your programs typically last?{" "}
      </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        The duration varies depending on the specific program. Some are
        intensive bootcamps that last a few weeks, while others might be
        longer-term programs lasting 2-3 months.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-6">
      <AccordionTrigger>Can I learn a tech skill virtually? </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Yes of course, This allows you to study from anywhere in the world at
        your comfort, at your own pace and time and also bridges the Distance
        Constraint, our classes are virtual and instructor-led, which means you
        can get real life feedback in class, and also you get the recordings
        after every class, this also means you can always have access to the
        classes, refresh, and ask questions in all the classes.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-7">
      <AccordionTrigger>
        Can I get a Tech job after completing my programs?{" "}
      </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Yes, many of our graduates go on to have successful careers in the tech
        industry. Job prospects depend on the specific skills you've acquired,
        your dedication, and the demand for tech professionals in your area.
        Skilled Data scientists, software developers, product managers and UI/UX
        designers are in high demand across various industries.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-8">
      <AccordionTrigger>Is Vatebra Academy accredited? </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Yes of course, this means our certificate is recognized anywhere in the
        corporate ecosystem.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem className="" value="item-9">
      <AccordionTrigger>
        How can I register with Vatebra Academy?{" "}
      </AccordionTrigger>
      <AccordionContent className="rouded-[.5rem]">
        Kindly visit our programs on this website by clicking the “Get Started”.{" "}
        <br />
        You can also send us an email at bmaxwell-akinyemi@vatebra.com or send a
        WhatsApp DM to this phone number: +2348130325171 or any of our social
        media handles to enroll in our academy.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "font-daxlineLight mt-px overflow-hidden first:mt-0 focus-within:relative data-[state=open]:shadow-[0px_3px_6px_#00000029] rounded-[10px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex ">
      <Accordion.Trigger
        className={classNames(
          "hover:bg-mauve2 group flex h-auto md:h-[55px] flex-1 items-center justify-between bg-white px-5 py-6 leading-none outline-none text-[1.2rem] text-left cursor-pointer text-[#707070]",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <BsChevronDown
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden AccordionContent text-left bg-white text-[1.2rem]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] mx-5 border-t font-daxlineLight">
        {children}
      </div>
    </Accordion.Content>
  )
);

export default FAQAccordion;
