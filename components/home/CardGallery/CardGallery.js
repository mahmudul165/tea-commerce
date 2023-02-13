import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";

const CardGallery = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the description of product 1",
      image: "https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9782559_best%20tea%20gardens%20Bangladesh.jpg",
      price: 49.99,
    },
    {
      id: 2,
      // name: 'Product 2',
      // description: 'This is the description of product 2',
      image: "https://media.istockphoto.com/id/531854300/photo/first-flush-tea-leaves.jpg?b=1&s=170667a&w=0&k=20&c=kCIF1ISSozkSewK1oSW7j6e34z5mgo8SR7xTEo719xw=",
      price: 59.99,
    },
    {
      id: 3,
      // name: 'Product 3',
      // description: 'This is the description of product 3',
      image: "https://images.unsplash.com/photo-1620903375315-e70f97af6288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlYSUyMGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: 69.99,
    },
  ];

  return (
    <div className="container py-3 my-3">
      <Row>
        {products?.map((product) => {
          return(
          <>
          <Col xs={6} md={4} key={product.id}>
            <Card style={{ width: "22rem", height: "auto"}}>
              <Card.Img variant="top" src={product?.image} fluid />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
          </>
        )})
      }
      </Row>
    </div>
  );
};

export default CardGallery;
