import { useRouter } from "next/router";
import { useEffect } from "react";
import LayoutAdmin from "@/components/layoutAdmin/Layoutt";
import AuthProvider from "@/lib/contexts/AuthProvider";
const PrivateRoute = ({ children }) => {
  const router = useRouter();

//   useEffect(() => {
//     const isLoggedIn = sessionStorage.getItem("isLoggedIn");
//     const user = sessionStorage.getItem("user");

//     if (!isLoggedIn && !user) {
//       router.push("/admin");
//     }
//   }, []);

  return (
    <AuthProvider>
      {" "}
      <LayoutAdmin> {children} </LayoutAdmin>
    </AuthProvider>
  );
};

export default PrivateRoute;
