import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./product.module.css";
import { ProductPage2 } from "./ProductPage2";
import { SmallCard } from "./smallCard";


function Item(props) {
  return (
      <div>
      <div><img className={styles.stdiv} src="https://www.revv.co.in/grapheneImages/PDP/product-images/less-than-3-years-old.png" alt="icon"/></div>
        <img src={ props.item.img} alt="icon"/>
    </div>
  );
}
export const ProductPage = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img:"https://lt-car-images.s3.ap-south-1.amazonaws.com/Maruti%20Alto%20K10/Front%20right.jpg"
    },
    {
      name: "Random Name #2",
        description: "Hello World!",
      img:"https://lt-car-images.s3.ap-south-1.amazonaws.com/Maruti%20Alto%20K10/Front.jpg"
      },
      {
        name: "Random Name #2",
          description: "Hello World!",
        img:"https://lt-car-images.s3.ap-south-1.amazonaws.com/Maruti%20Alto%20K10/Side.jpg"
      },
      {
        name: "Random Name #2",
          description: "Hello World!",
        img:"https://lt-car-images.s3.ap-south-1.amazonaws.com/Maruti%20Alto%20K10/Back_Backleft,right.jpg"
      }
    ];
    let items2 = [
        {
            name: "Condition",
            description: "As good as new",
            img:"https://www.revv.co.in/grapheneImages/PDP/product-images/condition.svg"
        },
        {
            name: "variant/Color",
            description: "As per availability",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkYfYpsNQhqwomLdlXuyfltdlGRuTwzoW3ObR-LTraANeAH5iZ2ODNfnFJ6NXwQvZF0Y&usqp=CAU"
        },
        {
            name: "Transmission type",
            description: "Manual",
            img:"https://repairsmith-prod-wordpress.s3.amazonaws.com/2019/08/Exhaust-Manifold-e1566993279214.png"
        },
        {
            name: "Fuel type",
            description: "Petrol",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaoYtNR_7lZFdHEniqCtVwxTVzZm0Dm1sBBaTRQ6ja0ftg3aHcRHGnRfqIBJiBo7UqxA&usqp=CAU"
        },
    ]
  return (
    <>
      <div style={{ width: "44vw" ,textAlign:"center",marginLeft:"12%"}}>
        <Carousel
          // IndicatorIcon="prev" // Previous Example
          animation="slide"
          navButtonsAlwaysVisible={true}
          indicatorIconButtonProps={{
            style: {
              color: "silver",
              marginTop: -70, // 3
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#1caba2", // 2
            },
          }}
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              opacity: 1,
                  color: "#1caba2",
              background:"white"
            },
          }}
          autoPlay={false}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
              </Carousel>
              <div className={styles.container10}>
                  {items2.map((e,i) => {
                      return <SmallCard key={i} item={e}/>
                })}
             </div>
          </div>
          <div>
          <ProductPage2/>
          </div>
    </>
  );
};
