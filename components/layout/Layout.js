import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
 
 

function Layout({ children }) {
  return (
    <>
      
      
      <Header />
      <main>

      <div className="px-2 ">
        
        
        {children}
        
        </div>
        </main>
      <Footer />
       
    </>
  );
}

export default Layout;
