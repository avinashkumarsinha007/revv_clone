import React from "react";
import CarouselBannerOpen from "../../Components/Dashboard/CarouselBannerOpen";
import Comparision from "../../Components/Dashboard/Comparision";
import FAQ from "../../Components/Dashboard/FAQ";
import Featured from "../../Components/Dashboard/Featured";
import HowItWorks from "../../Components/Dashboard/HowItWorks";
import SubscriptionBenefits from "../../Components/Dashboard/SubscriptionBenefits";
import Testimonials from "../../Components/Dashboard/TestimonialsOpen";

function Open() {
  return (
    <div>
      <CarouselBannerOpen/>
      <SubscriptionBenefits/>
      <HowItWorks/>
      <FAQ/>
      <Comparision/>
      <Testimonials/>
      <Featured/>
    </div>
  );
}

export default Open;
