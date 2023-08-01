import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Message from "./Message";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="main">
        <Topbar />
        {children}
      </div>
      {location.pathname !== "/messages" &&
        !location.pathname.includes("progress") && <Message />}
    </>
  );
};

export default Layout;
