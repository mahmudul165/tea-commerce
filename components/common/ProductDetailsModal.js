import { MyButton } from "@/components/common/Buttons";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import demoPic from "public/products/p-1.jpg";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useCart } from "react-use-cart";
const ProductDetailsModal = (props) => {
  console.log("product details data", props?.data);
  const { getProductId } = props;
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    if (getProductId !== null) {
      axios
        .get(
          `https://crabby-pocketbook-eel.cyclic.app/api/v1/product/${getProductId}`
        )
        .then((res) => {
          setSingleProduct(res.data);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [getProductId]);

  //console.log({ singleProduct });

  const { addItem } = useCart();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row my-4">
          {
            //singleProduct  &&
          }
          <div className="col-md-4">
            <div className="w-100 p-5 ele-center border rounded ">
              <img
                src={singleProduct?.images[0].url}
                alt={singleProduct?.images[0].altText}
                width={140}
                height={100}
              />
            </div>

            <div className="d-flex justify-content-between p-2">
              {singleProduct?.images.map((el, index) => (
                <div key={index} className="border p-2">
                  <img src={el?.url} alt={el?.altText} width={50} height={50} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8 ">
            <div>
              <h2 className="fs-5 fw-bold cus-color-secondary ">
                {singleProduct?.name}
              </h2>
              <p className="fs-5 ">Tk {singleProduct?.price}</p>

              <p className="mt-4 text-justify">{singleProduct?.description}</p>

              <Link href="#">
                <div className="cus-color-secondary mt-2 d-flex gap-3  algin-items-center">
                  <p className="cus-color-secondary">View Product</p>

                  <FaLongArrowAltRight className="mt-1" />
                </div>
              </Link>

              <div className="d-flex gap-4  mt-4 ">
                <div className=" border rounded ele-center ">
                  <span className=" fw-bold border-end p-1  ">
                    <AiOutlinePlus size={20} />
                  </span>
                  <span className="fw-bold fs-6 p-2">1</span>
                  <span className="border-start p-1">
                    <AiOutlineMinus size={20} />
                  </span>
                </div>
                <div>
                  <MyButton
                    type="submit"
                    size="md"
                    className=" text-white px-3 fs-6 cus-bg-secondary"
                    onClick={() => addItem(product)}
                  >
                    ADD TO CART
                  </MyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetailsModal;
