import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div className="logres">
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/">Inicio</Link></p>
                <p><Link to="/login">Iniciar sesión</Link></p>
            </nav>
            <form>
                <h1>REGISTRARSE</h1>

                <label htmlFor="Rol">Tipo de usuario:   </label>
                <select id="rol" name="rol">
                    <option value="doctor">Doctor</option>
                    <option value="asistente">Asistente</option>
                    <option value="paciente" selected>Paciente</option>
                </select><br /><br />

                <div className="sub-entry">

                    <label htmlFor="Nombre">Nombre(s): </label><br />
                    <input type="text" id="nombre" />
                    <br />

                    <label htmlFor="PApellido">Apellido paterno:</label><br />
                    <input type="text" id="p_apellido" />
                    <br />

                    <label htmlFor="MApellido">Apellido materno:</label><br />
                    <input type="text" id="m_apellido" />
                    <br />

                    <label htmlFor="FechaNacimiento">Fecha de Nacimiento:</label><br />
                    <input type="date" id="fechaNacimiento" />
                    <br />

                </div>
                <div className="sub-entry">

                    <label htmlFor="NumTelefono">Número de teléfono:</label><br />
                    <input type="tel" id="NumTelefono" name="NumTelefono" pattern="[+]{1}[0-9]{11,14}" required />
                    <br />

                    <label htmlFor="Correo">Correo electrónico:</label><br />
                    <input type="text" id="correo" />
                    <br />

                    <label htmlFor="Contrasena">Contraseña:</label><br />
                    <input type="password" name="password" id="contrasena" />
                    <br />

                    <label htmlFor="Contrasena">Confirmar contraseña:</label><br />
                    <input type="password" name="password" id="contrasena" />
                    <br />
                    <br />

                </div>

                <p><Link to="/login">¿Ya tienes una cuenta?</Link></p>
                <Link to="/Home">
                    <button style={{
                        width: '190px'
                    }}>Ingresar</button>
                </Link>
            </form>
        </div >
    );
}

export default Register;