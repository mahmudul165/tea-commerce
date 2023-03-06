import React from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
function CustomTable({ data, tableName }) {
  return (
    <div>
      <p className="fs-4 fw-bold">{tableName}</p>
      <div className="border rounded-3 p-4 cus-table shadow-sm">
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col"> Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-2  fs-6 fw-normal ">
              <td className="">1</td>
              <td>Md Kamal</td>
              <td>examle@gmail.com</td>
              <td>
                <span className="bg-danger p-2 rounded-3 text-white ">
                  Pending
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
    </div>
  );
}

export default CustomTable;
