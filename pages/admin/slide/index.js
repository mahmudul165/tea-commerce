import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import axios from "axios";
import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdAddCircleOutline } from "react-icons/md";
import { toast } from "react-toastify";

const submitHandler = async (data) => {
  console.log({ data });

  try {
    await axios.post("/url", {
      // data
    });
  } catch (err) {
    toast.error(getError(err));
  }
};

export const AddSlideFrom = () => {
  const [imageUrl, setImageUrl] = useState("");
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
        {imageUrl && <img src={imageUrl} alt="Preview" width="280px" />}
      </div>
      <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
        <CustomFloatingLabel labelName="Past Image URL">
          <Form.Control
            type="text"
            name="imageURL"
            autoFocus
            placeholder="Past image URL ?"
            {...register("imageURL", {
              pattern: {
                value: acceptPattern,
                message: "Invalid input ",
              },

              required: "Past Image URL",
            })}
            onChange={handleInputChange}
          />
          {errors.imageURL && (
            <p className="text-danger">{errors.imageURL.message}</p>
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
            Add Product
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function SlideHomePage() {
  const [modalShow, setModalShow] = useState(false);

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

      <CustomTable tableName="Slide Table" />
    </PrivateRoute>
  );
}

export default SlideHomePage;

SlideHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
