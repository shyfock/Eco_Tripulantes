import React, { Component, createRef, useEffect } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import user from '../../assets/user.jpg';

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = this.props.chats
  chat = {
    date: "",
    msg: "",
    receiver: [],
    sender: [],
  }
  // [
  //   {
  //     date: 1,
  //     msg:
  //       "../../assets/user.jpg",
  //     type: "",
  //     msg: "HOla, como estas",
  //   },
  //   {
  //     key: 2,
  //     image:
  //     "../../assets/user.jpg",
  //     type: "other",
  //     msg: "bien ",
  //   },
  //   {
  //     key: 3,
  //     image:
  //       "../../assets/user.jpg",
  //     type: "other",
  //     msg: "y tu?",
  //   },
  //   {
  //     key: 4,
  //     image: {user},
  //     type: "",
  //     msg: "bien gracias",
  //   },
    
  // ];

  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image: {user}
          });
          this.setState({ chats: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image= {user}
              />
              <p>{this.props.username}</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chats.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  //key={itm.key}
                  user={itm.receiver[0].username !== this.props.username ? "other" : " "}
                  msg={itm.msg}
                  //image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
