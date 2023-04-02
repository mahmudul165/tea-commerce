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

// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// const fetchData = async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// };

// export const useCollectionQuery = (collection, url, refetchInterval) =>
//   useQuery([collection], () => fetchData(url), {
//     refetchInterval,
//     onError: (error) => {
//       console.error(`Error fetching ${collection} collection:`, error);
//     },
//   });

// export const useSlideCollectionQuery = () =>
//   useCollectionQuery(
//     "SlideCollection",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide",
//     16000
//   );

// export const useOrderCollectionQuery = () =>
//   useCollectionQuery(
//     "OrderCollection",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/order",
//     5000
//   );

// export const useProductCollectionQuery = () =>
//   useCollectionQuery(
//     "ProductCollection",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/product",
//     7000
//   );

// export const useCarrierCollectionQuery = () =>
//   useCollectionQuery(
//     "CarrierCollection",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier",
//     13000
//   );

// export const useGalleryCollectionQuery = () =>
//   useCollectionQuery(
//     "GalleryCollection",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery",
//     15000
//   );

// export const useBuninessCollectionQuery = () =>
//   useCollectionQuery(
//     "BusinessCollection",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/business",
//     15000
//   );

// export const useUserCollectionQuery = () =>
//   useCollectionQuery(
//     "UserCollection",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/login",
//     60000
//   );

// export const useContactCollectionQuery = () =>
//   useCollectionQuery(
//     "Contact",
//     "https://crabby-pocketbook-eel.cyclic.app/api/v1/contact",
//     20000
//   );

// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// const SLIDE_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide";
// const ORDER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/order";
// const PRODUCT_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/product";
// const CARRIER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier";
// const GALLERY_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery";
// const BUSINESS_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/business";
// const USER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/login";
// const CONTACT_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/contact";

// const useCollectionQuery = (collection, url, refetchInterval) =>
//   useQuery([collection], () => fetchData(url), {
//     refetchInterval,
//     onError: (error) => {
//       console.error(`Error fetching ${collection} collection:`, error);
//     },
//   });

// const fetchData = async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// };

// export const useSlideCollectionQuery = () =>
//   useCollectionQuery("SlideCollection", SLIDE_ENDPOINT, 16000);

// export const useOrderCollectionQuery = () =>
//   useCollectionQuery("OrderCollection", ORDER_ENDPOINT, 5000);

// export const useProductCollectionQuery = () =>
//   useCollectionQuery("ProductCollection", PRODUCT_ENDPOINT, 7000);

// export const useCarrierCollectionQuery = () =>
//   useCollectionQuery("CarrierCollection", CARRIER_ENDPOINT, 13000);

// export const useGalleryCollectionQuery = () =>
//   useCollectionQuery("GalleryCollection", GALLERY_ENDPOINT, 15000);

// export const useBuninessCollectionQuery = () =>
//   useCollectionQuery("BusinessCollection", BUSINESS_ENDPOINT, 15000);

// export const useUserCollectionQuery = () =>
//   useCollectionQuery("UserCollection", USER_ENDPOINT, 60000);

// export const useContactCollectionQuery = () =>
//   useCollectionQuery("Contact", CONTACT_ENDPOINT, 20000);

// optimize code
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// const SLIDE_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide";
// const ORDER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/order";
// const PRODUCT_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/product";
// const CARRIER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier";
// const GALLERY_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery";
// const BUSINESS_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/business";
// const USER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/login";
// const CONTACT_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/contact";

// const useCollectionQuery = (collection, url, refetchInterval) =>
//   useQuery([collection], async () => {
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching ${collection} collection: ${error.message}`);
//       throw error;
//     }
//   }, {
//     refetchInterval,
//     staleTime: 10000, // data considered fresh for 10 seconds
//     cacheTime: 60000, // data cached for 1 minute
//     cacheKey: collection // use collection name as cache key
//   });

// export const useSlideCollectionQuery = () =>
//   useCollectionQuery("SlideCollection", SLIDE_ENDPOINT, 16000);

// export const useOrderCollectionQuery = () =>
//   useCollectionQuery("OrderCollection", ORDER_ENDPOINT, 5000);

// export const useProductCollectionQuery = () =>
//   useCollectionQuery("ProductCollection", PRODUCT_ENDPOINT, 7000);

// export const useCarrierCollectionQuery = () =>
//   useCollectionQuery("CarrierCollection", CARRIER_ENDPOINT, 13000);

// export const useGalleryCollectionQuery = () =>
//   useCollectionQuery("GalleryCollection", GALLERY_ENDPOINT, 15000);

// export const useBuninessCollectionQuery = () =>
//   useCollectionQuery("BusinessCollection", BUSINESS_ENDPOINT, 15000);

// export const useUserCollectionQuery = () =>
//   useCollectionQuery("UserCollection", USER_ENDPOINT, 60000);

// export const useContactCollectionQuery = () =>
//   useCollectionQuery("Contact", CONTACT_ENDPOINT, 20000);

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const SLIDE_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide";
const ORDER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/order";
export const PRODUCT_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/product";
export const CARRIER_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier";
export const GALLERY_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery";
export const BUSINESS_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/business";
const USER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/login";
const CONTACT_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/contact";
export const BRANDS_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/brand";
export const PRESS_ENDPOINT =
  "https://crabby-pocketbook-eel.cyclic.app/api/v1/press";

const useCollectionQuery = (
  collection,
  url,
  refetchInterval,
  staleTime,
  cacheTime
) =>
  useQuery(
    [collection],
    async () => {
      try {
        const response = await axios.get(url);
        return response.data;
        // const response = await axios.get(url);
        // const parsedData = JSON.parse(response.data);
        // console.log('response data',response)
        // console.log('JSON.parse data',parsedData)
        // return parsedData;
      } catch (error) {
        console.error(
          `Error fetching ${collection} collection: ${error.message}`
        );
        throw error;
      }
    },
    {
      refetchInterval,
      staleTime,
      cacheTime,
      cacheKey: collection,
    }
  );

export const useSlideCollectionQuery = () =>
  useCollectionQuery("SlideCollection", SLIDE_ENDPOINT, 5000, 5000, 60000);

export const useOrderCollectionQuery = () =>
  useCollectionQuery("OrderCollection", ORDER_ENDPOINT, 10000, 10000, 120000);

export const useProductCollectionQuery = () =>
  useCollectionQuery("ProductCollection", PRODUCT_ENDPOINT, 7000, 7000, 90000);

export const useCarrierCollectionQuery = () =>
  useCollectionQuery(
    "CarrierCollection",
    CARRIER_ENDPOINT,
    15000,
    15000,
    180000
  );

export const useGalleryCollectionQuery = () =>
  useCollectionQuery(
    "GalleryCollection",
    GALLERY_ENDPOINT,
    20000,
    20000,
    240000
  );

export const useBuninessCollectionQuery = () =>
  useCollectionQuery(
    "BusinessCollection",
    BUSINESS_ENDPOINT,
    19000,
    19000,
    360000
  );

export const useUserCollectionQuery = () =>
  useCollectionQuery("UserCollection", USER_ENDPOINT, 60000, 60000, 720000);

export const useContactCollectionQuery = () =>
  useCollectionQuery("Contact", CONTACT_ENDPOINT, 20000, 20000, 240000);

export const useBrandsCollectionQuery = () =>
  useCollectionQuery("Brands", BRANDS_ENDPOINT, 20000, 20000, 240000);
export const usePressCollectionQuery = () =>
  useCollectionQuery("Press", PRESS_ENDPOINT, 15000, 15000, 240000);
