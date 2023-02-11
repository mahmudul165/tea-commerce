import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const useGlobal = () => {
  const [path, setpath] = useState({});
  const { data: session } = useSession();
  const router = useRouter();

  const signInUsingGoogle = () => {};

  const logOut = () => {};

  // router.push("/signin", router.pathname);
  //router.pathname !== router.asPath ? router.push(router.asPath) : router.push("/")

  const BuyNow = async () => {
    !session
      ? await router.push("/login", setpath(router.asPath))
      : await router.push("/checkout");
  };
  // search input catch
  const [searchInput, setInput] = useState("");
  const handleSearchChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
    console.log(searchInput);
  };

  return {
    session,
    signInUsingGoogle,
    logOut,
    BuyNow,
    handleSearchChange,
    path,
    searchInput,
  };
};

export default useGlobal;
