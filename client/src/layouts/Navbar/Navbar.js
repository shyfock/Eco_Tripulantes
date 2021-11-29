import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    // NavBtn,
    NavBtnLink
} from './NavbarElements';
import * as Icons from "react-icons/ti";
import Cookies from 'universal-cookie';
import { Outlet } from 'react-router';
import { Button } from 'react-bootstrap';

const cookies = new Cookies();

const Navbar = () => {
    function logOut() {
        cookies.remove('_s');
        window.location.reload();
    }
    return (
        <>
            <Nav>
                <NavLink to='/home'> 
                    <h1>EcoTripulantes</h1><Icons.TiLeaf />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Inicio
                    </NavLink>
                    <NavLink to="/information" activeStyle>
                        Información
                    </NavLink>
                    <NavLink to="profile" activeStyle>
                        Perfil
                    </NavLink>
                    <NavLink to="/chat" activeStyle>
                        Chat
                    </NavLink>
                    <NavLink to="/publications" activeStyle>
                        Anuncios
                    </NavLink>
                    <Nav>
                        <NavBtnLink to="/login">
                            Iniciar Sesión<Icons.TiUser/>
                        </NavBtnLink>
                        <NavBtnLink to="/register">
                            Registrarse
                        </NavBtnLink>
                        <Button
                            style={{
                                backgroundColor: "#F5DABD",
                                border: "none",
                                padding: "10px 22px",
                                marginLeft: "24px",
                                color: "#fff",
                                
                                }}
                            onClick={() => {logOut()}}>
                            Cerrar Sesión<Icons.TiEject/>
                        </Button>
                    </Nav>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/registrarse">Registrarse
                    </NavBtnLink>
                </NavBtn> */}
            </Nav>
            <Outlet/>
        </>
    );
};

export default Navbar;