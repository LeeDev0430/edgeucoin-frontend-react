import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as BiArrow } from "../assets/Icons/Bi Arrow.svg";

const Topbar = () => {
  const location = useLocation();
  return (
    <div className="topbar">
      <div className="search">
        <input
          className="small-text"
          type="text"
          placeholder="Type a new message"
        />
        <div className="search-icon">
          <div className="icon" />
        </div>
      </div>
      <div className="circles">
        <div className="circle first" />
        <div className="circle second" />
      </div>
      {location.pathname.includes("progress") && (
        <div className="message">
          <div className="text bold">Message</div>
          <div className="btn">
            <BiArrow />
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
