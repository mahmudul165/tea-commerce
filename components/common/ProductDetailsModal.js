import { MyButton } from "@/components/common/Buttons";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

import demoPic from "public/products/p-1.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
const ProductDetailsModal = (props) => {
  // console.log('product details data',props?.data)
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
          <div className="col-md-4">
            <div className="w-100 p-5 ele-center border rounded h-100">
              <Image src={demoPic} alt="PRODUCT" />
            </div>
          </div>
          <div className="col-md-8 ">
            <div>
              <h2 className="fs-5 fw-bold cus-color-secondary ">
                Sultan Tea CD 500gm
              </h2>
              <p className="fs-5 ">TK 255</p>

              <p className="mt-4 text-justify">
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a
                passage
              </p>

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
