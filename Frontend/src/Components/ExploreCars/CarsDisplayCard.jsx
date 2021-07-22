import React from "react";

import { Image, Section, Text } from "./exploreCarsStyledComponents";

export default function CarsDisplayCard() {
  return (
    <div>
      <Section cards>
        <Section imagesection>
          <Image src="https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_Alto800.jpg" />
        </Section>
        <Section carinfo>
          <Text carName>Maruti Alto 800</Text>
          <Section specs>
            <Section icon>
              <Image
                icon
                src="https://www.revv.co.in/grapheneImages/CarsAndPricing/transmission-icon.svg"
              />
              <Text icon>Petrol</Text>
            </Section>
            <Section icon>
              <Image
                icon
                src="https://www.revv.co.in/grapheneImages/CarsAndPricing/automatic-icon.svg"
              />
              <Text icon>Manual</Text>
            </Section>
          </Section>
        </Section>
        <Section price>
          <Text discountprice>$2500<span style={{fontSize:"18px", fontWeight:"400", color:"grey "}}>/month</span></Text>
          <Text baseprice>$2500</Text>
        </Section>
      </Section>
    </div>
  );
}
