import React, { Suspense, useRef } from "react";
// import Image from "next/image";

// import HeaderHomeImage from "/public/New folder/pexels-lil-artsy-1793035.jpg";
import { Card, Carousel, Container } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { motion, useAnimationFrame, useSpring } from "framer-motion";
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://i.ibb.co/j44drGC/Rectangle.png",
    price: 500,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://i.ibb.co/fXXVBZf/hero-2.jpg",
    price: 7840,
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://www.tastingtable.com/img/gallery/20-tea-brands-ranked-from-worst-to-best/intro-1644018824.jpg",
    price: 120,
  },

  // {
  //   id: 4,
  //   name: "Product 4",
  //   image:
  //     "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
  //   price: 5450,
  // },
  // {
  //   id: 5,
  //   name: "Product 5",
  //   image:
  //     "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
  //   price: 700,
  // },
  // {
  //   id: 6,
  //   name: "Product 6",
  //   image:
  //     "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
  //   price: 5800,
  // },
  // {
  //   id: 7,
  //   name: "Product 4",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uxkKiX-wGly90GY9jHmIUew80yVpI6jzAg&usqp=CAU",
  //   price: 200,
  // },
  // {
  //   id: 8,
  //   name: "Product 5",
  //   image:
  //     "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/g/r/green.jpg",
  //   price: 400,
  // },
  // {
  //   id: 9,
  //   name: "Product 6",
  //   image:
  //     "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/w/b/wb_gm_premium_assam_tea_25tb-1.jpg",
  //   price: 50,
  // },
];
function Hero() {
  const ref = useRef(null);

  return (
    <div
    //   initial={{ y: -250, opacity: 0 }}
    //   animate={{ y: -10, opacity: 1 }}
    //   transition={{
    //     delay: 0.3,
    //     duration: 3,
    //     type: "spring",
    //     stiffness: 100,
    //     scale: 1.5,
    //   }}
    >
      <div className=" container  my-1 py-1  ">
        <div className="row   align-items-center justify-items-center">
          <section className="col-sm-12 col-md-6 my-1 py-1 ">
            {/* egg animation added start */}
            {/* <motion.div className="circle m-auto mt-5 " ref={ref}></motion.div> */}
            {/* egg animation added end */}
            {/* <motion.div
              className="circle m-auto "
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              ref={ref}
            /> */}
            <div className="my-2 pb-1">
              <h3 className="my-2 py-1   fs-2    fw-bolder  ">
                Welcome To Sultan Tea
              </h3>
              <p className="my-3 py-1    fs-5 fw-bolder">
                Loving Sultan Tea tea blends! The quality and taste are
                unbeatable. Their seasonal blends are always a delightful
                surprise. Excellent customer service too. Highly recommend.
              </p>

              <div
                // initial={{ y: -60 }}
                // animate={{ y: 20 }}
                // transition={{
                //   duration: 2,
                //   ease: "easeInOut",
                //   times: [0, 0.2, 0.5, 0.8, 1],
                //   repeat: Infinity,
                //   repeatDelay: 1,
                // }}

                className="lc-block my-2 pt-3"
              >
                <button
                  className="d-flex align-items-center  fw-bolder btn  btn-lg text-white "
                  style={{ backgroundColor: "#E49E48" }}
                >
                  More about us
                  <AiOutlineArrowRight className="ms-2" />
                </button>
              </div>
              {/* /lc-block */}
              {/* <button className="btn     ms-3 my-4 py-2  btn btn-outline-dark rounded-pill  slider-btn-bg    ">
                  Creator
                </button> */}
            </div>
          </section>
          <section className="col-sm-12 col-md-6 p-2 mt-3 ">
            <Carousel>
              {products?.map((product, index) => {
                if (index % 1 === 0) {
                  return (
                    <Carousel.Item key={product.id}>
                      <Container fluid>
                        <Card className="  border-0 p-1">
                          <Card.Img
                            className="heroImage"
                            variant="top"
                            src={product?.image}
                          />
                        </Card>
                      </Container>
                    </Carousel.Item>
                  );
                }
                return null;
              })}
            </Carousel>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
