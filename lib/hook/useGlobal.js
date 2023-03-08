import { useState  } from "react"; 
 
const useGlobal = () => { 
  
  const [token, setToken] = useState("");  
  const [email, setEmail] = useState("");
  const [items, setItems] = useState(""); 
  const [status, setLoginstatus] = useState(false);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("token");     
  //   const name = localStorage.getItem("name");
  //   const info = localStorage.getItem("token");  
  //   const value = localStorage.getItem("isLogin")  
  //   if (jwt) {
  //     setToken(jwt);     
  //     setUsername(name);
  //     setItems(info);
  //     setLoginstatus(value);      
  //   }
  // }, [token]);

    
  const apiUrl = {
    apiRootUrl : "https://crabby-pocketbook-eel.cyclic.app",
    apiEndpoint:{
      login:'api/v1/login',
      product:'api/v1/product',
      carrier:'api/v1/carrier',
      business:'api/v1/business',
      gallery:'api/v1/gallery',
      slide:'api/v1/slide',
    },
 
    adminLogin: {
      list: "/api/v1/admin/login",
      login: "/api/v1/admin/login",
    },
    service: {
      list: "/api/v1/service",
      create: "/api/v1/service/store",
      delete: "/api/v1/service/delete",
      edit: "",
    },
  

  };
  return { 
    token, setToken,email, setEmail,items, setItems,status, setLoginstatus,
    apiUrl     
  };
};

export default useGlobal;