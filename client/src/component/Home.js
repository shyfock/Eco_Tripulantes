import React from 'react';
import Navegation from '../layouts/Navegation';
import logo from '../assets/logo.png';

const Home = () => {
    return (
        <>
            <Navegation/>
            <div className="mt-5 text-center">
                <img src={logo} alt="" width="50%" height="44%" className="text-center mb-5"/>
                <h4 className="text-center mb-5">Hola, Soy el mundo Eco</h4>
                
            </div>
        </>
    );
}

export default Home;