import React from "react";
import { students } from "../utils";
import { Link } from "react-router-dom";

const Home = () => {
  const getColor = (point) => {
    if (point === 3) {
      return "#F4B200";
    } else if (point < 3) {
      return "#913A7E";
    } else {
      return "#CCCC00";
    }
  };
  return (
    <div className="container">
      <div className="welcome text">
        <div className="title">
          Welcome back <span>Stephanie</span>
        </div>
        <div className="text medium">
          <span className="bold">80%</span> of your students engaged
          <br />
          their assignments this week.
        </div>
      </div>
      <div className="category">
        <div className="card students">
          <div className="label">Students</div>
          <div className="number">4</div>
        </div>
        <div className="card goals">
          <div className="label">Goals</div>
          <div className="number">3</div>
        </div>
      </div>
      <div className="details">
        <div className="card">
          <div className="title">Student Engagement</div>
          <div className="content">
            <div className="row">
              <div className="label">Students</div>
              <div className="label">Coins Earned</div>
            </div>
            <div className="divider" />
            {students.map((student) => (
              <div className="row">
                <div className="name">{student.name}</div>

                <div
                  className="result"
                  style={{ color: getColor(student.earned) }}
                >
                  <div className="line">
                    <div
                      className="progress"
                      style={{
                        width: 100 * (student.earned / 5) + "%",
                      }}
                    />
                  </div>
                  <div className="text">{student.earned} of 5</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="title">Ready for redemption</div>
          {students.map((student) => (
            <div className="row">
              <div className="detail">
                <div className="image">
                  <img src={student.image} alt="goal" />
                </div>
                <div className="name">{student.name}</div>
              </div>
              <Link to={"/students/" + student.id}>
                <div className="btn">View</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="card more">
        <div className="title">More Content</div>
      </div>
    </div>
  );
};

export default Home;
