import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
import CartItemsModal from "../common/CartItemsModal";
import Logo from "/public/main-logo.png";
import { useRouter } from "next/router";
function Header() {
  // start header
  const [scroll, setScroll] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    const sidebar = document.querySelector(".offcanvas");
    const body = document.querySelector("body");

    console.log({ sidebar });

    const isCollapse = sidebar.classList.contains("show");
    const offcanvasDiv = document.querySelector(".offcanvas-backdrop");
    const isShow = offcanvasDiv.classList.contains("show");

    if (isCollapse) {
      sidebar.classList.remove("show");
      offcanvasDiv.classList.remove("show");
      body.click();
    } else if (!isCollapse && !isShow) {
      sidebar.classList.add("show");
      offcanvasDiv.classList.add("show");
      sidebar.classList.add("offcanvas-toggling");
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
          <div className="col-lg-5  d-md-none d-lg-block   d-none   ">
            <Nav className=" justify-content-end " as="ul">
              <Nav.Item
                as="li"
                className={`${router.pathname === "/" ? "active-li" : ""}`}
              >
                <Nav.Link as="span">
                  <Link href={"/"}>Home</Link>
                </Nav.Link>
              </Nav.Item>

              <NavDropdown
                title="About Us"
                id="collasible-nav-dropdown"
                className={`${router.pathname === "/about" ? "active-li" : ""}`}
              >
                <NavDropdown.Item as="li">
                  <Link href={"/about"}>About Sultan Tea</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href={"/press-releases"}>Press Releases</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as="span"
                className={`${
                  router.pathname === "/our-business" ? "active-li" : ""
                } text-nowrap`}
              >
                <Link href={"/our-business"}>Our Business</Link>
              </Nav.Link>
              <Nav.Link
                as="span"
                className={`${
                  router.pathname === "/our-brand" ? "active-li" : ""
                } text-nowrap`}
              >
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
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <Nav className=" justify-content-center "> */}
                <div className="  d-block  d-lg-none d-md-block  d-xs-block ">
                  <Nav as="ul">
                    <Nav.Item
                      as="li"
                      className={`${
                        router.pathname === "/" ? "active-li" : ""
                      }`}
                    >
                      <Nav.Link as="span">
                        <Link href={"/"}>Home</Link>
                      </Nav.Link>
                    </Nav.Item>

                    <NavDropdown
                      title="About Us"
                      id="collasible-nav-dropdown"
                      className={`${
                        router.pathname === "/about" ? "active-li" : ""
                      }`}
                    >
                      <NavDropdown.Item as="li">
                        <Link href={"/about"}>About Sultan Tea</Link>
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      <NavDropdown.Item as="li">
                        <Link href={"/press-releases"}>Press Releases</Link>
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="Our Business"
                      id="collasible-nav-dropdown"
                      className={`${
                        router.pathname === "/our-business" ? "active-li" : ""
                      } `}
                    >
                      <NavDropdown.Item as="span">
                        <Link href={"/our-business"}>Our Business</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      as="span"
                      className={`${
                        router.pathname === "/our-brand" ? "active-li" : ""
                      } text-nowrap`}
                    >
                      <Link href={"/our-brand"}>Our Brands</Link>
                    </Nav.Link>
                  </Nav>
                </div>

                <NavDropdown
                  title="Gallery"
                  id="collasible-nav-dropdown"
                  className={`${
                    router.pathname === "/gallery2" ? "active-li" : ""
                  }`}
                >
                  <NavDropdown.Item as="li">
                    <Link href={"/gallery2"}>Gallery</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Shop"
                  id="collasible-nav-dropdown"
                  className={`${
                    router.pathname === "/shop" ? "active-li" : ""
                  }`}
                >
                  <NavDropdown.Item as="li">
                    <Link href={"/shop"}>Products</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as="span"
                  className={`${
                    router.pathname === "/carrier" ? "active-li" : ""
                  }`}
                >
                  <Link href={"/carrier"}>Carrier</Link>
                </Nav.Link>
                <Nav.Link
                  as="span"
                  className={`${
                    router.pathname === "/contact" ? "active-li" : ""
                  } text-nowrap`}
                >
                  <Link href={"/contact"}>Contact Us</Link>
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
                ></Nav.Link>
                {/* </Nav> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
