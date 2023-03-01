import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Outlet = () => {
  return (
    <div className="my-3 py-2">
      <Container>
        <SectionTitle title="Our Outlet" />
        <Row className="">
          <Col sm={12} md={6}>
            {/* <div style={{position: 'relative', height: '400px', backgroundImage: `url(https://images.unsplash.com/photo-1518739745383-0ef26e9dd7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVhJTIwb3V0bGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <h1 style={{position: 'absolute', bottom: '45px', left: '25px',right: '4px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px'}}>Our Presence at Swapno</h1>
          </div> */}
            <div>
              <img
                src="https://i.ibb.co/34bsxvZ/outlet-1.png"
                alt="outlet-1"
              ></img>
            </div>
          </Col>
          <Col sm={12} md={6}>
            {/* <div style={{position: 'relative', height: '400px', backgroundImage: `url(https://images.unsplash.com/photo-1535395155851-2088a2a94701?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1400&q=60)`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <h1 style={{position: 'absolute', bottom: '45px', left: '25px', right: '4px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px'}}>Our presence at the International Airport</h1>
          </div> */}
            <div className="xs-mt-2">
              <img
                src="https://i.ibb.co/1zzg6NP/outlet-2.png"
                alt="outlet-2"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Outlet;
