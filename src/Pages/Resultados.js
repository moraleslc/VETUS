import { Link } from "react-router-dom";
import MaterialTable, { Column } from "@material-table/core";

const lookup = { true: "Available", false: "Unavailable" };

const columns = [
  { title: "ID", field: "PruebaID" },
  { title: "Fecha", field: "Fecha"},
  { title: "Tiempo", field: "Tiempo"},
  { title: "Nombre del Paciente", field: "NombrePaciente" },
  { title: "Apellido del Paciente", field: "ApellidoPaciente" },
  { title: "Correo del Paciente", field: "CorreoPaciente" },
  { title: "Apellido del Aplicador", field: "ApellidoAplicador" },
  { title: "Correo del Aplicador", field: "CorreoAplicador" },

];

const data = [
    {
        "PruebaID": 26,
        "Fecha": "2022-05-05T07:00:00.000Z",
        "Tiempo": "11:09:58",
        "NombrePaciente": "Trejo",
        "ApellidoPaciente": "Gonzalez",
        "CorreoPaciente": "trejoelviejo@tec.mx",
        "NombreAplicador": "Gerarda",
        "ApellidoAplicador": "Garza",
        "CorreoAplicador": "geraradalageriatra@gmail.com"
    },
    {
        "PruebaID": 27,
        "Fecha": "2022-05-05T07:00:00.000Z",
        "Tiempo": "14:07:11",
        "NombrePaciente": "Trejo",
        "ApellidoPaciente": "Gonzalez",
        "CorreoPaciente": "trejoelviejo@tec.mx",
        "NombreAplicador": "Gerarda",
        "ApellidoAplicador": "Garza",
        "CorreoAplicador": "geraradalageriatra@gmail.com"
    },
    {
        "PruebaID": 28,
        "Fecha": "2022-05-05T07:00:00.000Z",
        "Tiempo": "14:07:12",
        "NombrePaciente": "Trejo",
        "ApellidoPaciente": "Gonzalez",
        "CorreoPaciente": "trejoelviejo@tec.mx",
        "NombreAplicador": "Gerarda",
        "ApellidoAplicador": "Garza",
        "CorreoAplicador": "geraradalageriatra@gmail.com"
    },
    {
        "PruebaID": 29,
        "Fecha": "2022-05-05T07:00:00.000Z",
        "Tiempo": "16:12:07",
        "NombrePaciente": "Trejo",
        "ApellidoPaciente": "Gonzalez",
        "CorreoPaciente": "trejoelviejo@tec.mx",
        "NombreAplicador": "Gerarda",
        "ApellidoAplicador": "Garza",
        "CorreoAplicador": "geraradalageriatra@gmail.com"
    }
];
function Resultados() {
    fetch("http://localhost:3002/pruebas")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
    return (
        <div>
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/home">Inicio</Link></p>
            </nav>


            <div className="desempeno">
            
                <MaterialTable title = "Pruebas" columns={columns} data={(query) =>
    new Promise((resolve, reject) => {
      let url = "http://localhost:3002/pruebas";
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          resolve({
            data: result,
          });
        });
    })} onRowClick={(event, rowData) => {
        console.log(rowData);
        window.location.href = "resultados_desempeno";
      }} /></div>


        </div>
    );
}

export default Resultados;