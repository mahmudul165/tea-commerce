// import React, { useState } from "react";
// import {
//   Navbar,
//   Nav,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button,
//   Row,
//   Col,
//   Container,
// } from "react-bootstrap";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";

// const NavBar = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Navbar
//       bg="dark"
//       variant="dark"
//       expand="lg"
//       expanded={expanded}
//       onToggle={() => setExpanded(!expanded)}
//     >
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Container>
//         <Row>
//           <Col xl={3} md={3}>
//             <Nav className="mr-auto " as="ul">
//               <Nav.Item as="li">
//                 <Nav.Link href="#home">Home</Nav.Link>
//               </Nav.Item>
//               <Nav.Item as="li">
//                 <Nav.Link href="#about">About</Nav.Link>
//               </Nav.Item>
//               <NavDropdown title="Pages" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title="Shop" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Col>
//           <Col xl={3} md={3}>
//             <Nav className="ml-auto align-items-center  justify-content-end " as="ul">
//               <Nav.Item as="li" className="d-flex ">
//                 <img
//                   src="logo.png"
//                   alt="logo"
//                   className="d-inline-block mr-3"
//                   style={{ maxHeight: "50px" }}
//                 />
//               </Nav.Item>
//             </Nav>
//           </Col>
//           <Col xl={6}  md={6}>

//           <Nav className="mr-auto justify-content-end align-items-center" as="ul">
//               <Nav.Item as="li">
//                 <Nav.Link href="#gellary">Gellary</Nav.Link>
//               </Nav.Item>
//               <Nav.Item as="li">
//                 <Nav.Link href="#blog">Blog</Nav.Link>
//               </Nav.Item>
//               <Nav.Item as="li">
//                 <Nav.Link href="#blog">Contact us</Nav.Link>
//               </Nav.Item>
//               <Button className="ml-2" style={{
//     marginRight: '7px'}}>
//                   <FaShoppingCart />
//                </Button>
//                 <Button className="ml-2  ">
//                  <FaSearch />
//               </Button>
//               </Nav>
//             </Col>

//         </Row>
//         </Container>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavBar;

import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from "react-use-cart";
 
function Header() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="  fs-6 fw-bold text-danger"
        >
          <Container fluid className="justify-content-around">
            <Row>
              <Col xl={3} md={3}>
                <Nav className="mr-auto " as="ul">
                  <Nav.Item as="li">
                    
                    <Nav.Link as="span">
                      <Link href={"/"}>Home</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    
                    <Nav.Link as="span">
                      <Link href={"/about"}>About</Link>
                    </Nav.Link>
                  </Nav.Item>

                  <NavDropdown title="Pages" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Shop" id="collasible-nav-dropdown">
                    <NavDropdown.Item as="span">
                       <Link href={"/shop"}>Products</Link>
                    </NavDropdown.Item>
                     
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      New Arrival
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Col>
              <Col xl={3} md={3}>
                <Nav
                  className="ml-auto align-items-center  justify-content-end "
                  as="ul"
                >
                  {" "}
                  <Nav.Item as="li" className="d-flex ">
                    <img
                      src="logo.png"
                      alt="logo"
                      className="d-inline-block mr-3 w-25"
                      // style={{ maxHeight: "80px" }}
                    />{" "}
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xl={6} md={6}>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Sultan Tea
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as="span">
                      <Link href={"/gellary"}>Gellary</Link>
                    </Nav.Link>
                    <Nav.Link as="span">
                      <Link href={"/blogs"}>Blog</Link>
                    </Nav.Link>
                      
                      <Nav.Link as="span">
                        <Link href={"/contact"}>Contact Us</Link>
                      </Nav.Link>
                    </Nav>
                    <Button
                      className="ml-2"
                      style={{
                        marginRight: "7px",
                      }}
                    >
                      <FaShoppingCart />  ({totalItems})
                    </Button>
                    <Button className="ml-2  ">
                      <FaSearch />{" "}
                    </Button>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Col>
            </Row>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
