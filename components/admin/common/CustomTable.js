import React from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const defaultHeader = ["SL", "Name", "Email", "Status", "Actions"];

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


        

        <table class="table text-center">
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
            {data &&
              data.map((row, index) => {
                <tr key={index}></tr>;
              })}
            <tr className="my-2  fs-6 fw-normal ">
              <td className="">1</td>
              <td>Md Kamal</td>
              <td>examle@gmail.com</td>
              <td>
                <span className="bg-danger p-2 rounded-3 text-white ">
                  Pending
                </span>
              </td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <span>
                    <AiOutlineEye size={18} className="text-success" />
                  </span>
                  <span>
                    <FiEdit size={15} className="text-warning" />
                  </span>
                  <span>
                    <AiOutlineDelete size={16} className="text-danger" />
                  </span>
                </div>
              </td>
            </tr>
            <tr className="my-2  fs-6 fw-normal ">
              <td className="">2</td>
              <td>Md Kamal</td>
              <td>examle@gmail.com</td>
              <td>
                <span className="bg-warning p-2 rounded-3 text-white ">
                  Processing
                </span>
              </td>
              <td className="">
                <div className="d-flex justify-content-center gap-2">
                  <span>
                    <AiOutlineEye size={18} className="text-success" />
                  </span>
                  <span>
                    <FiEdit size={15} className="text-warning" />
                  </span>
                  <span>
                    <AiOutlineDelete size={16} className="text-danger" />
                  </span>
                </div>
              </td>
            </tr>
            <tr className="my-2  fs-6 fw-normal ">
              <td className="">2</td>
              <td>Md Kamal</td>
              <td>examle@gmail.com</td>
              <td>
                <span className="bg-success p-2 rounded-3 text-white  ">
                  Success
                </span>
              </td>
              <td className="">
                <div className="d-flex justify-content-center gap-2">
                  <span>
                    <AiOutlineEye size={18} className="text-success" />
                  </span>
                  <span>
                    <FiEdit size={15} className="text-warning" />
                  </span>
                  <span>
                    <AiOutlineDelete size={16} className="text-danger" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomTable;
