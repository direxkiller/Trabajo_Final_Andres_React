import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const firts_comp = (props) => {
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-expand-lg fixed-top" style={{ background: "rgba(17, 82, 20)" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="./Images/ggggg.png" alt="" style={{ width: "70px", height: "50px" }} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#proyecto">Proyecto</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Nosotros
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#nosotros">Diegouski </a></li>
                    <li><a className="dropdown-item" href="#nosotros">Kevin Peréz</a></li>
                    <li><a className="dropdown-item" href="#nosotros">Alejandro Osorio</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Capacitaciones
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="./tierra.html">Tierra</a></li>
                    <li><a className="dropdown-item" href="./productos.html">Maquinaria</a></li>
                    <li><a className="dropdown-item" href="./fertilizantes.html">Fertilizantes</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#galeria">Galeria</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href='#juego'>Juego Web</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#contactos">Redes</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="banner">
          <div className="content">
            <div className="col fs-1 text-white">
              <h1>DEMETER</h1>
            </div>

            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "rgba(17, 82, 20)", color: "white" }}>
              {props.boton}
            </button>

            <div className="row row gap">
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">¿QUÉ ES?</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      Demeter es un proyecto basado en la agricultura que busca educar al usuario sobre este tema mediante un juego web interactivo.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F5F5F5" fillOpacity="1" d="M0,128L120,154.7C240,181,480,235,720,250.7C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
           <div className="col-sm" id="galeria">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./Images/c1.jpg" className="d-block w-100" alt="..." style={{ height: "400px" }} />
                </div>
                <div className="carousel-item">
                  <img src="./Images/c2.jpg" className="d-block w-100" alt="..." style={{ height: "400px" }} />
                </div>
                <div className="carousel-item">
                  <img src="./Images/c3.jpg" className="d-block w-100" alt="..." style={{ height: "400px" }} />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div> 
          
        </div>
      </div> */}
    </div>  
    
  )
}

export default firts_comp