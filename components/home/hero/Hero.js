import CustomModal from "@/components/admin/common/CustomModal";
import ShowMore from "@/components/common/ShowMore";
import React, { useRef } from "react";
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
    image:
      "https://images.pexels.com/photos/1362537/pexels-photo-1362537.jpeg?auto=compress&cs=tinysrgb&w=600",
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

export const aboutUsDescription =
  "Seven years before the commencement of tea production, a tea garden of approximately 100 acres, was owned by Faizul Islam, proprietor and owner of Heritage Air Express, a travel agency business since 1998. Since 2013, he thought of business expansion and started targeting his focus towards tea production sector. Within a short time, span, with thorough research and financial backup for tea production, his dreams and visions progressed towards reality. Between 2015 and 2016 he often travelled Kolkata and Mumbai, India, where most of the factory machineries were purchased. During that time, he also visited several factories to widen his knowledge base regarding tea. The construction of factory started right after each of the machineries arrived, under his strong supervision. Mr. Faizul Islam had close links to the local people in thakurgaon and hence was able to build friendly connections with above 200 contact farmers. After the successful establishment of tea factory, leaves of about 12000 kgs were collected from contact farmers and several other tea estate companies. At first, the biggest was with acquiring good quality leaves, but with time and proper cultivation, leaves of assured quality were immediately put into production once they arrived from tea garden located 10 minutes away from the factory. These leaves are first dried in a turf house and is transported through a monorail in the factory where the leaves first undergo a crush, tear and curl (CTC) process in which they are passed through a series of cylindrical rollers with hundreds of sharp teeth that crush, tear and curl the tea into small hard pellets. Next, they are continuously fermented through a CFM machine, an oxidization process that control tea temperature using air and water. Next, they are transferred to Heater and dryer and the final stage is completed in a sorting room where the tea is graded in terms of quality and taste. Once the packaging is done the, the tea under a Trademark of sultan is sent to Chittagong for auction to determine its market price. During the auction at the end of 2017 Sultan Tea came 2nd in terms of price and quality after Kazi n Kazi, one of the leading tea estates in Bangladesh. The unique selling point of Sultan tea is that it is considered as a young tea, which gives it bright liquor and a refreshing taste.";
function Hero() {
  const ref = useRef(null);

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <ShowMore
        show={showModal}
        title="More About Us"
        subTitle="Welcome to sultan tea "
        description={aboutUsDescription}
        onHide={() => setShowModal(false)}
      />
      <div className=" container  my-1 py-1  ">
        <div className="row   align-items-center justify-items-center ">
          <section className="col-sm-12 col-md-6 my-1 py-1  ">
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
              <h3 className="my-2 py-1   fs-1    fw-bolder  cus-color-secondary ">
                Welcome To Sultan Tea
              </h3>
              <p className="my-3 py-1    fs-5  text-justify">
                {aboutUsDescription.substring(0, 220)}...
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
                  className="d-flex align-items-center  fw-bold btn  btn-lg text-white  cus-bg-primary"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  More About Us
                  <AiOutlineArrowRight className="ms-2" />
                </button>
              </div>
              {/* /lc-block */}
              {/* <button className="btn     ms-3 my-4 py-2  btn btn-outline-dark rounded-pill  slider-btn-bg    ">
                  Creator
                </button> */}
            </div>
          </section>
          <section className="col-sm-12 col-md-6 p-2 mt-3  ">
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
