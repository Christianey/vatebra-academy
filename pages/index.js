import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/landingPage/Hero";
import WhyVatebra from "@/components/landingPage/WhyVatebra";
import Characteristics from "@/components/landingPage/Characteristics";
import MasterClass from "@/components/landingPage/MasterClass";
import OurPrograms from "@/components/landingPage/OurPrograms";
import BusinessTraining from "@/components/landingPage/BusinessTraining";
import LearningModel from "@/components/landingPage/LearningModel";
import Cohorts from "@/components/landingPage/Cohorts";
import Testimonials from "@/components/landingPage/Testimonials";
import Partner from "@/components/landingPage/Partner";
import TestimonialVideos from "@/components/landingPage/TestimonialVideos";

// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <Testimonials />
        <TestimonialVideos />
        <WhyVatebra />
        <Characteristics />
        <MasterClass />
        <OurPrograms />
        <BusinessTraining />
        <LearningModel />
        <Cohorts />
        <Partner />
      </main>
    </>
  );
}
