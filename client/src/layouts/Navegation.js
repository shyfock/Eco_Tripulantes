import React  from "react";
import logo from '../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { NavItem,  NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const cookies = new Cookies();

function Navegation(props) {
    function logOut() {
        cookies.remove('_s');
        cookies.remove('_username');
        cookies.remove('_userId');
        window.location.reload();
    }
    const [show, setShow]=React.useState(false);
    return (
        <div>
            <nav className="navbar nav-style navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/" >
                    <img src={logo} alt="" width="80" height="74"/><span className="name-logo">Ecotripulantes</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={show?{display:"block"}:{display:'none'}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <ul className="link-style navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/home'> Inicio
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/team'> Equipo Teams
                                </Link>
                            </NavItem>
                            <NavItem className="nav-link">
                                <Link className='nav-link' to='/information'> Noticias
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
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Iniciar sesión"
                                menuVariant="dark"
                                >
                                <NavDropdown.Item href='/login'>Iniciar sesión</NavDropdown.Item>
                                <NavDropdown.Item href='/register'>Registrarme</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => {logOut()}}>Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
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