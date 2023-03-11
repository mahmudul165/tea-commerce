import {
  ContactsTableTH,
  OrdersTableTH,
} from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import axios from "axios";
import {
  MdCancel,
  MdOutlineDone,
  MdOutlineLocalShipping,
} from "react-icons/md";

import { dateFormat, trackStatus } from "@/components/admin/common/Fomater";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FaHandHoldingWater } from "react-icons/fa";
import useAuth from "@/lib/hook/useAuth";
import {
  useContactCollectionQuery,
  useOrderCollectionQuery,
} from "@/lib/hook/useApi";
function OrdersHomePage() {
  const { orderStatus, deleteData,apiUrl } = useAuth();
  const { data: contacts } = useContactCollectionQuery();

  return (
    <PrivateRoute>
      <PageHeader name="CustomerQuery" />

      {/* <CustomTable tableName="Orders Table" headers={OrdersTableTH} /> */}
      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {ContactsTableTH &&
                ContactsTableTH.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="fs-6 fw-normal">
            {contacts &&
              contacts.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row?.name}</td>
                  <td>{row?.email}</td>
                  <td>{row?.phone}</td>
                  <td>{row?.message}</td>

                  <td>
                    <div className="d-flex justify-content-center gap-2 position-relative">
                      <span>
                        <AiOutlineEye size={18} className="text-success" />
                      </span>
                      <span>
                        <FaHandHoldingWater
                          size={18}
                          className="text-primary"
                        />
                      </span>

                      <span
                        onClick={() =>
                          deleteData(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.contact}/${row?._id}`
                          )
                        }
                      >
                        <AiOutlineDelete size={16} className="text-danger" />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
}

export default OrdersHomePage;

OrdersHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
