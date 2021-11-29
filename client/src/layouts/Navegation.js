import React  from "react";
import logo from '../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';


function Navegation() {
    return (
        <div>
            <nav className="navbar nav-style navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link to="/home" >
                    <img src={logo} alt="" width="80" height="74"/><span className="name-logo">Ecotripulantes</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <ul className="link-style navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/home'> Inicio
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/profile'> Perfil
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/information'> Información
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/publications'> Anuncios
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/chat'> Chat
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/register'> Registrarme
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/login'>Iniciar sesión
                                </Link>
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Navegation;