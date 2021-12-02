import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import { request } from "../helper"
import Cookies from "universal-cookie";

const cookies = new Cookies();


export default class ChatBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userId: '',
      chats: [],
      userList: [],
    };
  }
  
  componentDidMount() {
    
    this.setState({ 'username': cookies.get('_username')});
    this.setState({ 'userId': cookies.get('_userId')})
    
    this.getChats();
    this.setState({userList: this.getUserList()})
  }

  componentDidUpdate() {
    console.log(this.state.userList)
    
  }

  getUserList() {
    const lista = [];
    this.state.chats.map(
      (chat) => {
        lista.push(chat["sender"][0])
        lista.push(chat.receiver[0])
        return lista;
      }
    )
    console.log({"lista": lista})
  }

  async getChats() {
    await request
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
          userId={this.state.userId}
        />
          
        <UserProfile
          username={this.state.username}
        />
      </div>
    );
  }
}
