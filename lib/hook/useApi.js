// import { useQuery } from "@tanstack/react-query";
// // get slider data
// const fetchSlideCollection = async () => {
//   const response = await fetch(
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide"
//   );
//   return await response.json();
// };
// export const useSlideCollectionQuery = () =>
//   useQuery(["SlideCollection"], fetchSlideCollection, {
//     // refetchOnMount: false,
//     // refetchOnWindowFocus: false,
//   });

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSlideCollection = async () => {
  const response = await axios.get(
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide"
  );
  return response.data;
};

export const useSlideCollectionQuery = () =>
  useQuery(["SlideCollection"], fetchSlideCollection, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });

const fetchOrderCollection = async () => {
  const response = await axios.get(
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/order"
  );
  return response.data;
};

export const useOrderCollectionQuery = () =>
  useQuery(["OrderCollection"], fetchOrderCollection, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
const fetchProductCollection = async () => {
  const response = await axios.get(
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/product"
  );
  return response.data;
};

export const useProductCollectionQuery = () =>
  useQuery(["ProductCollection"], fetchProductCollection, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });

const fetchCarrierCollection = async () => {
  const response = await axios.get(
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier"
  );
  return response.data;
};

export const useCarrierCollectionQuery = () =>
  useQuery(["CarrierCollection"], fetchCarrierCollection, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });

const fetchGalleryCollection = async () => {
  const response = await axios.get(
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery"
  );
  return response.data;
};

export const useGalleryCollectionQuery = () =>
  useQuery(["GalleryCollection"], fetchGalleryCollection, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
