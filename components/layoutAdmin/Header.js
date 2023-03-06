// components/Header.js
import { BsPerson } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
// console.log({ sidebar });
// const sidebar = document.querySelector(".sidebar");

// useEffect(() => {

// }, []);
const Header = () => {
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-secondary" type="submit">
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FiBell />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Notification 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Notification 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Notification 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BsPerson className="me-2" />
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
