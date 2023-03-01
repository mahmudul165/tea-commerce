import ProductDetailsModal from "@/components/common/ProductDetailsModal";
import SectionTitle from "@/components/common/SectionTitle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCart } from "react-use-cart";
let easing = [0.6, -0.05, 0.01, 0.99];
 
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
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://i.ibb.co/3mYNLr4/Rectangle-1.png",
    price: 210.0,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://i.ibb.co/WsbX20H/Rectangle-2.png",
    price: 180.0,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://i.ibb.co/ry3sDTB/Rectangle-3.png",
    price: 85.0,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://i.ibb.co/DYD5Z3T/Rectangle-4.png",
    price: 885.0,
  },
  {
    id: 5,
    name: "Product 5",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
    price: 700,
  },
  // {
  //   id: 6,
  //   name: "Product 6",
  //   image:
  //     "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
  //   price: 5800,
  // },
  {
    id: 7,
    name: "Product 4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uxkKiX-wGly90GY9jHmIUew80yVpI6jzAg&usqp=CAU",
    price: 200,
  },
  {
    id: 8,
    name: "Product 5",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/g/r/green.jpg",
    price: 400,
  },
  {
    id: 9,
    name: "Product 6",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/w/b/wb_gm_premium_assam_tea_25tb-1.jpg",
    price: 50,
  },
];

const productDetails = (id) => {
  //  alert('ok')
};
const ProductCarousel = () => {
  const [modalShow, setModalShow] = useState(false);
  const [bodyWidth, setBodyWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setBodyWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { addItem } = useCart();
  return (
    <div className="container  my-2">
      <ProductDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <h1 className="fs-4 fw-bolder my-2 mb-2" style={{color:'#59330E'
  }}>Our Products</h1>  */}
      <SectionTitle title="Our Products" />
      <Carousel className="position-relative  ">
        {products.map((product, index) => {
          if (index % 4 === 0) {
            return (
              <Carousel.Item key={product.id}>
                <Row xs={2} sm={2} lg={4}>
                  {products
                    .slice(index, index + (bodyWidth < 767 ? 2 : 4))
                    .map((product) => (
                      <div key={product.id} className=" my-2 py-1 ">
                        <motion.div
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="card border-0  "
                          onClick={() => {
                            productDetails(index), setModalShow(true);
                          }}
                        >
                          {/* <Link href={`shop/${product.id}`} passHref> */}
                          {product.image ? (
                            <motion.img
                              style={{ border: "1px solid #59330E" }}
                              initial={{ x: 60, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              src={product?.image}
                              alt="E-COMMERCE  products"
                              className="card-img-top  p-5 cardImage"
                              // width={336}
                              // height={230}
                              // width={243}
                              // height={165}
                              layout="responsive"
                            />
                          ) : (
                            <Skeleton height={350} />
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
                              <p className="card-title ms-2 mt-2 fs-5 fw-bolder">
                                {product.name?.slice(0, 20)}
                              </p>{" "}
                            </motion.div>
                          </div>
                          {/* test button */}
                          <div className=" p-2 mx-2 d-flex justify-content-between gap-2">
                            <p className="text-center fs-6 fw-semibold  ">
                              ৳ {product.price}
                            </p>
                            <button
                              type="button"
                              className="btn ml-1 px-2 btn-block btn-sm text-white   fw-bold d-flex justify-content-between  "
                              style={{
                                backgroundColor: "#59330E",
                                // color: "#FF0099",
                                border: 0,
                              }}
                              onClick={() => addItem(product)}
                            >
                              <i className="fas fa-shopping-cart me-1 py-1 "></i>
                              <span className="d-xs-none d-sm-block "   onClick={() => addItem(product)}>
                                Add To Cart
                              </span>
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
                    ))}
                </Row>

                <div className="d-flex justify-content-between     ">
                  <div
                    className="position-absolute top-50 start-0  "
                    style={{
                      marginTop: "-60px",
                      marginLeft: "-12px",
                    }}
                  >
                    <button
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                      className=" p-3 cus-color-secondary border rounded shadow-lg bg-white"
                    >
                      <span class="">
                        <FaLongArrowAltLeft />
                      </span>
                    </button>
                  </div>

                  <div
                    className="position-absolute top-50 end-0  "
                    style={{
                      marginTop: "-60px",
                      marginRight: "-12px",
                    }}
                  >
                    <button
                      type="button"
                      data-bs-slide="next"
                      className="bg-white p-3 cus-color-secondary border  rounded shadow-lg d-block"
                    >
                      <span class="">
                        <FaLongArrowAltRight />
                      </span>
                    </button>
                  </div>
                </div>
              </Carousel.Item>
            );
          }
          return null;
        })}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
// import React from 'react'

// function ProductCarousel() {
//   return (
//     <div>ProductCarousel</div>
//   )
// }

// export default ProductCarousel
