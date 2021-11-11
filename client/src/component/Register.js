import React from "react";
import { Link } from 'react-router-dom';
import Navigation from '../layouts/Navegation';
import "../App.css";

const Register = () => {
    const RegisterForm = () => (
        <form className="sign-box">
            <div className="form-group">
                <label className='text-muted'>Nombre</label>
                <input
                type='text'
                className='form-control'
                />
            </div>
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
            <button  className='s-btn btn btn-primary'>
                Registrarme
            </button>
            <div>
                <Link to="/login">Iniciar sesión</Link>
            </div>


        </form>

    );

    return (
        <>
        <Navigation/>
        <div className="mt-5">
            <h4 className="text-center mb-5">Registrarme</h4>
                {RegisterForm()}
        </div>
        </>
    );
}

export default Register;