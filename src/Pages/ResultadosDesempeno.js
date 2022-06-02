import { Link, renderMatches } from "react-router-dom";
import MaterialTable, { Column } from "@material-table/core";
import Plot from 'react-plotly.js';
import React, {Component} from "react"



class ResultadosDesempeno extends Component {
  
  constructor(props)
  {
    const lookup = { true: "Available", false: "Unavailable" };


const columns = [
  { title: "ID", field: "PruebaID" },
  { title: "Fecha", field: "Fecha"},
  { title: "Tiempo", field: "Tiempo"},
  { title: "Balance", field: "resBalance" },
  { title: "Velocidad Marcha", field: "resTotal" },
  { title: "Silla", field: "resVelMarcha" },
  { title: "Totalr", field: "resSilla" },

];
    super(props);
    this.state = {data:[], columns:columns}
  }
  componentDidMount()
  {
    fetch( "http://localhost:3002/plots")
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    this.setState({data:result});
  })
  }
  render(){
    return (
        <div>
            <nav>
                <h1>VETUS</h1>
                <p><Link to="/home">Inicio</Link></p>
            </nav>

        <div className= "desempeno" style = {{margin: "30px"}}>
        <Plot

data={ this.state.data
 }

layout={ {width: "100%", height: "100%", title: 'Pruebas de desempeno'} }

/>
        </div>
            <div className="tabla">

              <MaterialTable title = "Pruebas de Desempeno" columns={this.state.columns} data={(query) =>
    new Promise((resolve, reject) => {
      let url = "http://localhost:3002/desempeno";
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          resolve({
            data: result,
            
          });
        });
    })} onRowClick={(event, rowData) => {
        console.log(rowData);
      }} /></div>


        </div>
    );
  }
}

export default ResultadosDesempeno;