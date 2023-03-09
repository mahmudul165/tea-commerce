 
import { useUserCollectionQuery } from "@/lib/hook/useApi";
import React from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const defaultHeader = ["SL", "Name", "Email"];

export const ProductTableTH = [
  "SL",
  "Created",
  "Category",
  "name",
  "Price",
  "Description",
  "Images",
  "Discount",
  "Promo",
  "Stock Status",
  "Actions",
];
export const SlideTableTH = [
  "SL",
  "Created",
  "Title",
  "Images",
  "Description",
  "Actions",
];
export const GalleryTableTH = [
  "SL",
  "Created",
  "Category",
  "Images",
  "Actions",
];
export const CarrierTableTH = [
  "SL",
  "Job Title",
  "Vacancy",
  "Location",
  "Salary",
  "Deadline",
  "Time",
  "Actions",
];
export const BusinessTableTH = ["SL", "Title", "Images", "Body", "Actions"];

function CustomTable({ tableName, headers, data }) {
  const { data:users, isLoading, isError } = useUserCollectionQuery();
   
  return (
    <>
      {/* <p className="fs-4 fw-bold">{tableName}</p> */}

      {/* <div classname="card bg-light ">
          <div classname="my-2 py-2 ">
            <div className="container my-3">
              <div className="row ">
                <div className="col m-0 p-0">
                  <div className="input-group w-25 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button className="btn btn-primary" type="button">
                     Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr>
              {headers &&
                headers.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
              {!headers &&
                defaultHeader.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
  {users && users.map((user, index) => (
    <tr key={user.id} className="my-3 p-2 fs-6 fw-normal">
      <td className="">{index + 1}</td>
      <td>{user.username.split('@')[0]}</td>
      <td>{user.username}</td>
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </>
  );
}

export default CustomTable;
