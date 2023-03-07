import Link from "next/link";
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
  const dropdownRef = React.useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="cus-dropdown-menu">
      <div className="cus-dropdown-header" onClick={toggleMenu}>
        <span className="header-text"> {name} </span>
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}>
          <MdKeyboardArrowRight size={24} className="text-secondary fw-bold" />
        </span>
      </div>
      <div className={`menu-items ${isOpen ? "open" : ""} shadow-lg `}>
        <ul class="nav p-1 ">
          {options &&
            options.map((el) => (
              <li class="nav-item" key={el}>
                <Link
                  class="nav-link active fs-6 text-capitalize"
                  aria-current="page"
                  href={el}
                >
                  {el}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomDropdown;
