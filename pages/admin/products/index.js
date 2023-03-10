import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import { ProductTableTH } from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import { dateFormat } from "@/components/admin/common/Fomater";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import {
  useProductCollectionQuery,
  useUserCollectionQuery,
} from "@/lib/hook/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
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
const AddProductFrom = () => {
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
        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Product Name ">
              <Form.Control
                type="text"
                placeholder="Enter product name ?"
                {...register("name", {
                  required: "Please name is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Discount Amount ">
              <Form.Control
                type="text"
                placeholder="Enter slide discountAmount ?"
                {...register("discountAmount", {
                  required: "Please Discount amount is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.discountAmount && (
                <p className="text-danger">{errors.discountAmount.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Discount Type ">
              <Form.Control
                type="text"
                placeholder="Enter slide discountType ?"
                {...register("discountType", {
                  required: "Please discount type is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.discountType && (
                <p className="text-danger">{errors.discountType.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Stock Status ">
              <Form.Control
                type="text"
                placeholder="Enter slide Stock Status ?"
                {...register("stockStatus", {
                  required: "Please Stock Status is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.stockStatus && (
                <p className="text-danger">{errors.stockStatus.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Past Image URL One">
              <Form.Control
                type="text"
                name="imageURLOne"
                placeholder="Image url "
                {...register("imageURLOne", {
                  pattern: {
                    value: acceptPattern,
                    message: "Invalid input ",
                  },

                  required: "Past Image URL",
                })}
                onChange={handleInputChange}
              />
              {errors.imageURLOne && (
                <p className="text-danger">{errors.imageURLOne.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Past Image URL Two">
              <Form.Control
                type="text"
                name="imageURLTwo"
                placeholder="Image url "
                {...register("imageURLTwo", {
                  pattern: {
                    value: acceptPattern,
                    message: "Invalid input ",
                  },
                })}
                onChange={handleInputChange}
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Past Image URL Three">
              <Form.Control
                type="text"
                name="imageURLThree"
                placeholder="Image url "
                {...register("imageURLTwo", {
                  pattern: {
                    value: acceptPattern,
                    message: "Invalid input ",
                  },
                })}
                onChange={handleInputChange}
              />
            </CustomFloatingLabel>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Category ">
              <Form.Control
                type="text"
                placeholder="Enter  category ?"
                {...register("category", {
                  required: "Please category is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.category && (
                <p className="text-danger">{errors.category.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Price ">
              <Form.Control
                type="text"
                placeholder="Enter  price ?"
                {...register("price", {
                  required: "Please price is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.price && (
                <p className="text-danger">{errors.price.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Promo Code ">
              <Form.Control
                type="text"
                placeholder="Enter slide promo code ?"
                {...register("promoCode", {
                  required: "Please promo code is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.promoCode && (
                <p className="text-danger">{errors.promoCode.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Promo Expire Date ">
              <Form.Control
                type="date"
                placeholder="Enter slide promo expire date ?"
                {...register("promoExpireAt", {
                  required: "Please promoExpireAt is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.promoExpireAt && (
                <p className="text-danger">{errors.promoExpireAt.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Image Alt Text One ">
              <Form.Control
                type="text"
                placeholder="Enter alt text  ?"
                {...register("imageAltTextOne", {
                  required: "Please alt text is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.imageAltTextOne && (
                <p className="text-danger">{errors.imageAltTextOne.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Image Alt Text Two ">
              <Form.Control
                type="text"
                placeholder="Enter alt text   ?"
                {...register("imageAltTextTwo", {})}
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Image Alt Text Three ">
              <Form.Control
                type="text"
                placeholder="Enter alt text   ?"
                {...register("imageAltTextThree", {})}
              />
            </CustomFloatingLabel>
          </div>
        </div>

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

function ProductsHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const { data: products, isLoading, isError } = useProductCollectionQuery();

  return (
    <PrivateRoute>
      <CustomModal
        name="Add Product"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddProductFrom />
      </CustomModal>

      <PageHeader
        name="Products"
        btn={
          <AddButton
            name="Add"
            callFun={() => {
              setModalShow(true);
            }}
          />
        }
      />

      {/* <CustomTable tableName="Products Table" headers={ProductTableTH} /> */}

      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {ProductTableTH &&
                ProductTableTH.map((header, index) => (
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

            {products &&
              products.products.map((product, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td> {dateFormat(product.createdOn)}</td>
                  <td>{product?.category}</td>
                  <td>{product?.name}</td>
                  <td>{product?.price}</td>
                  <td>
                    {/* <span className="bg-info p-2 fw-bold text-white rounded-lg">
                      Open
                    </span> */}
                    <img src={product.images[0].url} width="30px" />
                  </td>
                  <td>{product?.discount?.amount}</td>
                  <td>{product?.promo?.code}</td>
                  <td>{product?.quantity || "0"}</td>
                  <td>{product?.stockStatus}</td>
                  <td className="">
                    <div className="d-flex justify-content-center gap-2">
                      <span>
                        <AiOutlineEye size={18} className="text-success" />
                      </span>
                      <span>
                        <FiEdit size={15} className="text-warning" />
                      </span>
                      <span>
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

export default ProductsHomePage;

ProductsHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
