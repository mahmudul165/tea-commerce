import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable, {
  GalleryTableTH,
} from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import { useGalleryCollectionQuery } from "@/lib/hook/useApi";
import axios from "axios";
import { useState } from "react";
import { Card, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { dateFormat } from "@/components/admin/common/Fomater";
import useAuth from "@/lib/hook/useAuth";

const submitHandler = async (data) => {
  console.log({ data });
  const { url, category } = data;
  console.log({ url, category });
  try {
    await axios.post(
      "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery",
      {
        url,
        category,
      }
    );
    toast.success("Gallery successfully added!");
  } catch (err) {
    toast.error(getError(err));
  }
};

const AddGalleryFrom = () => {
  const [url, setImageUrl] = useState("");

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="text-center  ele-center   mb-3  card border-0">
        {url && <img src={url} alt="Preview" width="280px" />}
      </div>
      <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
        <CustomFloatingLabel labelName="Past Image URL">
          <Form.Control
            type="text"
            name="url"
            placeholder="Image url "
            {...register("url", {
              pattern: {
                value: acceptPattern,
                message: "Invalid input ",
              },

              required: "Past Image URL",
            })}
            onChange={handleInputChange}
            autoFocus
          />
          {errors.url && <p className="text-danger">{errors.url.message}</p>}
        </CustomFloatingLabel>
        <p className="fw-bold fs-5">Category</p>

        {["all", "garden", "factory", "office"].map((el) => (
          <Form.Check
            key={el}
            // label={el}
            label={el.charAt(0).toUpperCase() + el.slice(1)}
            name="group1"
            value={el}
            type="radio"
            id={el}
            {...register("category", { required: "Checked input required" })}
            // style={{textTransform: 'uppercase'}}
          />
        ))}
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Add Gallery
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function GalleryHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const { deleteData,apiUrl } = useAuth();
  const { data: gallery, isLoading, isError } = useGalleryCollectionQuery();
  console.log({ gallery });

  const filteredData =
    selectedStatus === "all"
      ? gallery
      : gallery?.filter((img) => img.category === selectedStatus);

  return (
    <PrivateRoute>
      <CustomModal
        name="Add Gallery"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddGalleryFrom />
      </CustomModal>
      <PageHeader
        name="Gallery"
        btn={
          <AddButton
            name="Add"
            callFun={() => {
              setModalShow(true);
            }}
          />
        }
      />
      {/* <CustomTable tableName="Gallery Table" /> */}

      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <div className="d-flex justify-content-between my-1">
          <div>Gallery Table</div>
          <div>
            <select
              className="px-2 py-1 rounded-sm"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="office">Office</option>
              <option value="garden">Garden</option>
            </select>
          </div>
        </div>
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {GalleryTableTH &&
                GalleryTableTH.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="fs-6 fw-normal">
            {isLoading && (
              <div class="spinner-border text-center" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}

            {filteredData &&
              filteredData.map((img, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td> {dateFormat(img.createdOn)}</td>

                  <td>{img?.category}</td>

                  <td>
                    {/* <span className="bg-info p-2 fw-bold text-white rounded-lg">
                      Open
                    </span> */}
                    <img src={img.url} width="60px" />
                  </td>

                  <td className="">
                    <div className="d-flex justify-content-center gap-2">
                      <span>
                        <AiOutlineEye size={18} className="text-success" />
                      </span>
                      <span>
                        <FiEdit size={15} className="text-warning" />
                      </span>
                      <span
                        onClick={() =>
                          deleteData(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.gallery}/${img?.id}`
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
export default GalleryHomePage;
GalleryHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
