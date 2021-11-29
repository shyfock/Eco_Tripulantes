import React from "react";
import Home from "../components/Home";
import Chat from '../components/Chat';
import Publications from '../components/publications';
import Publication from '../components/publication';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "../components/Register";
import Login from "../components/Login";
import Navegation from "../layouts/Navegation";
import PrivateRoute from "../components/auth/privateroute";
import Information from "../components/information/information";
import Navbar from "../layouts/Navbar/Navbar";
import Profile from "../components/Profile";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Navegation/>}>
                    {/* <Route path="/home" index element={<Home/>}/> */}
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                        
                    
                    <Route exact path="/chat" element={<PrivateRoute/>}>
                        <Route path="" element={<Chat/>} />
                    </Route>
                    <Route exact path="/information" element={<PrivateRoute/>}>
                        <Route path="" element={<Information/>} />
                    </Route>
                    <Route exact path="/profile" element={<PrivateRoute/>}>
                        <Route path="" element={<Profile/>} />
                    </Route>
                    
                    {/* <Route
                        path='/home'
                        element={
                        <PrivateRoute>
                            <Home/>
                        </PrivateRoute>
                        }
                    /> */}
                    {/* <Route exact path="/chat" element={<Chat/>}/> */}
                    <Route exact path="/publications" element={<PrivateRoute/>}>
                        <Route path="" element={<Publications/>}>
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