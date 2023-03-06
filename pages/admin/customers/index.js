import CustomTable from "@/components/admin/common/CustomTable";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";

function CustomersHomePage() {
  return (
    <PrivateRoute>
      <div className="d-flex justify-content-between my-3">
        <h2>Total Customers 145</h2>

        <div></div>
      </div>

      <CustomTable tableName="Customers Table" />
    </PrivateRoute>
  );
}

export default CustomersHomePage;

CustomersHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
