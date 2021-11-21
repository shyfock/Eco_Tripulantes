import React from "react";
import Home from "../components/Home";
import Chat from '../components/chat';
import Publications from '../components/publications';
import Publication from '../components/publication';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "../components/Register";
import Login from "../components/Login";
import Navegation from "../layouts/Navegation";
// import PrivateRoute from "../component/auth/privateroute";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navegation/>}>
                    <Route path="/home" index element={<Home/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    {/* <PrivateRoute exact path={['/', '/home']} component={<Home/>}/> */}
                    
                    <Route exact path="/chat" element={<Chat/>}/>
                    <Route path="/publications" element={<Publications/>}>
                        <Route
                            index
                            element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select a publication</p>
                            </main>
                            }
                        />
                        <Route exact path=":publicationId" element={<Publication/>}/>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{
                                padding: "1rem",
                                marginTop: 200
                                }}>
                                <h1>404</h1>
                                <br/>
                                <h2>PÁGINA NO ENCONTRADA</h2>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;