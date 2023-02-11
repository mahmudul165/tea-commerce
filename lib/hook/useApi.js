import { useQuery } from "react-query";
import axios from "axios";
// get category service data
const fetchTopCollection = async () => {
  const response = await fetch(
    "https://arshi365.lamptechs.com/api/admin/todaysDeal"
  );
  return await response.json();
};
export const useTopCollectionQuery = () =>
  useQuery(["TopCollection"], fetchTopCollection, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
