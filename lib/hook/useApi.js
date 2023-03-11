// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// const fetchSlideCollection = async () => {
//   const response = await axios.get(
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide"
//   );
//   return response.data;
// };

// export const useSlideCollectionQuery = () =>
//   useQuery(["SlideCollection"], fetchSlideCollection, {
//     refetchInterval: 16000,
//   });

// const fetchOrderCollection = async () => {
//   const response = await axios.get(
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/order"
//   );
//   return response.data;
// };

// export const useOrderCollectionQuery = () =>
//   useQuery(["OrderCollection"], fetchOrderCollection, {
//     //  refetchOnMount: false,
//     // refetchOnWindowFocus: false,
//     refetchInterval: 5000,
//   });
// const fetchProductCollection = async () => {
//   const response = await axios.get(
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/product"
//   );
//   return response.data;
// };

// export const useProductCollectionQuery = () =>
//   useQuery(["ProductCollection"], fetchProductCollection, {
//     // refetchOnMount: false,
//     // refetchOnWindowFocus: false,
//     refetchInterval: 7000,
//   });

// const fetchCarrierCollection = async () => {
//   const response = await axios.get(
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier"
//   );
//   return response.data;
// };

// export const useCarrierCollectionQuery = () =>
//   useQuery(["CarrierCollection"], fetchCarrierCollection, {
//     // refetchOnMount: false,
//     // refetchOnWindowFocus: false,
//     refetchInterval: 13000,
//   });

// const fetchGalleryCollection = async () => {
//   const response = await axios.get(
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery"
//   );
//   return response.data;
// };

// export const useGalleryCollectionQuery = () =>
//   useQuery(["GalleryCollection"], fetchGalleryCollection, {
//     // refetchOnMount: false,
//     // refetchOnWindowFocus: false,
//     refetchInterval: 15000,
//   });




//   const fetchBuninessCollection = async () => {
//     const response = await axios.get(
//       "https://crabby-pocketbook-eel.cyclic.app/api/v1/business"
//     );
//     return response.data;
//   };
  
//   export const useBuninessCollectionQuery = () =>
//     useQuery(["BusinessCollection"], fetchBuninessCollection, {
//       // refetchOnMount: false,
//       // refetchOnWindowFocus: false,
//       refetchInterval: 15000,
//     });


//   const fetchUSerCollection = async () => {
//     const response = await axios.get(
//       "https://crabby-pocketbook-eel.cyclic.app/api/v1/login"
//     );
//     return response.data;
//   };
  
//   export const useUserCollectionQuery = () =>
//     useQuery(["UserCollection"], fetchUSerCollection, {
//       // refetchOnMount: false,
//       // refetchOnWindowFocus: false,
//       refetchInterval: 60000,
//     });
  
//     const fetchContactCollection = async () => {
//       const response = await axios.get(
//         "https://crabby-pocketbook-eel.cyclic.app/api/v1/contact"
//       );
//       return response.data;
//     };
    
//     export const useContactCollectionQuery = () =>
//       useQuery(["ContactCollection"], fetchContactCollection, {
//         // refetchOnMount: false,
//         // refetchOnWindowFocus: false,
//         refetchInterval: 20000,
//       });
    
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const useCollectionQuery = (collection, url, refetchInterval) =>
  useQuery([collection], () => fetchData(url), {
    refetchInterval,
    onError: (error) => {
      console.error(`Error fetching ${collection} collection:`, error);
    },
  });

export const useSlideCollectionQuery = () =>
  useCollectionQuery(
    "SlideCollection",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide",
    16000
  );

export const useOrderCollectionQuery = () =>
  useCollectionQuery(
    "OrderCollection",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/order",
    5000
  );

export const useProductCollectionQuery = () =>
  useCollectionQuery(
    "ProductCollection",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/product",
    7000
  );

export const useCarrierCollectionQuery = () =>
  useCollectionQuery(
    "CarrierCollection",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier",
    13000
  );

export const useGalleryCollectionQuery = () =>
  useCollectionQuery(
    "GalleryCollection",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery",
    15000
  );

export const useBuninessCollectionQuery = () =>
  useCollectionQuery(
    "BusinessCollection",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/business",
    15000
  );

export const useUserCollectionQuery = () =>
  useCollectionQuery(
    "UserCollection",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/login",
    60000
  );

export const useContactCollectionQuery = () =>
  useCollectionQuery(
    "Contact",
    "https://crabby-pocketbook-eel.cyclic.app/api/v1/contact",
    20000
  );
