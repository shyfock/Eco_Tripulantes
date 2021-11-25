import React from "react";
import Home from "../component/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "../component/Register";
import Login from "../component/Login";
import Chat from "../component/Chat";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/Chat" element={<Chat/>}/>
            </Routes>
        </Router>

    );
}

export default App;