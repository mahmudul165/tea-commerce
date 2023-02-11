import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

function OurOffices() {
    const products = [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is the description of product 1',
          image: 'https://via.placeholder.com/150',
          price: 49.99,
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is the description of product 2',
          image: 'https://via.placeholder.com/150',
          price: 59.99,
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is the description of product 3',
          image: 'https://via.placeholder.com/150',
          price: 69.99,
        },
        {
          id: 4,
          name: 'Product 4',
          description: 'This is the description of product 4',
          image: 'https://via.placeholder.com/150',
          price: 79.99,
        },
      ];
    return <Row>
    {products.map((product) => (
      <Col xs={6} md={3} key={product.id}>
        <Card>
          <Image src={product.image} fluid />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>;
}

export default OurOffices;
