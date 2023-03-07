import CustomTable from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";

function SellHomePage() {
  return (
    <PrivateRoute>
      <PageHeader name="Sell" />

      <CustomTable tableName="Sell Table" />
    </PrivateRoute>
  );
}

export default SellHomePage;

SellHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
