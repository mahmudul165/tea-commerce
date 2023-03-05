import { FaChartBar, FaCog, FaHome, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
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
  padding: 0.875rem .25rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const SidebarNavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-size: 0.95rem;
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

const Sidebar = () => {
  return (
    <SidebarWrapper className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky ">
        <SidebarHeader className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          Sultan Tea
        </SidebarHeader>
        <ul className="nav flex-column">
          <li className="nav-item">
            <SidebarNavLink className="nav-link active" aria-current="page" href="#">
              <FaHome /> Dashboard
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaChartBar /> Analytics
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaChartBar /> Analytics
            </SidebarNavLink>
            <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaUser /> Customers
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaCog /> Settings
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaChartBar /> Analytics
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaUser /> Customers
            </SidebarNavLink>
          </li>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaUser /> Customers
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaCog /> Settings
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaUser /> Customers
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaCog /> Settings
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaChartBar /> Analytics
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaUser /> Customers
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaChartBar /> Analytics
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaUser /> Customers
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaCog /> Settings
            </SidebarNavLink>
          </li>
          <li className="nav-item">
            <SidebarNavLink className="nav-link" href="#">
              <FaCog /> Settings
            </SidebarNavLink>
          </li>
        </ul>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
