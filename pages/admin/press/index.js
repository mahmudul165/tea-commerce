import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import { PressTableTH } from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import { usePressCollectionQuery } from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

const submitHandler = async (data) => {
  console.log({ data });
  try {
    await axios.post("https://crabby-pocketbook-eel.cyclic.app/api/v1/press", {
      ...data,
    });
    toast.success("Press releases post successfully added!");
  } catch (err) {
    toast.error(getError(err));
  }
};

const AddPressFrom = () => {
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
            placeholder="Past image URL ?"
            {...register("image", {
              pattern: {
                value: acceptPattern,
                message: "Invalid input ",
              },

              required: "Past Image URL",
            })}
            onChange={handleInputChange}
            autoFocus
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </CustomFloatingLabel>
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
        <CustomFloatingLabel labelName="body">
          <Form.Control
            as="textarea"
            className="py-5"
            rows={5}
            placeholder="Enter description..."
            {...register("body", {
              maxLength: {
                value: 550,
                message: "Input too large!, maximum length 550",
              },
            })}
          />

          {errors.body && <p className="text-danger">{errors.body.message}</p>}
        </CustomFloatingLabel>
        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Add Press Releases
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function PressHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const { data: press, isLoading, isError } = usePressCollectionQuery();
  const { deleteData, apiUrl } = useAuth();

  console.log({ press });

  return (
    <PrivateRoute>
      <CustomModal
        name="Add"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddPressFrom />
      </CustomModal>
      <PageHeader
        name="Press Releases"
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
              {PressTableTH &&
                PressTableTH.map((header, index) => (
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

            {press &&
              press.map((el, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>

                  <td>{el?.title}</td>

                  <td>
                    <img src={el?.image} width="50px" alt={el.altText} />
                  </td>
                  <td>
                    {el?.body?.substring(0, 10)}
                    {el?.body?.length > 15 ? " More..." : ""}
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
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.press}/${el?._id}`
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
export default PressHomePage;
PressHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
