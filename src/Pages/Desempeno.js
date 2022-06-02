import Unity, { UnityContext } from 'react-unity-webgl';
import { Link } from "react-router-dom";

function Desempeno() {

    const context = new UnityContext({
        loaderUrl: "/unity/Build_Unity.loader.js",
        dataUrl: "/unity/Build_Unity.data.unityweb",
        frameworkUrl: "/unity/Build_Unity.framework.js.unityweb",
        codeUrl: "/unity/Build_Unity.wasm.unityweb",

    });
    return (
        <div>
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/home">Inicio</Link></p>
                <p><Link to="/resultados">Resultados</Link></p>
            </nav>


            <div className="desempeno">  <Unity unityContext={context} style={{ width: "700px", height: "700px", alignItems: "center" }}></Unity></div>


        </div>
    );
}

export default Desempeno;