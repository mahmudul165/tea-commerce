import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import FetchData from "./FetchData";

const SingleView = (props) => {
  const { getId, apiURL } = props;

  let [getData, setData] = useState(null);

  useEffect(() => {
    if (getId !== null) {
      FetchData(getId, apiURL, setData);
    }
  }, [getId, apiURL]);

  console.log({ getData });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mx-2">
          {getData?.image && (
            <div className="text-center  ele-center   my-4  card border-0">
              <img src={getData?.image} alt="Preview" width="280px" />
            </div>
          )}

          <p className="my-4 fs-4 ">{getData?.title}</p>

          <p className="my-4 fs-4 "> {getData?.name}</p>
          <p className="my-2 fs-5 "> {getData?.email}</p>
          <p className="my-2 fs-5 "> {getData?.phone}</p>

          {getData?.price && (
            <p className="fs-5 fw-bold">Price: ${getData?.price} </p>
          )}

          <p className="fs-5 fw-bold ">Description:</p>

          <p className="mt-4 text-justify">
            {getData?.body || getData?.description || getData?.message}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SingleView;
