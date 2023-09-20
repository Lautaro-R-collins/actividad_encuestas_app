import React from 'react';
function Encuestas({ encuestas }) {
    return (
      <div>
        <h2>Encuestas Disponibles</h2>
        {encuestas.map(encuesta => (
          <div key={encuesta.id}>
            <h3>{encuesta.pregunta}</h3>
            <ul>
              {encuesta.opciones.map(opcion => (
                <li key={opcion}>
                  <label>
                    <input type="radio" name={`respuesta_${encuesta.id}`} value={opcion} />
                    {opcion}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
export default Encuestas;
  
