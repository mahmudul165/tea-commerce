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
  const { imageURL, radioInput } = data;

  try {
    await axios.post("/url", {
      // data
    });
  } catch (err) {
    toast.error(getError(err));
  }
};

const AddGalleryFrom = () => {
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
            placeholder="Image url "
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
        <p className="fw-bold fs-5">Category</p>

        {["All", "Garden", "Factory", "Office"].map((el) => (
          <Form.Check
            key={el}
            label={el}
            name="group1"
            value={el}
            type="radio"
            id={el}
            {...register("radioInput", { required: "Checked input required" })}
          />
        ))}
        {errors.radioInput && (
          <p className="text-danger">{errors.radioInput.message}</p>
        )}
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
function GalleryHomePage() {
  const [modalShow, setModalShow] = useState(false);
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
      <CustomTable tableName="Gallery Table" />
    </PrivateRoute>
  );
}
export default GalleryHomePage;
GalleryHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
