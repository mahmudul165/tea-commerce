import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Outlet = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <div style={{position: 'relative', height: '400px', backgroundImage: `url(https://via.placeholder.com/600x400)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h2 style={{position: 'absolute', bottom: '200px', left: '50px', right: '4px', background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px'}}>Outlet 2</h2>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div style={{position: 'relative', height: '400px', backgroundImage: `url(https://via.placeholder.com/600x400)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h2 style={{position: 'absolute', bottom: '200px', left: '50px', right: '4px', background: 'rgba(0, 0, 0, 0)', color: 'white', padding: '10px'}}>Outlet 2</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Outlet;
