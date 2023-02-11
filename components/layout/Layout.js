import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
 
 

function Layout({ children }) {
  return (
    <>
      
      <div className="container ">
      <Header />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  );
}

export default Layout;
