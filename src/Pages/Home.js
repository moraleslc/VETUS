import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/login">Log Out</Link></p>
            </nav>
            <h1>Inicio</h1>
            <p>Selecciona la prueba que quieras realizar:</p>
            <Link to="/prueba_desempeno"><button>Prueba de desempeño</button></Link><br />
            <button>Prueba de fragilidad</button><br />
            <button>Prueba de Sarcopenia</button><br />
        </div>
    );
}