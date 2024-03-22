import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { MostrarDatos } from './pages/MostrarDatos.jsx'
import Registro from './pages/Registro.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Registro} />
        <Route path='/datos' Component={MostrarDatos}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
