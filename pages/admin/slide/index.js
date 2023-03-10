import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable, {
  SlideTableTH,
} from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import { dateFormat } from "@/components/admin/common/Fomater";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import { useSlideCollectionQuery } from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdAddCircleOutline } from "react-icons/md";
import { toast } from "react-toastify";

const submitHandler = async (data) => {
  console.log({ data });

  try {
    await axios.post("https://crabby-pocketbook-eel.cyclic.app/api/v1/slide", {
      ...data,
    });
    toast.success("Slide successfully added!");
  } catch (err) {
    toast.error(getError(err));
  }
};

export const AddSlideFrom = () => {
  const [image, setImageUrl] = useState("");
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
        {image && <img src={image} alt="Preview" width="280px" />}
      </div>
      <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
        <CustomFloatingLabel labelName="Past Image URL">
          <Form.Control
            type="text"
            name="image"
            autoFocus
            placeholder="Past image URL ?"
            {...register("image", {
              pattern: {
                value: acceptPattern,
                message: "Invalid input ",
              },

              required: "Past Image URL",
            })}
            onChange={handleInputChange}
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </CustomFloatingLabel>

        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Title ">
              <Form.Control
                type="text"
                placeholder="Enter slide title ?"
                {...register("title", {
                  required: "Please title is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Path Name ">
              <Form.Control
                type="text"
                placeholder="Enter path name?"
                {...register("pathName", {
                  required: "Please path name required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.pathName && (
                <p className="text-danger">{errors.pathName.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Alt Text ">
              <Form.Control
                type="text"
                placeholder="Enter alt text ? "
                {...register("altText", {
                  maxLength: {
                    value: 20,
                    message: "Input too large !, maximum length 20",
                  },
                })}
              />
              {errors.altText && (
                <p className="text-danger">{errors.altText.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Description">
              <Form.Control
                type="text"
                placeholder="Enter description ?"
                {...register("description", {
                  maxLength: {
                    value: 250,
                    message: "Input too large !, maximum length 250",
                  },
                })}
              />
              {errors.description && (
                <p className="text-danger">{errors.description.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
        </div>

        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100"
          >
            Add Slide
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function SlideHomePage() {
   
  const [modalShow, setModalShow] = useState(false);
  const { data: slide, isLoading, isError } = useSlideCollectionQuery();
  const {   deleteData } = useAuth();
  console.log({ slide });

  return (
    <PrivateRoute>
      <CustomModal
        name="Add Slide"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddSlideFrom />
      </CustomModal>

      <PageHeader
        name="Slide"
        btn={
          <AddButton
            name="Add"
            callFun={() => {
              setModalShow(true);
            }}
          />
        }
      />

      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {SlideTableTH &&
                SlideTableTH.map((header, index) => (
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

            {slide &&
              slide.map((el, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>

                  <td>{el.title}</td>
                  <td>
                    {/* <span className="bg-info p-2 fw-bold text-white rounded-lg">
                      Open
                    </span> */}
                    <img src={el.image} width="60px" alt={el.altText} />
                  </td>
                  <td>{el.pathName}</td>
                  <td>{el.description}</td>

                  <td className="">
                    <div className="d-flex justify-content-center gap-2">
                      <span>
                        <AiOutlineEye size={18} className="text-success" />
                      </span>
                      <span>
                        <FiEdit size={15} className="text-warning" />
                      </span>
                      <span onClick={() => deleteData(`https://crabby-pocketbook-eel.cyclic.app/api/v1/slide/${el?._id}`)}>
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

export default SlideHomePage;

SlideHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
