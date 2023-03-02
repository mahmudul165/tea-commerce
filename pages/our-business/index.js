import React from "react";
 import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import HeroBanner from "@/components/common/Banner";

const OurbusinessShowcase = dynamic(
  () => import("/components/Our-Business/BusinessShowcase.js"),
  {
    loading: () => <><ThreeDotsWave/></>,
  }
);
  
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://arshi365.lamptechs.com/api/admin/todaysDeal"
//   );
//   const data = await res.json();
//   return { props: { data } };
//   revalidate: 3;
// };
export const getStaticProps = async () => {
    const res = await fetch(
      "https://sultan-tea-backend.vercel.app/api/v1/business"
    );
    const data = await res.json();
    return {
      props: { data },
      revalidate: 10
    };
  };
 
function OurBusiness({ data }) {
   
  return (
    <>
  {/* <HeroBanner name='Our Business' /> */}
     
      <OurbusinessShowcase data={data} />
    </>
  );
}

export default OurBusiness;
