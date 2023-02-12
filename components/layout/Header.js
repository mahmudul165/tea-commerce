// // import React, { useState } from 'react'
// // import Link from 'next/link'
// // import styled from 'styled-components'

// // const Navigation = styled.nav`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   height: 60px;
// //   padding: 0 30px;
// //   background-color: #333;
// //   color: #fff;

// //   @media (max-width: 767px) {
// //     flex-wrap: wrap;
// //   }
// // `

// // const Column = styled.div`
// //   display: flex;
// //   align-items: center;

// //   &:first-child {
// //     flex: 1;

// //     @media (max-width: 767px) {
// //       flex-wrap: wrap;
// //       padding-bottom: 15px;
// //       border-bottom: 1px solid #fff;
// //       margin-bottom: 15px;
// //     }
// //   }

// //   &:nth-child(2) {
// //     flex: 1;
// //     text-align: center;

// //     @media (max-width: 767px) {
// //       display: none;
// //     }
// //   }

// //   &:last-child {
// //     display: flex;
// //     justify-content: flex-end;

// //     @media (max-width: 767px) {
// //       justify-content: center;
// //       padding-top: 15px;
// //       border-top: 1px solid #fff;
// //       margin-top: 15px;
// //     }
// //   }
// // `

// // const NavLink = styled.a`
// //   display: block;
// //   padding: 0 10px;
// //   color: #fff;
// //   text-decoration: none;
// //   font-size: 14px;
// //   line-height: 60px;

// //   &:hover {
// //     background-color: #555;
// //   }
// // `

// // const Logo = styled.img`
// //   height: 40px;
// //   margin: 0 10px;
// // `

// // const CartIcon = styled.i`
// //   font-size: 20px;
// //   margin-left: 20px;
// //   cursor: pointer;
// // `

// // const SearchBar = styled.input`
// //   height: 35px;
// //   padding: 0 10px;
// //   margin-left: 20px;
// //   font-size: 14px;
// //   border: 1px solid #fff;
// //   border-radius: 20px;
// //   color: #333;
// //   background-color: transparent;

// //   &:focus {
// //     outline: none;
// //   }
// // `

// // const MegaMenu = styled.div`
// //   display: none;
// //   position: absolute;
// //   top: 60px;
// //   left: 0;
// //   right: 0;
// //   background-color: #333;
// //   color: #fff;
// //   padding: 20px;

// //   &.show {
// //     display: block;
// //   }
// // `

// // const MegaMenuLink = styled.a`
// //   display: block;
// //   color: #fff;
// //   text-decoration: none;
// //   font-size: 14px;
// //   margin-bottom: 10px;
// // `

// // const Header = () => {
// //   const [showPagesMenu, setShowPagesMenu] = useState(false)
// //   const [showShopMenu, setShowShopMenu] = useState(false)

// //   return (
// //   <Navigation>
// //   <Column>
// //   <Link href="/">
// //   <NavLink>Home</NavLink>
// //   </Link>
// //   <Link href="/about">
// //   <NavLink>About</NavLink>
// //   </Link>
// //   <NavLink onClick={() => setShowPagesMenu(!showPagesMenu)}>
// //   Pages
// //   </NavLink>
// //   <MegaMenu className={showPagesMenu ? 'show' : ''}>
// //   <Link href="/page1">
// //   <MegaMenuLink>Page 1</MegaMenuLink>
// //   </Link>
// //   <Link href="/page2">
// //   <MegaMenuLink>Page 2</MegaMenuLink>
// //   </Link>
// //   </MegaMenu>
// //   <NavLink onClick={() => setShowShopMenu(!showShopMenu)}>
// //   Shop
// //   </NavLink>
// //   <MegaMenu className={showShopMenu ? 'show' : ''}>
// //   <Link href="/products">
// //   <MegaMenuLink>Products</MegaMenuLink>
// //   </Link>
// //   <Link href="/cart">
// //   <MegaMenuLink>Cart</MegaMenuLink>
// //   </Link>
// //   </MegaMenu>
// //   </Column>
// //   <Column>
// //   <Logo src="/logo.png" alt="Logo" />
// //   </Column>
// //   <Column>
// //   <Link href="/gallery">
// //   <NavLink>Gallery</NavLink>
// //   </Link>
// //   <Link href="/blog">
// //   <NavLink>Blog</NavLink>
// //   </Link>
// //   <Link href="/contact">
// //   <NavLink>Contact Us</NavLink>
// //   </Link>
// //   <CartIcon className="fas fa-shopping-cart" />
// //   <SearchBar type="text" placeholder="Search..." />
// //   </Column>
// //   </Navigation>
// //   )
// //   }

// //   export default Header

// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Row, Col, Image, Button } from 'react-bootstrap';
// import { FaShoppingCart, FaSearch } from 'react-icons/fa';

// const NHeader = () => {
//   const [showMegaMenu, setShowMegaMenu] = useState(false);

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Row>
//           <Col xs={4}>
//             <Navbar.Brand href="#home">Home</Navbar.Brand>
//             <Navbar.Brand href="#about">About</Navbar.Brand>
//             <Navbar.Brand onClick={() => setShowMegaMenu(!showMegaMenu)}>
//               Pages
//               {showMegaMenu && (
//                 <div className="mega-menu">
//                   <p>Page 1</p>
//                   <p>Page 2</p>
//                   <p>Page 3</p>
//                 </div>
//               )}
//             </Navbar.Brand>
//             <Navbar.Brand onClick={() => setShowMegaMenu(!showMegaMenu)}>
//               Shop
//               {showMegaMenu && (
//                 <div className="mega-menu">
//                   <p>Product 1</p>
//                   <p>Product 2</p>
//                   <p>Product 3</p>
//                 </div>
//               )}
//             </Navbar.Brand>
//           </Col>
//           <Col xs={4}>
//             <Image src="logo.png" height="50" className="d-inline-block align-top" />
//           </Col>
//           <Col xs={4}>
//             <Nav className="ml-auto">
//               <Navbar.Brand href="#gaellary">Gaellary</Navbar.Brand>
//               <Navbar.Brand href="#blog">Blog</Navbar.Brand>
//               <Navbar.Brand href="#contact">Contact Us</Navbar.Brand>
//               <Button className="ml-2">
//                 <FaShoppingCart />
//               </Button>
//               <Button className="ml-2">
//                 <FaSearch />
//               </Button>
//             </Nav>
//           </Col>
//         </Row>
//       </Container>
//     </Navbar>
//   );
// };

// export default NHeader;

import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container> 
        <Row>
          <Col xl={3} md={3}>
            <Nav className="mr-auto " as="ul">
              <Nav.Item as="li">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col xl={3} md={3}>
            <Nav className="ml-auto align-items-center  justify-content-end " as="ul">
              <Nav.Item as="li" className="d-flex ">
                <img
                  src="logo.png"
                  alt="logo"
                  className="d-inline-block mr-3"
                  style={{ maxHeight: "50px" }}
                />
              </Nav.Item>
            </Nav>
          </Col>
          <Col xl={6}  md={6}>
         
          <Nav className="mr-auto justify-content-end align-items-center" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="#gellary">Gellary</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#blog">Contact us</Nav.Link>
              </Nav.Item>
              <Button className="ml-2" style={{
    marginRight: '7px'}}>
                  <FaShoppingCart />
               </Button>
                <Button className="ml-2  ">
                 <FaSearch />
              </Button>
              </Nav>
            </Col>
          
        </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
