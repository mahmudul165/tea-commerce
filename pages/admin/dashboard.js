import PrivateRoute from "@/components/PrivateRoute";
import Link from "next/link";
import {
  AiOutlineDelete,
  AiOutlineDollarCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { BsCardChecklist, BsCartCheck, BsSliders } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiEdit, FiTarget } from "react-icons/fi";
import { useEffect, useState } from "react";
import CartItemsModal from "@/components/common/CartItemsModal";
import CustomTable from "@/components/admin/common/CustomTable";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
import useAuth from "@/lib/hook/useAuth";

function randomColor() {
  const colors = [
    "#1abc9c",
    "#59330e",
    "#8DFF9B",
    "#B871C7",
    "#5A94F5",
    "#ff7f50",
    "#ff1493",
    "#f08080",
    "#00bfff",
    "#32cd32",
    "#8a2be2",
    "#e67e22",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const NewCard = ({ name, path, bgColor, number, icon }) => {
  return (
    <>
      <Link href={`${path ? path : "/dashboard"}`}>
        <div
          className="d-flex justify-content-between p-3 border border-1 rounded-3 shadow-sm"
          style={{
            backgroundColor: randomColor(),
          }}
        >
          <div>
            <p className="fs-6 fw-bold text-light">{name}</p>
            <p className="fs-5 fw-bold text-white">{number}</p>
          </div>
          <div>
            <div className=" p-2 rounded-3 text-secondary bg-light">{icon}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

const DashboardPage = () => {
 
  return (
    <PrivateRoute>
      <main className="p-6  space-y-6 my-1">
        <section className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-6 gy-3 p-3">
          <NewCard
            name="Orders"
            number={"145"}
            path="orders"
            icon={<BsCartCheck size={24} />}
          />
          <NewCard
            name="Customers"
            path="customers"
            number={"145"}
            icon={<FaUsers size={24} />}
          />
          <NewCard
            name="Sell"
            number={"145"}
            path="sell"
            icon={<AiOutlineDollarCircle size={24} />}
          />
          <NewCard
            name="Products"
            number={"145"}
            path="products"
            icon={<BsCardChecklist size={24} />}
          />
          <NewCard
            name="Slide"
            number={"145"}
            path="slide"
            icon={<BsSliders size={24} />}
          />
          <NewCard
            name="Press Releases"
            number={"145"}
            path="press-releases"
            icon={<MdOutlineUpdate size={24} />}
          />
          <NewCard
            name="Gallery"
            number={"145"}
            path="gallery"
            icon={<RiGalleryFill size={24} />}
          />
          <NewCard
            name="Carrier"
            number={"145"}
            path="carrier"
            icon={<FiTarget size={24} />}
          />
        </section>

         <div className="px-3">
         <CustomTable tableName={"Users"} />
         </div>
      </main>
    </PrivateRoute>
  );
};

export default DashboardPage;
DashboardPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
