import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://cdn.shopify.com/s/files/1/0935/3276/products/Untitleddesign_23_400x.png?v=1671180954",
    price: 500,
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/g/r/green.jpg",
    price: 7840,
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/w/b/wb_gm_premium_assam_tea_25tb-1.jpg",
    price: 120,
  },
  {
    id: 4,
    name: "Product 4",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
    price: 5450,
  },
  {
    id: 5,
    name: "Product 5",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
    price: 700,
  },
  {
    id: 6,
    name: "Product 6",
    image:
      "https://cdn.buytea.com/pub/media/catalog/product/cache/f4a413f86e2ae468a5d75a3fe8e24e32/h/o/honey-lemon-green-tea-bags-60-gms.jpg",
    price: 5800,
  },
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

const ProductCarousel = () => {
  return (
    <Carousel>
      {products.map((product, index) => {
        if (index % 4 === 0) {
          return (
            <Carousel.Item key={product.id}>
              <Container>
                <Row>
                  {products.slice(index, index + 4).map((product) => (
                    <Col xs={12} md={3} key={product.id}>
                      <Card className="border-0">
                       
                        <Card className="h-25">
                          <Card.Img variant="top" src={product.image} />
                        </Card>
                        <h6 className="fs-5 fw-bold">{product.name}</h6>
                        <p className="fs-6 fw-bold">{product.price}</p>
                        {/* <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body> */}
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Carousel.Item>
          );
        }
        return null;
      })}
    </Carousel>
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
