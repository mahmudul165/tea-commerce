import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable from "@/components/admin/common/CustomTable";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { MdAddCircleOutline } from "react-icons/md";

export const AddProductFrom = () => {
  return (
    <Form
      id="contact-form"
      name="contact-form p-2"
      action="mail.php"
      method="POST"
    >
      <FloatingLabel
        controlId="floatingInputGrid"
        label="Enter Your Email"
        className="mb-4"
      >
        <Form.Control type="email" placeholder="Enter Your Email" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputGrid"
        label="Enter Your Name"
        className="mb-4"
      >
        <Form.Control type="text" placeholder="Enter Your Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputGrid"
        label="Phone Number"
        className="mb-4"
      >
        <Form.Control type="number" placeholder="Phone Number" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputGrid" label="Address">
        <Form.Control type="text" placeholder="Address" />
      </FloatingLabel>
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
        <AddProductFrom />
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
