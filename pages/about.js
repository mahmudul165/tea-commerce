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
// import SultanTeaLogo from "/public/logo-company-1.jpg";
// import  TeaLogo from "/public/logo-company.jpg";
// import  Company3 from "/public/logo-company-2.jpg";
// import HeritageGP from "/public/logo-company-4.jpg";
import CompanyTeaLogo from "/public/test-logo-company.jpg";
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
{/* test */}
      <ClientCompany />
      <div className="container mb-2">
        <div className="d-flex  justify-content-between align-items-center ">
        <div>
            <Image src={CompanyTeaLogo} alt="ABOUT IMG" />
          </div>
          {/* <div>
            <Image src={SultanTeaLogo} alt="ABOUT IMG" />
          </div>
          <div>
            <Image src={TeaLogo} alt="ABOUT IMG" />
          </div>
          <div>
            <Image src={Company3} alt="ABOUT IMG" />
          </div>
          <div>
            <Image src={HeritageGP} alt="Heritage GROUP" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default about;
