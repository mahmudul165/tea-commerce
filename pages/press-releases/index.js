import React from "react";
 import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
const PressReleasesBlog = dynamic(
  () => import("/components/pressReleases/PressReleasesBlog.js"),
  {
    loading: () => <><ThreeDotsWave/></>,
  }
);
  
 
export const getStaticProps = async () => {
    // const res = await fetch(
    //   "https://crabby-pocketbook-eel.cyclic.app/api/v1/press"
    // );
 const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/press`
);

    const data = await res.json();
    return {
      props: { data },
      revalidate: 10
    };
  };
 
function TodayDeals({ data }) {
   
  return (
    <>
     {/* <RouteNavSlider router='Press Releases'/> */}
     <HeroBanner name='Press Releases' />
      <PressReleasesBlog data={data} />
    </>
  );
}

export default TodayDeals;
