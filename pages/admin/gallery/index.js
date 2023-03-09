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
  const { url, category } = data;
  console.log({ url, category });
  try {
    await axios.post("https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery", {
      url, category 
    });
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
          />
          {errors.url && (
            <p className="text-danger">{errors.url.message}</p>
          )}
        </CustomFloatingLabel>
        <p className="fw-bold fs-5">Category</p>

        {['all', 'garden', 'factory', 'office'].map((el) => (
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
            className=" text-white  cus-bg-secondary  mt-3 w-100"
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
