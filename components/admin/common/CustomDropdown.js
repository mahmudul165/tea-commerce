import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { Dropdown } from "react-bootstrap";
// import { DropdownButton } from "react-bootstrap";

// function CustomDropdown({ options, onSelect }) {
//   return (
//     <div className="cus-dropdown">
//       <DropdownButton id="dropdown-basic-button" title="Dropdown" as="li">
//         {options.map((option) => (
//           <Dropdown.Item key={option} onClick={() => onSelect(option)}>
//             {option}
//           </Dropdown.Item>
//         ))}
//       </DropdownButton>
//     </div>
//   );
// }

const CustomDropdown = ({ options, name }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cus-dropdown-menu">
      <div className="cus-dropdown-header" onClick={toggleMenu}>
        <span className="header-text"> {name} </span>
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}>
          <MdKeyboardArrowRight size={25} />
        </span>
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""} shadow-sm`}>
        <ul class="nav ">
          <li class="nav-item">
            <a class="nav-link active fs-6" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link fs-6" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
