import SectionTitle from "@/components/common/SectionTitle";
import ProductDetailsModal from "@/components/common/ProductDetailsModal";
import { motion } from "framer-motion";
import React from "react";
import { Button, Carousel, Modal, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container  my-2">
      <ProductDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <h1 className="fs-4 fw-bolder my-2 mb-2" style={{color:'#59330E'
  }}>Our Products</h1>  */}
      <SectionTitle title="Our Products" />
      <Carousel>
        {products.map((product, index) => {
          if (index % 4 === 0) {
            return (
              <Carousel.Item key={product.id}>
                <Row>
                  {products.slice(index, index + 4).map((product) => (
                    <div
                      key={product.id}
                      className="col-sm-6 col-md-3  my-2 py-1"
                    >
                      <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="card border-0 "
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
                            <h6
                              className="card-title ms-2 mt-2 fs-5 fw-bolder"
                              style={{
                                color: "#000000",
                                border: 0,
                              }}
                            >
                              {product.name?.slice(0, 20)}
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
                  ))}
                </Row>
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
