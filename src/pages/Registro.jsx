import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Registro() {
  const navigator = useNavigate()
  const [formData, setFormData] = useState({
    pk_cedula_user: '',
    nombre_user: '',
    email_user: '',
    password_user: '',
    descripcion_user: '',
    telefono_user: '',
    rol_user: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const registro = await axios.post('http://localhost:4000/usuario/registrar', formData);

      if (registro.status === 200) {
        console.log('Se registro exitosamente');
        alert('Se registro exitosamente');
        navigator("/datos")
      } else {
        console.log('No se registro el usuario');
        alert('No se registro el usuario');
      }
    } catch (error) {
      console.log('Error: ' + error);
      alert('Error: ' + error);
    }
  }

  return (
    <>
      <form onSubmit={handleRegister} method='post'>
        <h1>Registro de Usuario</h1>
        <div>
          <label>Cedula: </label>
          <input type="number" name="pk_cedula_user" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" name='nombre_user' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Correo</label>
          <input type="email" name='email_user' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">contraseña</label>
          <input type="password" name='password_user' onChange={handleChange} />
        </div>
        <div>
          <label>Descripción: </label>
          <input type="text" name="descripcion_user" onChange={handleChange} />
        </div>
        <div>
          <label>Telefono: </label>
          <input type="text" name="telefono_user" onChange={handleChange} />
        </div>
        <div>
          <select name="rol_user" id="rol" onChange={handleChange}>
            <option value="">Seleccione el Rol del Usuario</option>
            <option value="1">vendedor</option>
            <option value="2">comprador</option>
            <option value="3">admin</option>
          </select>
        </div>
        <button type='submit' >Enviar</button>
      </form>
    </>
  )
}

export default Registro
