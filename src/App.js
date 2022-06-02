import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import StartUp from './Pages/StartUp'
import Login from './Pages/Login';
import Desempeno from './Pages/Desempeno';
import Register from './Pages/Register'
import RecuperarCont from './Pages/RecuperarCont';
import RecuperarContD from './Pages/RecuperarContD';

import Resultados from './Pages/Resultados'
import ResultadosDesempeno from './Pages/ResultadosDesempeno'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recuperarcont" element={<RecuperarCont />} />
          <Route path="/recuperarcontd" element={<RecuperarContD />} />
          <Route path="/prueba_desempeno" element={<Desempeno />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/resultados_desempeno" element={<ResultadosDesempeno />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
