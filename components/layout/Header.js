 

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

  const handleClick = () => {
    const sidebar = document.querySelector(".offcanvas");
    console.log({ sidebar });

    const isCollapse = sidebar.classList.contains("show");
    const offcanvasDiv = document.querySelector(".offcanvas-backdrop");
    const isShow = offcanvasDiv.classList.contains("show");

    if (isCollapse) {
      sidebar.classList.remove("show");
      offcanvasDiv.classList.remove("show");
    } else if (!isCollapse && !isShow) {
      sidebar.classList.add("show");
      offcanvasDiv.classList.add("show");
    }
  };
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
            scroll
              ? " bg-light container-fluid py-3  add-transition "
              : "container  "
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

              <Nav.Link as="span" className="text-nowrap">
                <Link href={"/our-business"}>Our Business</Link>
              </Nav.Link>
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
              <Nav.Item as="li" className="d-flex cus-app-logo ">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="logo"
                    width={120}
                    height={120}
                    layout={500}
                  />
                </Link>
                {/* <img
                      src="/public/logo.png"
                      alt="logo"
                      className="d-inline-block mr-3 "
                      // style={{ maxHeight: "80px" }}
                    />{" "} */}
              </Nav.Item>
            </Nav>
          </div>

          <div className=" d-block  d-lg-none d-md-block col-sm-3 offset-4 col-3 d-xs-block d-flex  justify-content-end">
            <Nav.Link
              as="button"
              className="fs-4 m-0 p-0"
              onClick={() => {
                setModalShow(true);
              }}
            >
              <FaShoppingCart />
            </Nav.Link>
            <sup className="fs-6 fw-bold mt-2">({totalItems})</sup>
          </div>

          <div className="col-lg-5  col-sm-2   col-3">
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
                {/* <Nav.Link as="i" className="fs-4">
                  <Link href={"/search"}>
                    {" "}
                    <FaSearch style={{ marginLeft: "100px" }} />{" "}
                  </Link>
                </Nav.Link> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" justify-content-center ">
                  {/* <Nav.Link as="span">
                    <Link href={"/gellary"}>Gallery</Link>
                  </Nav.Link> */}
                  <div className="  d-block  d-lg-none d-md-block  d-xs-block ">
                    <Nav className=" text-white" as="ul">
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
                      <Link href={"/gallery2"}>Gallery</Link>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item as="span">
                      <Link href={"/gellary"}>Gallery1</Link>
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider /> */}
                  </NavDropdown>
                  <NavDropdown title="Shop" id="collasible-nav-dropdown">
                    <NavDropdown.Item as="span">
                      <Link href={"/shop"}>Products</Link>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item as="span">
                      <Link href={"/new-arrival"}>New Arrivals</Link>
                    </NavDropdown.Item> */}
                  </NavDropdown>
                  {/* <Nav.Link as="span">
                    <Link href={"/blogs"}>Blog</Link>
                  </Nav.Link> */}
                  <Nav.Link as="span">
                    <Link href={"/carrier"}>Carrier</Link>
                  </Nav.Link>
                  <Nav.Link as="span" className="text-nowrap">
                    <Link href={"/contact-updated"}>Contact Us</Link>
                  </Nav.Link>
                  {/* start */}
                  <Nav.Link
                    as="button"
                    className="fs-4 d-sm-none d-lg-block d-xs-none m-0 p-0"
                    onClick={() => {
                      setModalShow(true);
                    }}
                  >
                    <FaShoppingCart />
                  </Nav.Link>
                  <sup className="fs-6 fw-bold  d-sm-none d-lg-block d-xs-none mt-3 ">
                    ({totalItems})
                  </sup>

                  <Nav.Link
                    as="i"
                    className="fs-4 d-sm-none d-xs-none d-lg-block "
                  >
                    {/* <Link href={"/search"}>
                      {" "}
                      <FaSearch />{" "}
                    </Link> */}
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
