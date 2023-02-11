// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faRectangleList } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "react-use-cart";
// import { useSession, signIn, signOut } from "next-auth/react";
// import useAuth from "/hook/useAuth";
// function Header() {
//   const { data: session } = useSession();
//   // navbar top
//   const [show, setShow] = useState(true);
//   const controlNavbar = () => {
//     if (window.scrollY > 20) {
//       setShow(false);
//     } else {
//       setShow(true);
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", controlNavbar);
//     return () => {
//       window.removeEventListener("scroll", controlNavbar);
//     };
//   }, []);
//   // cart item
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     totalItems,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();
//   //search
//   const { handleSearchChange, searchInput } = useAuth();
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const urls = [
//       "https://arshi365.lamptechs.com/api/admin/products",
//       "https://arshi365.lamptechs.com/api/admin/todaysDeal",
//     ];

//     Promise.all(
//       urls.map((url) =>
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => setResults(data))
//           .catch((error) => console.log("There was a problem!", error))
//       ),
//       []
//     );
//   }, []);

//   return (
//     <header
//       className={`  sticky-top  header-bg    ${
//         !show && " shadow-lg  rounded bg-light  nav-scroll"
//       }`}
//     >
//       {/* <!-- navbar --> */}
//       <nav className="container navbar navbar-expand-lg p-0" id="navbar-scroll">
//         {/* web view */}
//         <div className="container-fluid  ">
//           {/* logo part  section*/}

//           <Link href="/">
//             <a className="navbar-brand">
//               <img
//                 src="/home/Arshi365 New-01.png"
//                 alt="ECOMMERCE  LOGO"
//                 width={150}
//                 height={75}
//               />
//             </a>
//           </Link>

//           {/* search section */}
//           <div className="w-50 d-flex justify-content-center align-items-center  responsive-search pe-4">
//             {/* search part */}

//             <div className="container">
//               {/* <button
//                 className="btn  "
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-expanded="true"
//                 aria-controls="multiCollapseExample1 multiCollapseExample2"
//               >
//                 <i className="fa fa-search"></i>
//               </button> */}
//               <div
//                 className="row height d-flex justify-content-center align-items-center"
//                 id="navbarSupportedContent"
//               >
//                 <div className=" ">
//                   <div className="search">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search in Arshi"
//                       onChange={handleSearchChange}
//                     />
//                     <Link href="/search" passHref>
//                       <button
//                         style={{
//                           backgroundColor: "#fe0098",
//                           color: "white",
//                         }}
//                         className="btn   "
//                         type="submit"
//                         onClick={searchInput}
//                       >
//                         <i className="fa fa-search"></i>
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* cart part */}
//           <div className="d-flex   ">
//             {/* <Image
//               src="/home/cart-logo.png"
//               alt="CART-LOGO"
//               width={55}
//               height={52}
//               className="d-inline-block align-text-top  "
//             /> */}

//             <span
//               className="me-1"
//               style={{
//                 color: "#fe0098",
//               }}
//             >
//               <i className="fas fa-shopping-cart fs-4"></i>
//             </span>
//             <Link href="/cart" passHref>
//               <a className="ms-1  text-decoration-none text-dark">
//                 MY CART ({totalItems})
//               </a>
//             </Link>
//           </div>
//           {/*authentication section */}
//           {/* login  */}
//           {/* start */}
//           {session ? (
//             // <li>{session.user?.email}</li>
//             // start
//             <>
//               <div className="nav-item dropdown fs-6 ">
//                 <a
//                   className="nav-link active dropdown-toggle"
//                   href="#"
//                   id="creatorsDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <img
//                     src={session.user?.image}
//                     width="25px"
//                     height="25px"
//                     className="rounded-circle"
//                     alt="Picture of the author"
//                   />
//                 </a>

//                 <ul
//                   className="dropdown-menu    nav-style "
//                   aria-labelledby="creatorsDropdown"
//                   style={{ marginLeft: "-127px" }}
//                 >
//                   <li>
//                     <a className="fs-6  fw-bolder dropdown-item  " href="#">
//                       Manage My Account
//                     </a>
//                     <Link href="/brand/dashboard">
//                       <a className="fs-6  fw-bolder dropdown-item">My Orders</a>
//                     </Link>
//                     <a className="fs-6  fw-bolder dropdown-item" href="#">
//                       My Reviews
//                     </a>

//                     <a className="fs-6  fw-bolder dropdown-item" href="#">
//                       My Returns & cancellation
//                     </a>
//                     <li>
//                       <hr className="dropdown-divider" />
//                     </li>
//                     {/* <a className="fs-6  fw-bolder dropdown-item" href="#">
//                       Become a Seller
//                     </a>
//                     <Link href="/brand/settings">
//                       <a className="fs-6  fw-bolder dropdown-item">Settings</a>
//                     </Link>

//                     <Link href="/brand/channel">
//                       <a className="fs-6  fw-bolder dropdown-item">Channel</a>
//                     </Link>
//                     <a className="fs-6  fw-bolder dropdown-item" href="#">
//                       Billing NEW
//                     </a>
//                     <li>
//                       <hr className="dropdown-divider" />
//                     </li> */}
//                     {/* <a className="fs-6  fw-bolder dropdown-item" href="#">
//                       English
//                     </a>
//                     <a className="fs-6  fw-bolder dropdown-item" href="#">
//                       $ USD
//                     </a> */}
//                     <a className="fs-6  fw-bolder dropdown-item" href="#">
//                       Help & support
//                     </a>
//                     <li>
//                       <hr className="dropdown-divider" />
//                     </li>
//                     <a
//                       className="fs-6  fw-bolder dropdown-item"
//                       href="#"
//                       onClick={signOut}
//                     >
//                       Logout
//                     </a>
//                   </li>

//                   {/* <li>
//                         <hr className="dropdown-divider" />
//                       </li>
//                       <li>
//                         <a className="fs-6  fw-bolder dropdown-item" href="#">
//                           WORK
//                         </a>
//                       </li> */}
//                 </ul>
//               </div>
//             </>
//           ) : (
//             // end
//             <>
//               <div className="d-flex">
//                 {/* <Image
//                   src="/home/icon-login.png"
//                   alt="Picture of the author"
//                   width={20}
//                   height={20}
//                   className="d-inline-block align-text-top  "
//                 /> */}
//                 <span
//                   className="me-1"
//                   style={{
//                     color: "#fe0098",
//                   }}
//                 >
//                   <i className="fs-4 fas fa-user-circle"></i>
//                 </span>

//                 <Link href="/login">
//                   <a className="ms-2   text-decoration-none text-dark">LOGIN</a>
//                 </Link>
//               </div>
//               <div className="text-center d-flex   ms-1">
//                 {/* <Image
//                   src="/home/icon-register.png"
//                   alt="icon-register"
//                   width={20}
//                   height={20}
//                   className=" ms-1"
//                 /> */}
//                 <span
//                   className="me-1"
//                   style={{
//                     color: "#fe0098",
//                   }}
//                 >
//                   <i className="fs-4 fas fa-key"></i>
//                 </span>
//                 <Link href="/signup">
//                   <a className="text-decoration-none text-dark ms-2">
//                     REGISTER
//                   </a>
//                 </Link>
//               </div>
//             </>
//           )}
//           {/* end */}
//         </div>
//       </nav>
//       {/* 2nd navbar */}
//       <nav className="container navbar navbar-expand-lg m-auto text-center   ">
//         <button
//           className="navbar-toggler expand-button "
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarTogglerDemo02"
//           aria-controls="navbarTogglerDemo02"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <FontAwesomeIcon
//             icon={faRectangleList}
//             className="me-1"
//             style={{
//               fontSize: 48,
//               color: "#fe0098",
//             }}
//           />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//           <ul className="navbar-nav m-auto   mb-lg-0">
//             {/* register  */}

//             <Link href="/" passhref>
//               <a
//                 className="nav-link   active  ms-4 text-dark "
//                 aria-current="page"
//               >
//                 <Image
//                   src="/home/house-solid.png"
//                   alt="Picture  house-solid"
//                   width={20}
//                   height={20}
//                   className=" "
//                 />
//               </a>
//             </Link>

//             <Link href="/todayDeals" passHref>
//               <a
//                 className="nav-link   active    text-dark "
//                 aria-current="page"
//               >
//                 Today Deals
//               </a>
//             </Link>
//             <Link href="/newArrivals" passHref>
//               <a className="nav-link ms-1 text-dark">New Arrivals</a>
//             </Link>
//             <Link href="/tops-collection" passHref>
//               <a className="nav-link ms-1 text-dark">Tops</a>
//             </Link>
//             <Link href="/gift-cards" passHref>
//               <a className="nav-link ms-1 text-dark">Gift Cards</a>
//             </Link>

//             <Link href="/customer-care" passHref>
//               <a className="nav-link  ms-1 text-dark" aria-current="page">
//                 Customer Care
//               </a>
//             </Link>
//             <Link href="/contact" passHref>
//               <a className="nav-link ms-1 text-dark">Contact</a>
//             </Link>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;



import React from 'react'

function Header() {
  return (
    <div><h1>header</h1></div>
  )
}

export default Header