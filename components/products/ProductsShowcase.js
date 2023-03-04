import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import useAuth from "../../hook/useAuth";
import { useCart } from "react-use-cart";
import ProductDetailsModal from "../common/ProductDetailsModal";
import { useState } from "react";
function ProductsShowcase({ data }) {
  // const { BuyNow } = useAuth();
  const [modalShow, setModalShow] = useState(false);

  const { addItem } = useCart();
  // Our custom easing
  let easing = [0.6, -0.05, 0.01, 0.99];
  //console.log("my data", data);
  // animate: defines animation
  // initial: defines initial state of animation or stating point.
  // exit: defines animation when component exits

  // Custom variant
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <ProductDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        // data={data}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="container my-4 p-3 bg-light"
        // style={{ backgroundColor: "#ffddde" }}
      >
        <motion.div variants={stagger} className="row     my-2  py-3 ">
          {data ? (
            data?.products?.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-3  my-2 py-1">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card border-0 "
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  {/* <Link href={`shop/${product.id}`} passHref> */}
                  {product.images ? (
                    <motion.img
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={product?.images[0]?.url}
                      alt="E-COMMERCE  products"
                      className="card-img-top  p-3 m-1"
                      width={336}
                      height={230}
                      layout="responsive"
                    />
                  ) : (
                    <Skeleton height={200} />
                  )}
                  {/* </Link> */}

                  {/* <Image
                    src={sunset1}
                    alt="Sunset"
                    width={600}
                    height={450}
                    layout="responsive"
                   placeholder="blur"
                    blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
                  /> */}

                  <div className="card-body p-0">
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      className="title"
                    >
                      <h6
                        className="card-title ms-2 my-2 fs-6 fw-bolder"
                        style={{
                          color: "#000000",
                          border: 0,
                        }}
                      >
                        {product.name?.slice(0, 15)}
                      </h6>{" "}
                    </motion.div>
                  </div>
                  {/* test button */}
                  <div className=" p-2 mx-2 d-flex justify-content-between">
                    <p
                      className="text-center fs-6 fw-bold  "
                      style={{
                        // color: "#FF0099",
                        border: 0,
                      }}
                    >
                      ৳ {product.price}
                    </p>
                    <button
                      type="button"
                      className="btn ml-1 px-2 btn-block btn-sm text-white   fw-bold  me-2  "
                      style={{
                        backgroundColor: "#59330E",
                        // color: "#FF0099",
                        border: 0,
                      }}
                      onClick={() => addItem(product)}
                    >
                      <i className="fas fa-shopping-cart me-1 py-1"></i>
                      Add To Cart
                    </button>
                    {/* <button
                    type="button"
                    className="btn   btn-block btn-sm bg-light p-1 m-1 ms-2  "
                    style={{
                      backgroundColor: "#ffff",
                      color: "#FF0099",
                      border: 0,
                    }}
                    // onClick={BuyNow}
                  >
                    <i className="fas fa-bolt me-1 py-1"></i>Buy Now
                  </button> */}
                  </div>
                </motion.div>
              </div>
            ))
          ) : (
            <div className="row    text-center my-2 py-3 ">
              <div className="col-sm-12 col-md-3 pe-2  ">
                <div>
                  <Skeleton height={250}>
                    <div className="d-flex">
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                    </div>{" "}
                  </Skeleton>
                  <div>
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <Skeleton height={30} width={180} />{" "}
                    </div>
                    <Skeleton height={30} width={250} />
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 pe-2  ">
                <div>
                  <Skeleton height={250}>
                    <div className="d-flex">
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                    </div>{" "}
                  </Skeleton>
                  <div>
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <Skeleton height={30} width={180} />{" "}
                    </div>
                    <Skeleton height={30} width={250} />
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 pe-2  ">
                <div>
                  <Skeleton height={250}>
                    <div className="d-flex">
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                    </div>{" "}
                  </Skeleton>
                  <div>
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <Skeleton height={30} width={180} />{" "}
                    </div>
                    <Skeleton height={30} width={250} />
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 pe-2  ">
                <div>
                  <Skeleton height={250}>
                    <div className="d-flex">
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                      <Skeleton
                        height={30}
                        width={90}
                        borderRadius={10}
                        highlightColor={"red"}
                      />
                    </div>{" "}
                  </Skeleton>
                  <div>
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <Skeleton height={30} width={180} />{" "}
                    </div>
                    <Skeleton height={30} width={250} />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default ProductsShowcase;
