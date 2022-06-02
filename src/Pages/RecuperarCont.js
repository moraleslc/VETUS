import { Link } from 'react-router-dom';

export default function RecuperarCont() {
    return (
        <div className="logres">
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/">Inicio</Link></p>
                <p><Link to="/register">Registrarse</Link></p>
                <p><Link to="/login">Iniciar sesión</Link></p>
            </nav>

            <form>
                <h1 style={{ lineHeight: 0 }}>RECUPERA</h1>
                <h1>TU CONTRASEÑA</h1>
                <p style={{ lineHeight: .2 }}>Ingresa tu correo electrónico y te</p>
                <p style={{ lineHeight: .2 }}>enviaremos un enlace para que</p>
                <p style={{ lineHeight: .2 }}>recuperes el acceso a tu cuenta</p>
                <br />
                <label htmlFor="Correo" style={{
                    fontSize: '15px'
                }}>Correo electrónico:</label><br />
                <input type="text" id="correo" />
                <br /><br />
                <Link to="/recuperarcontd"><button>Enviar enlace</button></Link>
            </form>
        </div>

    )
}
