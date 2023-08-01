import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Icons/Logo.svg";
import { ReactComponent as StudentIcon } from "../assets/Icons/Student.svg";
import { ReactComponent as GoalIcon } from "../assets/Icons/Goals.svg";
import { ReactComponent as MessageIcon } from "../assets/Icons/Messages.svg";
import { ReactComponent as RewardsIcon } from "../assets/Icons/Rewards.svg";
import { ReactComponent as TrackingIcon } from "../assets/Icons/Tracking.svg";

const Navbar = () => {
  const link = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="navmenu">
        <Link to="/" className={link.pathname === "/" ? "active" : ""}>
          <div className="text">Dashboard</div>
        </Link>
        <Link
          to="/students"
          className={link.pathname.startsWith("/students") ? "active" : ""}
        >
          <StudentIcon />
          <div className="text">Students</div>
        </Link>
        <Link
          to="/goals"
          className={link.pathname.startsWith("/goals") ? "active" : ""}
        >
          <GoalIcon />
          <div className="text">Goals</div>
        </Link>
        <Link
          to="/messages"
          className={link.pathname === "/messages" ? "active" : ""}
        >
          <MessageIcon />
          <div className="text">Messages</div>
        </Link>
        <Link
          to="/rewards"
          className={link.pathname.startsWith("/rewards") ? "active" : ""}
        >
          <RewardsIcon />
          <div className="text">Rewards</div>
        </Link>
        <Link
          to="/tracking"
          className={link.pathname === "/tracking" ? "active" : ""}
        >
          <TrackingIcon />
          <div className="text">Tracking</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
