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
                    <NavBtnLink to="/login">
                        Iniciar sesión<Icons.TiUser/></NavBtnLink>
                    <NavBtnLink to="/register">Registrarse</NavBtnLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/registrarse">Registrarse
                    </NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    );
};

export default Navbar;