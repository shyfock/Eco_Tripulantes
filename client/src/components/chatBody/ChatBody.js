import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import { request, getUser } from "../helper"


export default class ChatBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      chats: [],
    };
  }
  
  componentDidMount() {
    this.getChats();
    this.setState({ 'username': getUser()});
  }

  getChats() {
    request
    .get(`${this.props.url}`)
    .then((response) => {
      this.setState({ chats: response.data })
      console.log(this.state.chats)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent 
          chats={this.state.chats}
          username={this.state.username}
        />
          
        <UserProfile
          username={this.state.username}
        />
      </div>
    );
  }
}
