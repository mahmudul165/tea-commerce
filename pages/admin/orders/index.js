import CustomTable from "@/components/admin/common/CustomTable";
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
      <div className="card my-4 py-2 border border-white rounded bg-light">
      <div className="p-1   m-1 d-flex justify-content-between ">
        <h2>Orders 145</h2>

        <div>
          <AddButton name="Add" />
        </div>
      </div>
      </div>

     <div className="card">
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
