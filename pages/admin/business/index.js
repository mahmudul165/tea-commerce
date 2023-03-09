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
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const submitHandler = async (data) => {
  console.log({ data });
  try {
    await axios.post("https://crabby-pocketbook-eel.cyclic.app/api/v1/business", {
       ...data
    });  toast.success("Business Post successfully added!");
  } catch (err) {
    toast.error(getError(err));
  }
};

const AddBusinessFrom = () => {
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
            className=" text-white  cus-bg-secondary  mt-3 w-100"
          >
            Add Business
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function BusinessHomePage() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <PrivateRoute>
      <CustomModal
        name="Add"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddBusinessFrom />
      </CustomModal>
      <PageHeader
        name="Business"
        btn={
          <AddButton
            name="Add"
            callFun={() => {
              setModalShow(true);
            }}
          />
        }
      />
      <CustomTable tableName="Business Table" />
    </PrivateRoute>
  );
}
export default BusinessHomePage;
BusinessHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
