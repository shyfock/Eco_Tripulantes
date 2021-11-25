import React from "react";

import '../assets/chat.css';
import Navegation from "../layouts/Navegation";
import ChatBody from "./chatBody/ChatBody";
import Nav from "./nav/Nav";


const Chat = () => {
    return (
        <>
        <Navegation/>
        <div className="__main" >
            <Nav/>
            <ChatBody/>
            

        </div>
        </>
    );

}

export default Chat;