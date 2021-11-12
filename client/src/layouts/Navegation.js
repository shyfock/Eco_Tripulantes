import React  from "react";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';


const Navegation = () => {
    return (
        <div>
        <nav className="navbar nav-style navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/">
                <img src={logo} alt="" width="60" height="54"/>Ecotripulantes
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
                    </ul>
                    <ul className="navbar-nav">
                    <NavItem className="nav-link">
                            <Link className='nav-link' to='/'> Inicio
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
    </div>
    );
}

export default Navegation;