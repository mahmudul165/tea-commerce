import CustomTable from "@/components/admin/common/CustomTable";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";

function SellHomePage() {
  return (
    <PrivateRoute>
      <div className="d-flex justify-content-between my-3">
        <h2>Total Sell 145</h2>

        <div></div>
      </div>

      <CustomTable tableName="Sell Table" />
    </PrivateRoute>
  );
}

export default SellHomePage;

SellHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
