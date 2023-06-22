import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const second_comp = (props) => {
  return (
    <div>
      <section className="cuerpo" name="Cartas_de_Informacion" id="proyecto">
        <div className="container">
          <div className="box">
            <span></span>
            <div className="content">
              <h2>{props.papaya}</h2>
              <p>El proyecto Demeter surgió a partir de la Ley 2811 de 1974. Fue creado con la finalidad de educar al usuario en el manejo adecuado del tema agrícola.</p>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Misión</h2>
              <p>Educar a las personas sobre el manejo adecuado del tema agrícola por medio de productos multimediales.</p>
            </div>
          </div>
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Visión</h2>
              <p>Para el 2024 se busca alcanzar 2.000 visitas en el sitio web.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default second_comp


