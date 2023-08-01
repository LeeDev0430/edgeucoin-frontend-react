import React, { useState } from "react";
import { ReactComponent as MessageIcon } from "../assets/Icons/Messages.svg";
import Avatar from "../assets/Images/avatar.jpg";
import { students, parents } from "../utils";

const Messages = () => {
  const [message, setMessage] = useState("");
  const Chat = () => {
    console.log("message", message);
    setMessage("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Chat();
    }
  };
  return (
    <div className="container messages">
      <div className="card messages">
        <div className="messages">
          <div className="title">Messages</div>
          <div className="chat-messages">
            <div className="message mime">
              <div className="name">Me</div>
              <div className="detail">
                <div className="avatar">
                  <img src={Avatar} alt="Avatar" />
                </div>
                <div className="text"></div>
              </div>
            </div>
            <div className="message other">
              <div className="name">(Student)Johannes Brown</div>
              <div className="detail">
                <div className="avatar">
                  <img src={Avatar} alt="Avatar" />
                </div>
                <div className="text"></div>
              </div>
            </div>
          </div>
          <div className="chat">
            <input
              type="text"
              placeholder="Type a new message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="icon" onClick={() => Chat()}>
              <MessageIcon />
            </div>
          </div>
        </div>
        <div className="users">
          <div className="part">
            <div className="title">Students</div>

            <div className="students">
              {students.map((student) => (
                <div className="student">
                  <div className="avatar">
                    <img src={student.avatar} alt="Avatar" />
                  </div>
                  <div className="detail">
                    <div className="name">{student.name}</div>
                    <div className="action">
                      <div className="status">
                        {student.status === "active" ? (
                          <div className="circle green" />
                        ) : (
                          <div className="circle red" />
                        )}
                        <div className="text">{student.status}</div>
                      </div>
                      <div
                        className={
                          student.action === "message+"
                            ? "action message plus"
                            : "action " + student.action
                        }
                      >
                        {student.action}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="part">
            <div className="title">Parents</div>
            <div className="parents">
              {parents.map((parent) => (
                <div className="parent">
                  <div className="avatar">
                    <img src={parent.avatar} alt="Avatar" />
                  </div>
                  <div className="detail">
                    <div className="name">{parent.name}</div>
                    <div className="action">
                      <div className="status">
                        {parent.status === "active" ? (
                          <div className="circle green" />
                        ) : (
                          <div className="circle red" />
                        )}
                        <div className="text">{parent.status}</div>
                      </div>
                      <div
                        className={
                          parent.action === "message+"
                            ? "action message plus"
                            : "action " + parent.action
                        }
                      >
                        {parent.action}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
