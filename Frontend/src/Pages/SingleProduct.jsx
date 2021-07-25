import React from "react";
// import { Product } from "../Components/Product/product";
import { ProductPage } from "../Components/Product/ProductPage";
import { ProductPage2 } from "../Components/Product/ProductPage2";
import LoggedInNavbar from "../Components/LoggedInNavbar";
import { Insurance } from "../Components/Product/Insurance";
import { Sanatize } from "../Components/Product/Sanatize";
import Footer from "../Components/Footer/Footer"
export const SingleProduct = () => {
    return (
        <>
            <div style={{position:"sticky",top:0,zIndex:1000}}>
                <LoggedInNavbar />
            </div>
            <div style={{width:"100%",position:"relative"}}>
                <ProductPage />
                <div style={{}}>
                <ProductPage2/>              
               </div>
            </div>
            <Insurance />
            <Sanatize />
            <div style={{marginTop:80}}>
              <Footer/>
            </div>
        </>
    )
}