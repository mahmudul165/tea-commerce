import { MyButton } from "@/components/common/Buttons";

import Image from "next/image";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

import demoPic from "public/products/p-1.jpg";
import IconWithBackground from "@/components/common/IconWithBackground";
import { FloatingLabel, Form } from "react-bootstrap";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
const CartItem = ({ item }) => {
  return (
    <>
      <div className="">
        <div className="row ele-center ">
          <div className="col-3">
            <div className="border p-2 rounded ele-center w-75">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uxkKiX-wGly90GY9jHmIUew80yVpI6jzAg&usqp=CAU"
                alt="Product"
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="col-8">
            <div>
              <p className="fs-6 fw-bold cus-color-secondary my-3">
                Sultan Tea CD 500gm
              </p>
              <div className="d-flex gap-4">
                <p className="fs-4 p-2">TK 255</p>

                <div className="p-1 border  rounded">
                  <button
                    className="btn btn-sm  fw-bold border-end"
                    type="button"
                  >
                    <AiOutlinePlus size={22} />
                  </button>
                  <span className="fw-bold fs-6 p-2">1</span>
                  <button className="btn border-start btn-sm" type="button">
                    <AiOutlineMinus size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 ele-center">
            {" "}
            <IconWithBackground>
              <RiDeleteBin5Fill size={22} className="" />
            </IconWithBackground>
          </div>
        </div>
      </div>
      <hr className="my-4"></hr>
    </>
  );
};

const CheckOutForm = () => {
  return (
    <Form
      id="contact-form"
      name="contact-form p-2"
      action="mail.php"
      method="POST"
    >
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
      <div className="ele-center my-5">
        <MyButton
          type="submit"
          size="lg"
          className=" text-white px-5 cus-bg-secondary  w-100"
        >
          CHECKOUT
        </MyButton>
      </div>
    </Form>
  );
};
const CartItemsModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="d-flex align-items-center gap-3">
            <AiOutlineShoppingCart size={40} />
            <p className="fs-5 fw-bold">2 items</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container my-5">
          <div className="row ">
            <div className="col-12  ">
              <CartItem />
              <CartItem />

              <div className="d-flex justify-content-between my-4 ">
                <div>
                  <p className="fs-4 fw-bold">Total</p>
                </div>
                <div>
                  <p className="fs-4 fw-bold">Tk 645,00</p>
                </div>
              </div>
              <hr className="my-4  d-md-none "></hr>
            </div>
            <div className="col-12  ">
              <CheckOutForm />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CartItemsModal;
