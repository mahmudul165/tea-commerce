import CustomTable, {
  OrdersTableTH,
} from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import PrivateRoute from "@/components/PrivateRoute";
import axios from "axios";
import { MdAddCircleOutline, MdOutlineLocalShipping } from "react-icons/md";

import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { dateFormat, trackStatus } from "@/components/admin/common/Fomater";
import { FaHandHoldingWater } from "react-icons/fa";

function OrdersHomePage() {
  const [ordersData, setOrdersData] = useState(null);

  console.log({ ordersData });

  const getOrdersData = async () => {
    const res = await axios.get(
      "https://crabby-pocketbook-eel.cyclic.app/api/v1/order"
    );
    setOrdersData(res.data);
  };

  useEffect(() => {
    getOrdersData();
  }, []);

  return (
    <PrivateRoute>
      <PageHeader name="Orders" />

      {/* <CustomTable tableName="Orders Table" headers={OrdersTableTH} /> */}

      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {OrdersTableTH &&
                OrdersTableTH.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="fs-6 fw-normal">
            {ordersData &&
              ordersData.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{dateFormat(row?.orderDate)}</td>
                  <td>{row?.email}</td>
                  <td>{row?.name}</td>
                  <td>{row?.phone}</td>
                  <td>{row?.address}</td>
                  <td>{row?.products[0]?.name}</td>
                  <td>{row?.products[0]?.price}</td>
                  <td>{row?.totalItems}</td>
                  <td>{row?.totalUniqueItems}</td>
                  <td>{row?.cartTotal}</td>
                  <td>
                    <span
                      className={`p-2 rounded-3 text-capitalize  text-white ${trackStatus(
                        row.status
                      )} `}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td>
                    <div className="d-flex justify-content-center gap-2 position-relative">
                      <span>
                        <AiOutlineEye size={18} className="text-success" />
                      </span>
                      <span>
                        <MdOutlineLocalShipping
                          size={18}
                          className="text-warning"
                        />
                      </span>
                      <span>
                        <FaHandHoldingWater
                          size={18}
                          className="text-primary"
                        />
                      </span>

                      <span>
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
