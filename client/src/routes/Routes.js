import React from "react";
import Home from "../component/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "../component/Register";
import Login from "../component/Login";
import PrivateRoute from "../component/auth/privateroute";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <PrivateRoute exact path={['/', '/home']} component={<Home/>}/>
            </Routes>

        </Router>

    );
}

export default App;