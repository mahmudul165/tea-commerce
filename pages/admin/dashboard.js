import PrivateRoute from "@/components/PrivateRoute";
import Link from "next/link";
import {
  AiOutlineDelete,
  AiOutlineDollarCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { BsCardChecklist, BsCartCheck, BsSliders } from "react-icons/bs";
import { FcShipped } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";

import { FaUsers } from "react-icons/fa";
import { FiEdit, FiTarget } from "react-icons/fi";
import { useEffect, useState } from "react";
import CartItemsModal from "@/components/common/CartItemsModal";
import CustomTable from "@/components/admin/common/CustomTable";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
import useAuth from "@/lib/hook/useAuth";
import {
  useCarrierCollectionQuery,
  useGalleryCollectionQuery,
  useOrderCollectionQuery,
  useProductCollectionQuery,
  useSlideCollectionQuery,
} from "@/lib/hook/useApi";

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
  const { data: orders } = useOrderCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const shippedOrders = orders?.filter((order) => order.status === "shipped");
  const deliveredOrders = orders?.filter(
    (order) => order.status === "delivered"
  );
  const cancelOrders = orders?.filter((order) => order.status === "cancelled");
  const { data: products } = useProductCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: slides } = useSlideCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: gallery } = useGalleryCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  const { data: carrier } = useCarrierCollectionQuery({
    cacheTime: 60,
    staleTime: 300000,
  });
  // Calculate total sales, total number of items, and total number of unique items for delivered orders only
let totalSales = 0;
let totalItems = 0;
let totalUniqueItems = 0;
let productCounts = {};
orders?.forEach(order => {
  if (order?.status === "delivered") {
    totalSales += order.cartTotal;
    totalItems += order.totalItems;
    totalUniqueItems += order.totalUniqueItems;
  }
});

console.log(`Total sales for delivered orders: $${totalSales}`);
console.log(`Total items for delivered orders: ${totalItems}`);
console.log(`Total unique items for delivered orders: ${totalUniqueItems}`);
  return (
    <PrivateRoute>
      <main className="p-6  space-y-6 my-1">
        <section className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-6 gy-3 p-3">
          <NewCard
            name="Products"
            number={products?.products?.length || 0}
            path="products"
            icon={<BsCardChecklist size={24} />}
          />
          <NewCard
            name="Orders"
            number={orders?.length}
            path="orders"
            icon={<BsCartCheck size={24} />}
          />
          <NewCard
            name="Shipped Orders"
            number={shippedOrders?.length || 0}
            path="orders"
            icon={<FcShipped size={24} />}
          />

          {/* <NewCard
            name="Customers"
            path="customers"
            number={"145"}
            icon={<FaUsers size={24} />}
          /> */}
          <NewCard
            name="delivered orders"
            number={deliveredOrders?.length || 0}
            path="orders"
            icon={<AiOutlineDollarCircle size={24} />}
          />

          <NewCard
            name="Cancel Orders"
            number={cancelOrders?.length || 0}
            path="orders"
            icon={<GiCancel size={24} />}
          />
          <NewCard
            name="Sell"
            number={`${totalSales} tk`|| 0}
            path="sell"
            icon={<AiOutlineDollarCircle size={24} />}
          />

          <NewCard
            name="Slide"
            number={slides?.length}
            path="slide"
            icon={<BsSliders size={24} />}
          />
          {/* <NewCard
            name="Press Releases"
            number={"145"}
            path="press-releases"
            icon={<MdOutlineUpdate size={24} />}
          /> */}
          <NewCard
            name="Gallery"
            number={gallery?.length}
            path="gallery"
            icon={<RiGalleryFill size={24} />}
          />
          <NewCard
            name="Carrier"
            number={carrier?.length}
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
