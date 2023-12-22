import React from "react";
import OurService from "../../components/dashboard/landingpage/OurService";
import WhyUs from "../../components/dashboard/landingpage/WhyUs";
import Hero from "../../components/dashboard/Hero";
import Faq from "../../components/dashboard/landingpage/Faq";
import CtaBanner from "../../components/dashboard/landingpage/CtaBanner";
import Testimonials from "../../components/dashboard/landingpage/Testimonials";

export default function LandingPage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Faq />
    </>
  );
}
