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

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import CartItemsModal from "../common/CartItemsModal";
import Logo from "/public/main-logo.png";
function Header() {
  // start header
  const [scroll, setScroll] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // end header
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
      <CartItemsModal show={modalShow} onHide={() => setModalShow(false)} />
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          sticky="top"
          // bg="light"
          expand={expand}
          // className="  fs-6 fw-bold text-danger  navPosition"
          className={`row align-items-center   m-auto   navPosition py-2 ${
            scroll ? " bg-light container-fluid py-3 " : "container "
          }`}
        >
          {/* <Container fluid className="justify-content-around"> */}
          {/* <div className="row"> */}
          <div className="col-lg-5  d-md-none d-lg-block   d-none   ">
            <Nav className=" justify-content-end " as="ul">
              <Nav.Item as="li">
                <Nav.Link as="span">
                  <Link href={"/"}>Home</Link>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item as="li">                    
                    <Nav.Link as="span" className="text-nowrap">
                      <Link href={"/about"}>About Us</Link>
                    </Nav.Link>
                  </Nav.Item> */}

              <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item as="li">
                  <Link href={"/about"}>About Sultan Tea</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as="span">
                  <Link href={"/press-releases"}>Press Releases</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href={"/new-arrival"}>News Links</Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item as="span">
                  <Link href={"/about"}>About Sultan Tea</Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="span">
                  <Link href={"/new-arrival"}>Press Releases</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href={"/new-arrival"}>News Links</Link>
                </NavDropdown.Item>
              </NavDropdown> */}

              <NavDropdown title="Our Business" id="collasible-nav-dropdown">
                <NavDropdown.Item as="span">
                  <Link href={"/our-business"}>Our Business</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item as="span">
                       <Link href={"/new-arrival"}>Press Releases</Link>
                    </NavDropdown.Item>   */}
              </NavDropdown>
              <Nav.Link as="span" className="text-nowrap">
                <Link href={"/our-brand"}>Our Brands</Link>
              </Nav.Link>
            </Nav>
          </div>
          <div className="col-lg-2  col-sm-2  col-2">
            <Nav
              className="m-auto align-items-center  justify-content-center "
              as="ul"
            >
              {" "}
              <Nav.Item as="li" className="d-flex ">
                <Image
                  src={Logo}
                  alt="logo"
                  width={90}
                  height={90}
                  layout={500}
                />
                {/* <img
                      src="/public/logo.png"
                      alt="logo"
                      className="d-inline-block mr-3 "
                      // style={{ maxHeight: "80px" }}
                    />{" "} */}
              </Nav.Item>
            </Nav>
          </div>

          <div className=" d-block  d-lg-none d-md-block col-sm-2 offset-6 col-2 d-xs-block ">
            <Nav.Link
              as="button"
              className="fs-4"
              onClick={() => {
                setModalShow(true);
              }}
            >
              <FaShoppingCart />{" "}
            </Nav.Link>
          </div>

          <div className="col-lg-5  col-sm-2   col-2">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Sultan Tea
                </Offcanvas.Title>
                <Nav.Link as="i" className="fs-4">
                  <Link href={"/search"}>
                    {" "}
                    <FaSearch />{" "}
                  </Link>
                </Nav.Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" justify-content-center ">
                  {/* <Nav.Link as="span">
                    <Link href={"/gellary"}>Gallery</Link>
                  </Nav.Link> */}
                  <div className="  d-block  d-lg-none d-md-block  d-xs-block ">
                    <Nav className="mr-auto text-white" as="ul">
                      <Nav.Item as="li">
                        <Nav.Link as="span">
                          <Link href={"/"}>Home</Link>
                        </Nav.Link>
                      </Nav.Item>

                      <NavDropdown
                        title="About Us"
                        id="collasible-nav-dropdown"
                      >
                        <NavDropdown.Item as="span">
                          <Link href={"/about"}>About Sultan Tea</Link>
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as="span">
                          <Link href={"/press-releases"}>Press Releases</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item as="span">
                          <Link href={"/new-arrival"}>News Links</Link>
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Our Business"
                        id="collasible-nav-dropdown"
                      >
                        <NavDropdown.Item as="span">
                          <Link href={"/our-business"}>Our Business</Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as="span" className="text-nowrap">
                        <Link href={"/our-brand"}>Our Brands</Link>
                      </Nav.Link>
                    </Nav>
                  </div>

                  <NavDropdown title="Gallery" id="collasible-nav-dropdown">
                    <NavDropdown.Item as="span">
                      <Link href={"/gellary"}>Gallery1</Link>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item as="span">
                      <Link href={"/gallery2"}>Gallery2</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Shop" id="collasible-nav-dropdown">
                    <NavDropdown.Item as="span">
                      <Link href={"/shop"}>Products</Link>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item as="span">
                      <Link href={"/new-arrival"}>New Arrivals</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as="span">
                    <Link href={"/blogs"}>Blog</Link>
                  </Nav.Link>
                  <Nav.Link as="span">
                    <Link href={"/carrier"}>Carrier</Link>
                  </Nav.Link>
                  <Nav.Link as="span" className="text-nowrap">
                    <Link href={"/contact-updated"}>Contact Us</Link>
                  </Nav.Link>
                  {/* start */}
                  <Nav.Link
                    as="button"
                    className="fs-4 d-sm-none d-lg-block d-xs-none"
                    onClick={() => {
                      setModalShow(true);
                    }}
                  >
                    {" "}
                    <FaShoppingCart />{" "}
                  </Nav.Link>

                 ({totalItems})

                  <Nav.Link
                    as="i"
                    className="fs-4 d-sm-none d-xs-none d-lg-block"
                  >
                    <Link href={"/search"}>
                      {" "}
                      <FaSearch />{" "}
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
          {/* </div> */}
          {/* </Container> */}
        </Navbar>
      ))}
    </>
  );
}

export default Header;
