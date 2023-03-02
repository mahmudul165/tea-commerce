import { useSlideCollectionQuery } from "@/lib/hook/useApi";
import { useRouter } from "next/router";
import { Form, InputGroup } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import IconWithBackground from "./IconWithBackground";
import { SearchBar } from "./SearchBar";

const HeroBanner = ({ name }) =>{
  const router=useRouter();

const { data } = useSlideCollectionQuery();

// Find the slide 
const mySlide = data?.find(slide => slide.pathName === router.pathname);
console.log('test slider router path',mySlide, router.pathname);
  return (  
  <>
{mySlide ? 

    <div 
      className="position-relative"
      style={{
        backgroundImage: `url(${mySlide?.image})`,
      
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        height: "55vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
        className="   position-absolute w-100 bottom-0 py-4"
      >
        <div className="d-flex justify-content-between container align-items-center">
          <div>
            <h2 className="fs-4 fw-bold text-white "> {mySlide?.title}</h2>
            <p className="fs-6 text-white ">Home / {name}</p>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
    :
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
          backgroundColor: "rgba(255, 255, 255, 0.2)",
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
    } 
  </>
);}

export default HeroBanner;
