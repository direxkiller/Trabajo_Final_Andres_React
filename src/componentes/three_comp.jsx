import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const three_comp = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm" id="nosotros">
            <div className="card" style={{ width: "300px" }}>
              <img src="./Images/imagenalejo (1).jpg" className="img" alt="..." />
              <div className="card-body">
                <h5 className="card-title" id="alejo">Analista/Competitivo</h5>
                <p className="card-text">Analista del proyecto Demeter
                  Diseñador del logo principal
                  Guionista del juego web</p>

                <section className="Web_game" id="Videojuego">
                  <div className="container">
                    <p>
                      <a className="btn collapsed" data-bs-toggle="collapse" style={{ backgroundColor: "rgba(17, 82, 20)", color: "white" }} href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Contacto</a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="multi-collapse collapse" id="multiCollapseExample1">
                          <div className="card card-body">
                            Email: osorioalejo810@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-sm" id="nosotros">
            <div className="card" style={{ width: "300px" }}>
              <img src="./Images/imagendiego (1).jpg" className="img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.diego} </h5>
                <p className="card-text">Diseñador del proyecto Demeter
                  Colaborador del logo principal
                  Diseñador del juego web</p>

                <section className="Web_game" id="Videojuego">
                  <div className="container">
                    <p>
                      <a className="btn collapsed" data-bs-toggle="collapse" style={{ backgroundColor: "rgba(17, 82, 20)", color: "white" }} href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Contacto</a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="multi-collapse collapse" id="multiCollapseExample2">
                          <div className="card card-body">
                            Email: dmor.restrepo@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="col-sm" id="nosotros">
            <div className="card" style={{ width: "300px" }}>
              <img src="./Images/imagenkevin (1).jpg" className="img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Programador</h5>
                <p className="card-text">Programador del proyecto Demeter
                  Colaborador del logo principal
                  Idealista del juego web</p>

                <section className="Web_game" id="Videojuego">
                  <div className="container">
                    <p>
                      <a className="btn collapsed" data-bs-toggle="collapse" style={{ backgroundColor: "rgba(17, 82, 20)", color: "white" }} href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Contacto</a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div className="multi-collapse collapse" id="multiCollapseExample3">
                          <div className="card card-body">
                            Email: jovenm1125@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default three_comp
