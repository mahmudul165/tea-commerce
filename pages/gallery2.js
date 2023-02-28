import RouteNavSlider from "@/components/common/RouteNavSlider";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Card, } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import HeroBanner from "@/components/common/Banner";
const Gallery = () => {
  const [tab, setTab] = useState("all");

  const handleTabClick = (event, tabName) => {
    event.preventDefault();
    setTab(tabName);
  };

  const images = [
    { id: 1, url: "https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "all" },
    {
      id: 2,
      url: "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
      category: "garden",
    },
    { id: 3, url: "https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "garden" },
    {
      id: 4,
      url: "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
      category: "garden",
    },
    {
      id: 5,
      url: "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
      category: "garden",
    },
    { id: 6, url: "https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "factory" },
    {
      id: 7,
      url: "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
      category: "factory",
    },
    {
      id: 8,
      url: "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
      category: "factory",
    },
    {
      id: 9,
      url: "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
      category: "factory",
    },

    {
      id: 10,
      url: "https://media.gettyimages.com/id/121150804/photo/tea-picker.jpg?s=612x612&w=0&k=20&c=zVxSFPacDsE9vziyhTM0aiw481A0Ou0PH3wCAjMS_e0=",
      category: "office",
    },
    {
      id: 11,
      url: "https://i.ibb.co/prC1cY8/jaromir-kavan-i9ea-AR4d-Wi8-unsplash.jpg",
      category: "office",
    },
    {
      id: 12,
      url: "https://i.ibb.co/vxh7Mcy/rajat-sarki-9t-Io-Mw7-Moz-E-unsplash.jpg",
      category: "office",
    },
    { id: 13, url: " https://i.ibb.co/7C7M7QX/tea-5.jpg", category: "office" },
  ];

  const filteredImages = images.filter(
    (image) => image.category === tab || tab === "all"
  );

  const imageRows = [];

  for (let i = 0; i < filteredImages.length; i += 4) {
    const row = filteredImages.slice(i, i + 4);
    imageRows.push(row);
  }

  return (
    <div>
      {" "}
      {/* <RouteNavSlider router="Gellary" /> */}
      <HeroBanner name="Gellary" />
      <Container className="my-5">
        <Nav className="mb-3">
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "all"}
              onClick={(e) => handleTabClick(e, "all")}
            >
              View All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "garden"}
              onClick={(e) => handleTabClick(e, "garden")}
            >
              Garden
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "factory"}
              onClick={(e) => handleTabClick(e, "factory")}
            >
              Factory
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              active={tab === "office"}
              onClick={(e) => handleTabClick(e, "office")}
            >
              Office
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* tss */}
        {imageRows.map((row) => (
          <Row key={row[0].id} className="mb-4">
            {row.map((image,index) => (
              <Card
              key={image.id}
                className="col-sm-12 col-md-3  mb-2    border-0"
              >
                {/* <Card.Body>  */}
                {image ? (
                  <motion.img
                    className="galleryImage"
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={image.url}
                    alt={image.category}
                    // alt={`${object.title} - Image ${index + 1}`}
                    fluid
                    // className="card-img-top  p-2 "
                    // width={336}
                    // height={230}
                    layout="responsive"
                  />
                ) : (
                  <Skeleton height={400} />
                )}
                {/* </Card.Body> */}
              </Card>
              // <Col key={image.id} xs={6} md={3} className="mb-4">
              //   <img
              //     src={image.url}
              //     alt={image.category}
              //     className="img-fluid rounded"
              //   />
              // </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Gallery;
