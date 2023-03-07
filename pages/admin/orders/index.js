import CustomTable from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

const AddButton = ({ name }) => {
  return (
    <button className="btn btn-lg fs-5 border  d-flex justify-content-between gap-4 align-items-center px-3 fw-bold cus-bg-primary text-white">
      {" "}
      <MdAddCircleOutline size={24} />
      <span>{name || "Add"}</span>
    </button>
  );
};

function OrdersHomePage() {
  return (
    <PrivateRoute>
      <PageHeader name="Orders" />

      <div className="card bg-light">
        <div className="m-3 p-2">
          <CustomTable tableName="Orders Table" />
        </div>
      </div>
    </PrivateRoute>
  );
}

export default OrdersHomePage;

OrdersHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
