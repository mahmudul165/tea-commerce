import { Form, InputGroup } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import IconWithBackground from "./IconWithBackground";

const SearchBar = ({ btnColor }) => {
  return (
    <>
      <InputGroup className="">
        <Form.Control
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <button type="button">
          {btnColor === "primary" ? (
            <IconWithBackground type="primary">
              <GoSearch size={22} />
            </IconWithBackground>
          ) : (
            <IconWithBackground>
              <GoSearch size={22} />
            </IconWithBackground>
          )}
        </button>
      </InputGroup>
    </>
  );
};

export { SearchBar };
