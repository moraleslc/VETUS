import React from 'react'
import { Link } from 'react-router-dom';


export default function RecuperarContD() {
    return (
        <div className="logres">
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/">Inicio</Link></p>
                <p><Link to="/register">Registrarse</Link></p>
                <p><Link to="/login">Iniciar sesión</Link></p>
            </nav>

            <form>
                <h1>¡LISTO!</h1>
                <p style={{ lineHeight: .2 }}>Si estás registrado, llegará</p>
                <p style={{ lineHeight: .2 }}>un link a tu correo</p>
                <br />
                <Link to="/login"><button>Regresar</button></Link>
            </form>
        </div>
    )
}
