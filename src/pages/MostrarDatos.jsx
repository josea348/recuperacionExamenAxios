import axios from 'axios';
import { useEffect, useState } from 'react'

export const MostrarDatos = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:4000/usuario/listar');
        setUsuarios(response.data);
      } catch (e) {
        console.log('Error: ' + e);
        alert('Error: ' + e);
      }
    }

    obtenerUsuarios();
  }, []);

  return (
    <div>
      <h1>Listados de usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.pk_cedula_user}>
            <div>
              <strong>Cedula: </strong>{usuario.pk_cedula_user}
            </div>
            <div>
              <strong>Nombre: </strong>{usuario.nombre_user}
            </div>
            <div>
              <strong>Correo: </strong>{usuario.email_user}
            </div>
            <div>
              <strong>Rol: </strong>{usuario.rol_user}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
