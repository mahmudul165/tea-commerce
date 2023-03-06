import { useState  } from "react"; 
 
const useGlobal = () => { 
  
  // router.push("/signin", router.pathname);
  //router.pathname !== router.asPath ? router.push(router.asPath) : router.push("/")
   // search input catch
  const [searchInput, setInput] = useState("");
  const handleSearchChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
    console.log(searchInput);
  };
    
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
    patientLogin: {
      list: "/api/v1/patient/login",
      login: "/api/v1/patient/login",
    },
    therapistLogin: {
      list: "/api/v1/therapist/login",
      login: "/api/v1/therapist/login",
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
    subservice: {
      list: "/api/v1/subservice",
      create: "/api/v1/subservice/store",
      delete: "/api/v1/service/delete",
      edit: "",
    },
    therapist: {
      list: "/api/v1/therapist",
      create: "/api/v1/therapist/store",
      delete: "/api/v1/therapist/delete",
      edit: "",
    },
    therapistService: {
      list: "/api/v1/therapistService",
      create: "/api/v1/therapistService/store",
      delete: "/api/v1/therapistService/delete",
      edit: "",
    },

    therapist_type: {
      list: "/api/v1/therapist_type",
      create: "/api/v1/therapist_type/store",
      delete: "/api/v1/therapist_type/delete",
      edit: "",
    },

    patient: {
      list: "/api/v1/patient",
      create: "/api/v1/patient/store",
      delete: "/api/v1/patient/delete",
      edit: "",
    },

    ticket: {
      list: "/api/v1/ticket",
      create: "/api/v1/ticket/store",
      delete: "/api/v1/ticket/delete",
      edit: "/api/v1/ticket/update",
    },
    therapist_degree: {
      list: "/api/v1/therapist_degree",
      create: "/api/v1/therapist_degree/store",
      delete: "api/v1/therapist_degree/delete",
      edit: "",
    },
    appointment: {
      list: "/api/v1/appointment",
      create: "/api/v1/appointment/store",
      delete: "/api/v1/appointment/delete",
      edit: "",
    },
    blood_group: {
      list: "/api/v1/blood_group",
      create: "/api/v1/blood_group/store",
      delete: "/api/v1/blood_group/delete",
      edit: "",
    },
    ticket_department: {
      list: "/api/v1/ticket_department",
      create: "/api/v1/ticket_department/store",
      delete: "/api/v1/ticket_department/delete",
      edit: "",
    },
    state: {
      list: "/api/v1/state",
      create: "/api/v1/state/store",
      delete: "/api/v1/state/delete",
      edit: "",
    },

    occupation: {
      list: "/api/v1/occupation",
      create: "/api/v1/occupation/store",
      delete: "/api/v1/occupation/delete",
      edit: "",
    },
  };
  return { 
    handleSearchChange,  
    apiUrl 
    
  };
};

export default useGlobal;