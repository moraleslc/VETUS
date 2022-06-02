import React, { useState } from 'react';
import Logo from './Resources/Logo.png';
import { Navigate, Link } from 'react-router-dom';

export default function StartUp() {

    const pantallas = [(<div><p>Te damos la bienvenida a</p>
        <h2>VETUS</h2>
        <img src={Logo}
            alt='Logo'
            width={150}
            height={150}
        />
    </div>),
    (<div><h3>BIENVENIDO A VETUS</h3>
        <p>Gracias por su preocupación por las personas mayores</p></div>),
    (<div><h3>CONTACTE</h3>
        <p>Al entrar a Vetus, podrá ser parte de la red de salud geriátrica más grande de México</p></div>)];

    const [indexPantallas, setIndexPantallas] = useState(0);

    const termino = indexPantallas === pantallas.length;

    function continuar() {

        setIndexPantallas((prev) => prev += 1);

    }

    return (
        <div className="startup">
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/login">Iniciar sesión</Link></p>
                <p><Link to="/register">Registrarse</Link></p>
            </nav>

            {pantallas[indexPantallas]}

            {pantallas[indexPantallas] && <button class="button" onClick={continuar}>Continuar</button>}

            {!pantallas[indexPantallas]}

            {termino && <Navigate replace to="/login" />}

        </div >
    );
}