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
import { Outlet } from 'react-router';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'> 
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