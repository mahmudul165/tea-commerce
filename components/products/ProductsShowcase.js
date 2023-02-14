import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
// import useAuth from "../../hook/useAuth";
// import { useCart } from "react-use-cart";
function ProductsShowcase({ data }) {
  // const { BuyNow } = useAuth();
  // const { addItem } = useCart();
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
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="container my-4"
      style={{ backgroundColor: "#ffddde" }}
    >
      <motion.div variants={stagger} className="row    text-center my-2  py-3 ">
        {data ? (
          data.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-3  my-2 py-1">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card border-0 "
              >
                <Link href={`productList/${product.id}`} passHref>
                  {product.image_one ? (
                    <motion.img
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={product.image_one}
                      alt="E-COMMERCE  products"
                      className="card-img-top  p-2 "
                      width={336}
                      height={230}
                      layout="responsive"
                    />
                  ) : (
                    <Skeleton height={200} />
                  )}
                </Link>

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
                      className="card-title fs-6 fw-bolder"
                      style={{
                        color: "#000000",
                        border: 0,
                      }}
                    >
                      {product.title}
                    </h6>{" "}
                  </motion.div>
                  <small
                    className="text-center fs-6 fw-bold  "
                    style={{
                      color: "#FF0099",
                      border: 0,
                    }}
                  >
                    ৳ {product.price}
                  </small>
                </div>
                {/* test button */}
                <div className="p-2 m-2 d-flex align-items-center justify-content-center">
                  <button
                    type="button"
                    className="btn   btn-block btn-sm bg-light p-1 m-1 me-2  "
                    style={{
                      backgroundColor: "#ffff",
                      color: "#FF0099",
                      border: 0,
                    }}
                    // onClick={() => addItem(product)}
                  >
                    <i className="fas fa-shopping-cart me-1 py-1"></i>Add To
                    Cart
                  </button>
                  <button
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
                  </button>
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
  );
}

export default ProductsShowcase;
