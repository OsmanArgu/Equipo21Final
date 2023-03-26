import React, { useState } from 'react';
import "./Materias.css";

function MateriaApp() {
  const [materias1, setMaterias1] = useState([
    { nombre: "Lenguajes y Automatas", clave: "AUT-123", hora: "9:00 - 10:30", grupo: "SBC-7913" },
    { nombre: "Programacion Orientada", clave: "POOAB-456", hora: "11:00 - 12:30", grupo: "SBC-AES12" },
    { nombre: "Admin Base de Datos", clave: "INGBAD-789", hora: "14:00 - 15:30", grupo: "SBC-45UB3" },
    { nombre: "Programacion Web", clave: "QUI-234", hora: "16:00 - 17:30", grupo: "SBC-1234" },
    { nombre: "Patrones de diseño", clave: "FIS-567", hora: "18:00 - 19:30", grupo: "SBC-9648" },
    { nombre: "Calculo Vectorial", clave: "CAC25895", hora: "18:00 - 19:30", grupo: "SBC-2585" },
    { nombre: "Metodos numericos", clave: "MNMSES89", hora: "17:00 - 18:00", grupo: "SBC-2185" },
    { nombre: "Formacion Profesional", clave: "FMP6523", hora: "20:00 - 21:00", grupo: "SBC-8578" },
    { nombre: "Matematicas Discretas", clave: "MTDC1921", hora: "7:00 - 8:00", grupo: "SBC-2141" },
    { nombre: "Temas Avanzados de Desarrollo", clave: "TADSF878", hora: "18:00 - 19:30", grupo: "SBC-5375" },
    { nombre: "Conmutacion y Enrutamiento de Redes", clave: "BIO-890", hora: "20:00 - 21:30", grupo: "SBC-YU87" }

  ]);

  const [materias2, setMaterias2] = useState([

  ]);

  const agregarMateriaTabla2 = (materia) => {
    // Verifica si la hora de la materia seleccionada coincide con alguna materia en la tabla 2
    const conflicto = materias2.some((m) => m.hora === materia.hora);
    if (conflicto) {
      alert("Horarios en conflicto");
    } else {
      // Crea una nueva lista de materias de la tabla 1 que excluya la materia seleccionada
      const nuevasMaterias1 = materias1.filter((m) => m !== materia);
      setMaterias1(nuevasMaterias1);
      setMaterias2([...materias2, materia]);
    }
  };
  
  const eliminarMateriaTabla2 = (materia) => {
    const nuevasMaterias2 = materias2.filter((m) => m !== materia);
    setMaterias2(nuevasMaterias2);
  
    // Busca si la materia que se eliminó de la tabla 2 existe en la tabla 1
    const existeMateria = materias1.some((m) => m.nombre === materia.nombre && m.clave === materia.clave && m.hora === materia.hora && m.grupo === materia.grupo);
  
    if (existeMateria) {
      alert("La materia ya existe en la tabla 1");
    } else {
      // Agrega la materia eliminada de la tabla 2 a la tabla 1
      setMaterias1([...materias1, materia]);
    }
  };
  return (
    <div className="App">
      <h1>Materias Disponibles</h1>
      <div className="tabla-container">
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Clave</th>
              <th>Hora</th>
              <th>Grupo</th>
            </tr>
          </thead>
          <tbody>
            {materias1.map((materia, index) => (
              <tr key={index}>
                <td>{materia.nombre}</td>
                <td>{materia.clave}</td>
                <td>{materia.hora}</td>
                <td>{materia.grupo}</td>
                <td>
                  <button onClick={() => agregarMateriaTabla2(materia)}>Agregar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Clave</th>
              <th>Hora</th>
              <th>Grupo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {materias2.map((materia, index) => (
              <tr key={index}>
                <td>{materia.nombre}</td>
                <td>{materia.clave}</td>
                <td>{materia.hora}</td>
                <td>{materia.grupo}</td>
                <td>
                  <button onClick={() => eliminarMateriaTabla2(materia)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MateriaApp;