import React from "react";
import Overview1 from "@/components/about/Overview1";
import Overview3 from "@/components/about/Overview3";
import Overview2 from "@/components/about/Overview2";
import Overview4 from "@/components/about/Overview4";
import Achivements from "@/components/about/Achivements";
import NewsPress from "@/components/about/NewsPress";
import ClientCompany from "@/components/about/ClientCompany";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
import SultanTeaLogo from "/public/about-image-5.png";
import HeritageGP from "/public/heritage-gp.png";
import Image from "next/image";

// import { useRouter } from 'next/router'

function about() {
  // const router=useRouter()
  // console.log(router.pathname)

  return (
    <>
      {/* <RouteNavSlider router='About Us'   /> */}
      <HeroBanner name="About Us" />
      <Overview2 />
      <Overview1 />
      <Overview3 />
      <Overview4 />
      <Achivements />

      <ClientCompany />
      <div className="container my-5">
        <div className="d-flex  gap-5 justify-content-between ">
          <div>
            <Image src={SultanTeaLogo} alt="ABOUT IMG" />
          </div>
          <div>
            <Image src={HeritageGP} alt="Heritage GROUP" />
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
