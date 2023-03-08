import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import { CustomFloatingLabel } from "@/components/admin/common/Inputes";
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
    await axios.post("/url", {
      // data
    });
  } catch (err) {
    toast.error(getError(err));
  }
};
const AddJobPostFrom = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
      <div className="row">
        <div className="col-md-6">
          <CustomFloatingLabel labelName="Job Title ">
            <Form.Control
              type="text"
              autoFocus
              placeholder="Enter job title ?"
              {...register("jobTitle", {
                required: "Please title is  required",
                maxLength: {
                  value: 30,
                  message: "Input too large !, maximum length 30",
                },
              })}
            />
            {errors.jobTitle && (
              <p className="text-danger">{errors.jobTitle.message}</p>
            )}
          </CustomFloatingLabel>

          <CustomFloatingLabel labelName="Location ">
            <Form.Control
              type="text"
              placeholder="Enter location ?"
              {...register("location", {
                required: "Please add location  required",
                maxLength: {
                  value: 100,
                  message: "Input too large !, maximum length 100",
                },
              })}
            />
            {errors.location && (
              <p className="text-danger">{errors.location.message}</p>
            )}
          </CustomFloatingLabel>
          <CustomFloatingLabel labelName="Dateline ">
            <Form.Control
              type="text"
              placeholder="Enter dateline ?"
              {...register("dateline", {
                required: "Please add dateline  required",
                maxLength: {
                  value: 50,
                  message: "Input too large !, maximum length 50",
                },
              })}
            />
            {errors.dateline && (
              <p className="text-danger">{errors.dateline.message}</p>
            )}
          </CustomFloatingLabel>
        </div>
        <div className="col-md-6">
          <CustomFloatingLabel labelName="Vacancy ">
            <Form.Control
              type="text"
              placeholder="Enter slide title ?"
              {...register("vacancy", {
                required: "Please title is  required",
                maxLength: {
                  value: 5,
                  message: "Input too large !, maximum length 5",
                },
              })}
            />
            {errors.vacancy && (
              <p className="text-danger">{errors.vacancy.message}</p>
            )}
          </CustomFloatingLabel>

          <CustomFloatingLabel labelName="Salary ">
            <Form.Control
              type="text"
              placeholder="Enter location ?"
              {...register("salary", {
                required: "Please add salary  required",
                maxLength: {
                  value: 50,
                  message: "Input too large !, maximum length 50",
                },
              })}
            />
            {errors.salary && (
              <p className="text-danger">{errors.salary.message}</p>
            )}
          </CustomFloatingLabel>
          <CustomFloatingLabel labelName="Time">
            <Form.Control
              type="time"
              placeholder="Enter Time ?"
              {...register("time", {
                required: "Please add time  required",
                maxLength: {
                  value: 50,
                  message: "Input too large !, maximum length 50",
                },
              })}
            />
            {errors.time && (
              <p className="text-danger">{errors.time.message}</p>
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
          Add Job Post
        </MyButton>
      </div>
    </Form>
  );
};
function CarrierHomePage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <PrivateRoute>
      <CustomModal
        name="Carrier"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddJobPostFrom />
      </CustomModal>

      <PageHeader
        name="Carrier"
        btn={
          <AddButton
            name="Add"
            callFun={() => {
              setModalShow(true);
            }}
          />
        }
      />

      <CustomTable tableName="Carrier Table" />
    </PrivateRoute>
  );
}

export default CarrierHomePage;

CarrierHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
