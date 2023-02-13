import React, { Component, Suspense } from "react";
 
 
import CompanyOne from "/public/vercel.svg";
import CompanyTwo from "/public/logo.png";
import CompanyThree from "/public/favicon.ico";
// const com1 = React.lazy(() =>
//   import("../../../public/images/home/logo_influencer.png")
// );
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
export default class ClientCompany extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="container">
        <h1 className="text-center fs-3 fw-bolder my-5 ">
          Trusted by 5,000+ Companies Worldwide
        </h1>
        <div className="container my-4 py-4">
          <div className="container text-center my-4 py-4">
            <Slider {...settings}>
              <section className="p-2  ">
                <Image src={CompanyOne} alt="" className="w-75 h-75" />
              </section>
              <div className="p-2 ">
                {/* <img src="/favicon.ico" alt="" className="w-25 h-25" /> */}
                <Image src={CompanyTwo} alt="" className="w-25 h-25" />
              </div>
              <div className="p-2">
                {/* <img src="/vercel.svg" alt="" className="w-50 h-50" /> */}
                <Image src={CompanyThree} alt="" className="w-50 h-50" />
              </div>
              <div className="p-2">
                {/* <img
                  src="/images/home/logo_influencer.png"
                  alt=""
                  className="w-75 h-75"
                /> */}
                <Image src={CompanyOne} alt="" className="w-75 h-75" />
              </div>
              <div className="p-2">
                {/* <img src="/favicon.ico" alt="" className="w-25 h-25" /> */}
                <Image src={CompanyTwo} alt="" className="w-25 h-25" />
              </div>
              <div className="p-2">
                {/* <img src="/vercel.svg" alt="" className="w-50 h-50" /> */}
                <Image src={CompanyThree} alt="" className="w-50 h-50" />
              </div>
              <div className="p-2">
                {/* <img src="/favicon.ico" alt="" className="w-25 h-25" /> */}
                <Image src={CompanyTwo} alt="" className="w-25 h-25" />
              </div>
              <div className="p-2">
                {/* <img src="/vercel.svg" alt="" className="w-50 h-50" /> */}
                <Image src={CompanyThree} alt="" className="w-50 h-50" />
              </div>
              <div className="p-2">
                {/* <img
                  src="/images/home/logo_influencer.png"
                  alt=""
                  className="w-75 h-75"
                /> */}
                <Image src={CompanyOne} alt="" className="w-75 h-75" />
              </div>
              <div className="p-2">
                {/* <img src="/favicon.ico" alt="" className="w-25 h-25" /> */}
                <Image src={CompanyTwo} alt="" className="w-25 h-25" />
              </div>
              <div className="p-2 ">
                {/* <img src="/vercel.svg" alt="" className="w-50 h-50" /> */}
                <Image src={CompanyThree} alt="" className="w-50 h-50" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}