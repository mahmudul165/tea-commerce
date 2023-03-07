// components/Header.js
import { FaRegUserCircle } from "react-icons/fa";
import CustomDropdown from "../admin/common/CustomDropdown";

const options = ["Sultan", "admin@gmail.com", "Logout"];
const Header = () => {
  const menuHandler = () => {
    const sidebar = document.querySelector(".sidebar");
    const isCollapse = sidebar.classList.contains("collapse");
    if (isCollapse) {
      sidebar.classList.remove("collapse");
    } else {
      sidebar.classList.add("collapse");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom ">
      <div className="container-fluid">
        <a className="navbar-brand ml-220 " href="#">
          Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            menuHandler();
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto ">
            <FaRegUserCircle size={24} className="me-2" />
            <CustomDropdown options={options} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
