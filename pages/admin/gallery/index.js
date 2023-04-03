import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import { GalleryTableTH } from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import FetchData from "@/components/admin/common/FetchData";
import { dateFormat } from "@/components/admin/common/Fomater";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import { GALLERY_ENDPOINT, useGalleryCollectionQuery } from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

const submitHandler = async (data) => {
  console.log({ data });
  const { url, category } = data;
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
const UpdateGalleryFrom = ({ updateId }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (updateId !== null) {
      FetchData(updateId, GALLERY_ENDPOINT, setFormData);
      //console.log("id", `${GALLERY_ENDPOINT}/${updateId}`);
    }
  }, [updateId]);

  console.log({ formData });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const updateHandler = async () => {
    try {
      await axios.patch(`${GALLERY_ENDPOINT}/${updateId}`, {
        ...formData,
      });
      toast.success("Update successfully!");
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="text-center  ele-center   mb-3  card border-0">
        <img src={formData?.url} alt="Preview" width="280px" />
      </div>
      <Form method="POST" onSubmit={handleSubmit(updateHandler)}>
        <CustomFloatingLabel labelName="Past Image URL">
          <Form.Control
            type="text"
            placeholder="Image url "
            value={formData?.url}
            {...(formData?.url === ""
              ? {
                  ...register("url", {
                    pattern: {
                      value: acceptPattern,
                      message: "Invalid input ",
                    },

                    required: "Past Image URL",
                  }),
                }
              : {
                  ...register("url", {
                    pattern: {
                      value: acceptPattern,
                      message: "Invalid input ",
                    },
                  }),
                })}
            onChange={handleInputChange}
          />
          {errors.url && <p className="text-danger">{errors.url.message}</p>}
        </CustomFloatingLabel>
        <p className="fw-bold fs-5">Category</p>

        {["all", "garden", "factory", "office"].map((el) => (
          <Form.Check
            key={el}
            // label={el}
            label={el.charAt(0).toUpperCase() + el.slice(1)}
            type="radio"
            id={el}
            value={el}
            checked={el === formData?.category}
            {...(formData?.category === ""
              ? {
                  ...register("category", {
                    required: "Checked input required",
                  }),
                }
              : { ...register("category") })}
            onChange={handleInputChange}
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
            Update Gallery
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function GalleryHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [updateFormModal, setUpdateFormModal] = useState(false);
  const [getId, setId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const { deleteData, apiUrl } = useAuth();
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
      <CustomModal
        name="Update"
        show={updateFormModal}
        onHide={() => setUpdateFormModal(false)}
      >
        <UpdateGalleryFrom updateId={getId} />
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
              <option value="factory">Factory</option>
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
                      <span
                        onClick={() => {
                          setId(img._id), setUpdateFormModal(true);
                        }}
                      >
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
