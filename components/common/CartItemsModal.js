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
import { useCart } from "react-use-cart";

const CartItem = ({ item }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  console.log(items);
  return (
    <>
      <div className="">
        <div className="row ele-center ">
          {items.map((item, index) => (
            <>
              <div className="col-3">
                <div className="border p-2 rounded ele-center w-100">
                  <img
                    src={item?.images[0].url}
                    alt="Product"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <div className="col-8">
                <div>
                  <p className="fs-6 fw-bold cus-color-secondary my-3">
                    {/* Sultan Tea CD 500gm */}
                    {item.name}
                  </p>
                  <div className="d-flex gap-4 ">
                    <p className="fs-5 p-2">TK {item.price}</p>

                    <div className=" border  rounded ele-center ">
                      <span className=" fw-bold border-end p-1">
                        <AiOutlinePlus
                          size={20}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        />
                      </span>
                      <span className="fw-bold fs-6 p-2">{item.quantity}</span>
                      <span className=" border-start p-1">
                        <AiOutlineMinus
                          size={20}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 ele-center">
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-sm"
                >
                  <IconWithBackground>
                    <RiDeleteBin5Fill size={18} className="" />
                  </IconWithBackground>
                </button>
              </div>
            </>
          ))}
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
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

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
            <p className="fs-5 fw-bold">{totalItems} items</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container my-5">
          <div className="row ">
            <div className="col-12  ">
              <CartItem />
              {/* <CartItem /> */}

              <div className="d-flex justify-content-between my-4 ">
                <div>
                  <p className="fs-4 fw-bold">Total</p>
                </div>
                <div>
                  <p className="fs-4 fw-bold">Tk {cartTotal}</p>
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
