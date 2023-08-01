import React, { useState } from "react";
import { ReactComponent as BiArrow } from "../assets/Icons/Bi Arrow.svg";
import { ReactComponent as Search } from "../assets/Icons/Search - New Gray.svg";
import { goals } from "../utils";
import { Link } from "react-router-dom";

const Goals = () => {
  const [type, setType] = useState("behavior");
  return (
    <div className="container">
      <div className="header">
        <div className="title">Goals</div>
        <Link to="/goals/new">
          <div className="btn">
            <div className="text">New Goal</div>
            <div className="plus">+</div>
          </div>
        </Link>
      </div>
      <div className="card goals">
        <div className="filter">
          <div className="type">
            <div
              className={type === "behavior" ? "behavior bold" : "behavior"}
              onClick={() => setType("behavior")}
            >
              Behavioral
            </div>
            <div
              className={type === "academic" ? "academic bold" : "academic"}
              onClick={() => setType("academic")}
            >
              Academic
            </div>
          </div>
          <div className="btn">
            <div className="text">Filter</div>
            <div className="icon">
              <BiArrow />
            </div>
          </div>
        </div>
        <div className="search">
          <input type="search" placeholder="Search for a goal" />
          <div className="btn">
            <Search />
          </div>
        </div>
        {goals.map((goal) => (
          <div className="goal">
            <div className="detail">
              <div className="step">Goal {goal.step}</div>
              <div className="name">{goal.name}</div>
            </div>
            <div className="action">
              <div className="btn">Edit</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
