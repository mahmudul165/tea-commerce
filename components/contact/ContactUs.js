import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div> 
       <Container className="my-5">
      <Row className="justify-content-center">
      <Col xs={12} md={4} lg={4}>1 of 2</Col>
        
        <Col xs={12} md={8} lg={8}>
          <h1 className="text-center">Contact Us</h1>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactUs;
