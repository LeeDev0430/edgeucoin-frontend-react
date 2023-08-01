import React from "react";
import { ReactComponent as BiArrow } from "../assets/Icons/Bi Arrow.svg";
import { ReactComponent as DownArrow } from "../assets/Icons/DownArrow.svg";

const Message = () => {
  return (
    <div className="message-sidebar">
      <div className="title">Messages</div>

      <div className="chat-container">
        <div className="users">
          <div className="user-group">
            <div className="user">
              <div className="name small-text medium">Student</div>
              <div className="icon">
                <DownArrow />
              </div>
            </div>
            <div className="user">
              <div className="name small-text medium">Johannes Bro</div>
              <div className="icon">
                <DownArrow />
              </div>
            </div>
          </div>

          <div className="btn">
            <BiArrow />
          </div>
        </div>
        <div className="messages"></div>
        <div className="chat">
          <input type="text" placeholder="Type a new message" />
          <div className="btn">
            <div className="icon message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
