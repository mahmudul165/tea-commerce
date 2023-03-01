import React from "react";
 import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import RouteNavSlider from "@/components/common/RouteNavSlider";
import HeroBanner from "@/components/common/Banner";
const ProductsShowcase = dynamic(
  () => import("/components/products/ProductsShowcase.js"),
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
      // "https://jsonplaceholder.typicode.com/posts"
      'https://sultan-tea-backend.vercel.app/api/v1/product'

    );
    const data = await res.json();
    return {
      props: { data },
      revalidate: 3
    };
  };

function TodayDeals({ data }) {
   
  return (
    <>
     {/* <RouteNavSlider router='Shop'/> */}
     <HeroBanner name='Shop'/>
      <ProductsShowcase data={data} />
    </>
  );
}

export default TodayDeals;
