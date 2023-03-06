import PrivateRoute from "@/components/PrivateRoute";
import Link from "next/link";
import {
  AiOutlineDelete,
  AiOutlineDollarCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";
import CartItemsModal from "@/components/common/CartItemsModal";
import CustomTable from "@/components/admin/common/CustomTable";

function randomColor() {
  const colors = ["#e49e48", "#59330e", "#8DFF9B", "#B871C7", "#5A94F5"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const NewCard = ({ name, path, bgColor, number, icon }) => {
  return (
    <>
      <Link href={`${path ? path : "/dashboard"}`}>
        <div className="d-flex justify-content-between p-3 border border-1 rounded-3 shadow-sm">
          <div>
            <p className="fs-6 fw-bold text-muted">{name}</p>
            <p className="fs-5 fw-bold">{number}</p>
          </div>
          <div>
            <div
              className=" p-2 rounded-3 text-white"
              style={{
                backgroundColor: randomColor(),
              }}
            >
              {icon}
            </div>
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
            number={"145"}
            icon={<FaUsers size={24} />}
          />
          <NewCard
            name="Sell"
            number={"145"}
            icon={<AiOutlineDollarCircle size={24} />}
          />
          <NewCard
            name="Products"
            number={"145"}
            path="products"
            icon={<BsCartCheck size={24} />}
          />
        </section>

        <CustomTable tableName={"Users"} />
      </main>
    </PrivateRoute>
  );
};

export default DashboardPage;
DashboardPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
