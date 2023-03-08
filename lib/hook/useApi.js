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
