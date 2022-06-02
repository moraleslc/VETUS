import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="logres">
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/">Inicio</Link></p>
                <p><Link to="/register">Registrarse</Link></p>
            </nav>
            <form>
                <h1>INICIAR SESIÓN</h1>
                <label htmlFor="Correo" style={{
                    fontSize: '15px'

                }}>Correo electrónico:</label><br />
                <input type="text" id="correo" />
                <br />

                <label htmlFor="Contrasena" style={{
                    fontSize: '15px'
                }}>Contraseña:</label><br />
                <input type="password" name="password" id="contrasena" />
                <p><Link to="/register">¿No tienes una cuenta?</Link></p>
                <p><Link to="/recuperarcont">¿Olvidaste tu contraseña?</Link></p>
                <Link to="/Home">
                    <button>Ingresar</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;