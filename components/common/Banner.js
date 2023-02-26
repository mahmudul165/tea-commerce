import { Form, InputGroup } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import IconWithBackground from "./IconWithBackground";
import { SearchBar } from "./SearchBar";

const HeroBanner = ({ name }) => (
  <>
    <div
      className="position-relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/0hy2GWR/Rectangle-45.png)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        height: "55vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
        className="   position-absolute w-100 bottom-0 py-4"
      >
        <div className="d-flex justify-content-between container align-items-center">
          <div>
            <h2 className="fs-4 fw-bold text-white "> {name}</h2>
            <p className="fs-6 text-white ">Home / {name}</p>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HeroBanner;
