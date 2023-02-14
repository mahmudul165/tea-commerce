import React from "react";
 import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
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
      "https://jsonplaceholder.typicode.com/posts"
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
      <ProductsShowcase data={data} />
    </>
  );
}

export default TodayDeals;
