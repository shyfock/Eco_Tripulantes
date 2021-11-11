import React from "react";
import { Link } from 'react-router-dom'
import Navigation from '../layouts/Navegation';
import "../App.css";

const Login = () => {

    const LoginForm = () => (
        <form className="sign-box">
            <div className="form-group">
                <label className='text-muted'>Correo</label>
                <input
                type='email'
                className='form-control'
                />
            </div>
            <div className="form-group">
                <label className='text-muted'>Contraseña</label>
                <input
                type='password'
                className='form-control'
                />
            </div>
            <button className='s-btn btn btn-primary'>
                Iniciar sesión
            </button>
            <div>
                <Link to="/register">Crear cuenta</Link>
            </div>

        </form>

    );


    return (
        <>
            <Navigation/>
            <div className="mt-5">
                <h4 className="text-center mb-5">Iniciar sesión</h4>
                {LoginForm()}
                
            </div>
        </>
    );
}

export default Login;