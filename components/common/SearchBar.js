import { Form, InputGroup } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import IconWithBackground from "./IconWithBackground";

const SearchBar = () => {
  return (
    <>
      <InputGroup className="">
        <Form.Control
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <button type="button">
          <IconWithBackground>
            <GoSearch size={22} />
          </IconWithBackground>
        </button>
      </InputGroup>
    </>
  );
};

export { SearchBar };
