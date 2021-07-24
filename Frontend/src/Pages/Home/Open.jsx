import React from "react";
import CarouselBannerOpen from "../../Components/Dashboard/CarouselBannerOpen";
import Comparision from "../../Components/Dashboard/Comparision";
import FAQ from "../../Components/Dashboard/FAQ";
import Featured from "../../Components/Dashboard/Featured";
import HowItWorks from "../../Components/Dashboard/HowItWorks";
import SubscriptionBenefits from "../../Components/Dashboard/SubscriptionBenefits";
import Testimonials from "../../Components/Dashboard/TestimonialsOpen";
import Navbar from "../../Components/Navbar/Navbar";

function Open() {
  return (
    <div>
      <Navbar />
      <CarouselBannerOpen />
      <SubscriptionBenefits />
      <HowItWorks />
      <FAQ />
      <Comparision />
      <Testimonials />
      <Featured />
    </div>
  );
}

export default Open;
