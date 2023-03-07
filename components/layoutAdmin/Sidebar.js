import {
  AiOutlineClose,
  AiOutlineCloseSquare,
  AiOutlineDollarCircle,
  AiOutlineHome,
  AiOutlineUserAdd,
} from "react-icons/ai";
import {
  FaChartBar,
  FaCog,
  FaHome,
  FaRegUserCircle,
  FaUser,
} from "react-icons/fa";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CartItemsModal from "../common/CartItemsModal";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineUpdate } from "react-icons/md";
import { BsCardChecklist, BsCartCheck, BsSliders } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import CustomDropdown from "../admin/common/CustomDropdown";
import { MdNotificationsActive } from "react-icons/md";
import CustomModal from "../admin/common/CustomModal";
import { AddProductFrom } from "@/pages/admin/products";
import { FiEdit, FiSettings, FiTarget } from "react-icons/fi";

// const SidebarWrapper = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   z-index: 100;
//   padding-top: 56px;
//   overflow-x: hidden;
//   overflow-y: scroll; /* Add scrollbar */
//   background-color: #f8f9fa;
//   color: #fff;
// `;

const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;

  overflow-x: hidden;
  background-color: #f8f9fa;
  color: #fff;
`;

const SidebarHeader = styled.h6`
  padding: 0.875rem 0.25rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const SidebarNavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-size: 0.99rem;
  font-weight: 500;
  color: #212529;
  transition: all 0.3s ease;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #e9ecef;
  }

  &.active {
    color: #007bff;
    background-color: #fff;
    border-left: 3px solid #007bff;
  }
`;
const productsLi = ["products", "Add Product", "Option 3"];
const optionsProfile = ["Sultan", "admin@gmail.com", "Logout"];

const Sidebar = () => {
  const [modalShow, setModalShow] = useState(false);
  const menuHandler = () => {
    const sidebar = document.querySelector(".sidebar");
    const isCollapse = sidebar.classList.contains("collapse");
    if (isCollapse) {
      sidebar.classList.remove("collapse");
    } else {
      sidebar.classList.add("collapse");
    }

    //sidebar.classList.remove("collapse");
  };
  return (
    <SidebarWrapper className="  col-md-3 col-lg-2 d-md-block bg-light sidebar collapse ">
      <CustomModal
        name="Add Product"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddProductFrom />
      </CustomModal>
      <div className="position-sticky ">
        <SidebarHeader className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-muted">
          Sultan Tea
          <button
            className="border-0 bg-white rounded px-3 py-2 d-md-none d-sm-block d-xs-block"
            onClick={() => {
              menuHandler();
            }}
          >
            <AiOutlineClose className="fw-bold" size={20} />
          </button>
        </SidebarHeader>
        <ul className="nav flex-column">
          <li className="nav-item">
            <SidebarNavLink
              className="nav-link active"
              aria-current="page"
              href="dashboard"
            >
              <AiOutlineHome /> Dashboard
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink
              className="nav-link"
              href="#"
              onClick={() => {
                setModalShow(true);
              }}
            >
              <AiOutlineUserAdd /> Add Product
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <BsCardChecklist />
              <CustomDropdown options={productsLi} name="Products" />
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="/admin/orders">
              <BsCartCheck /> Orders
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="/admin/customers">
              <FaUsers /> Customers
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="/admin/sell">
              <AiOutlineDollarCircle /> Sell
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="/admin/gallery">
              <RiGalleryFill /> Gallery
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="/admin/carrier">
              <FiTarget /> Carrier
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="/admin/press-releases">
              <MdOutlineUpdate /> Press Releases
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="/admin/slide">
              <BsSliders /> Slide
            </SidebarNavLink>
          </li>
          <li className="nav-item ">
            <SidebarNavLink className="nav-link" href="#">
              <MdNotificationsActive /> Notification
            </SidebarNavLink>
          </li>
          <li className="nav-item ">
            <SidebarNavLink className="nav-link" href="#">
              <FaRegUserCircle />
              <CustomDropdown options={optionsProfile} name="Profile" />
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FiSettings /> Settings
            </SidebarNavLink>
          </li>
        </ul>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
