import React from "react";
import { ReactComponent as BiArrow } from "../assets/Icons/Bi Arrow.svg";
import { rewards } from "../utils";
import { Link } from "react-router-dom";

const Rewards = () => {
  return (
    <div className="container rewards">
      <div className="header">
        <div className="title">Rewards</div>
        <Link to="/rewards/new">
          <div className="btn">
            <div className="text">New Rewards</div>
            <div className="plus">+</div>
          </div>
        </Link>
      </div>
      <div className="card rewards">
        <div className="filter">
          <div className="search">
            <input type="text" placeholder="Search for a reward" />
            <div className="search-icon">
              <div className="icon" />
            </div>
          </div>
          <div className="btn">
            <div className="text">Filter</div>
            <div className="icon">
              <BiArrow />
            </div>
          </div>
        </div>
        <div className="rewards">
          {rewards.map((reward) => (
            <div className="reward">
              <div className="detail">
                <div className="image">
                  <img src={reward.image} alt="reward" />
                </div>
                <div className="name">{reward.name}</div>
              </div>
              <div className="btn">Edit</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
