import React, { Component, Suspense } from "react";

import CompanyOne from "/public/clientcompany/company-logo-1.png";
import CompanyTwo from "/public/clientcompany/company-logo-2.png";
import CompanyThree from "/public/clientcompany/company-logo-3.png";
import CompanyFour from "/public/clientcompany/company-logo-4.png";
// const com1 = React.lazy(() =>
//   import("../../../public/images/home/logo_influencer.png")
// );
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <div className="container my-3">
        <div className="container my-2 py-3">
          <div className="container text-center my-4 py-4">
            <Slider {...settings}>
              <section className="p-1  ">
                <Image src={CompanyOne} alt="" className="w-100 " />
              </section>
              <div className="p-1 ">
                <Image src={CompanyTwo} alt="" className="w-100" />
              </div>
              <div className="p-1">
                <Image src={CompanyThree} alt="" className="w-100" />
              </div>
              <div className="p-1">
                <Image src={CompanyFour} alt="" className="w-100" />
              </div>
              <div className="p-1">
                <Image src={CompanyFour} alt="" className="w-100" />
              </div>
              <section className="p-1  ">
                <Image src={CompanyOne} alt="" className="w-100 " />
              </section>
              <div className="p-1 ">
                <Image src={CompanyTwo} alt="" className="w-100" />
              </div>
              <div className="p-1">
                <Image src={CompanyThree} alt="" className="w-100" />
              </div>
              <div className="p-1">
                <Image src={CompanyFour} alt="" className="w-100" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
