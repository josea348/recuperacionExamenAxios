# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# librerias

npm i axios react-router-dom




# code 

import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      const registro = axios.post('http://localhost:4001/usuarios/registrarUsuario', formData);

      if(registro) {
        console.log('Se registro exitosamente');
        alert('Se registro exitosamente');
      } else {
        console.log('No se registro el usuario');
        alert('No se registro el usuario');
      }
    } catch (error) {
      console.log('Error: '+error);
      alert('Error: '+error);
    }
  }

  return (
    <>
      <form onSubmit={handleRegister} method='post'>
        <h1>Registro de Usuario</h1>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Correo</label>
          <input type="email" name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name='password' value={formData.password} onChange={handleChange} />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App
