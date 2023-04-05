import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import FetchData from "./FetchData";
import { dateFormat } from "./Fomater";

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
              <img
                src={getData?.image || getData?.url}
                alt="Preview"
                width="280px"
              />
            </div>
          )}
          {getData?.url && (
            <div className="text-center  ele-center   my-4  card border-0">
              <img
                src={getData?.image || getData?.url}
                alt="Preview"
                width="280px"
              />
            </div>
          )}

          {/* View for Contact    */}
          <p className="my-4 fs-4 text-capitalize "> {getData?.name}</p>
          {getData?.email && (
            <p className="my-2 fs-5 ">Mail: {getData?.email}</p>
          )}
          {getData?.phone && (
            <p className="my-2 fs-5 ">Call: {getData?.phone}</p>
          )}
          {/* View End contact   */}

          {/* View for gallery   */}
          {getData?.createdOn && (
            <p className="fw-bold">
              Created At: {dateFormat(getData?.createdOn)}
            </p>
          )}

          {getData?.category && (
            <p className="fw-bold">Category: {getData?.category}</p>
          )}

          {/* End gallery   */}

          <p className="my-4 fs-4 ">{getData?.title}</p>

          {getData?.price && (
            <p className="fs-5 fw-bold">Price: ${getData?.price} </p>
          )}

          {!getData?.url && <p className="fs-5 mt-2 fw-bold ">Description:</p>}

          <p className="mt-4 text-justify">
            {getData?.body || getData?.description || getData?.message}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SingleView;
