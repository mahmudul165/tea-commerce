import React from "react";
import dynamic from "next/dynamic";
import ThreeDotsWave from "@/components/common/ThreeDot";
import HeroBanner from "@/components/common/Banner";

const OurbusinessShowcase = dynamic(
  () => import("/components/our-brand/BusinessShowcase.js"),
  {
    loading: () => (
      <>
        <ThreeDotsWave />
      </>
    ),
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
  // const res = await fetch(
  //   "https://crabby-pocketbook-eel.cyclic.app/api/v1/brand"
  // );
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brand`
);

  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
};

function OurBusiness({ data }) {
  return (
    <>
      <HeroBanner name="Our Brand" />

      <OurbusinessShowcase data={data} />
    </>
  );
}

export default OurBusiness;
