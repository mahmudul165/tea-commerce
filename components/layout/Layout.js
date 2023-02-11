import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
 
 

function Layout({ children }) {
  return (
    <>
      
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
