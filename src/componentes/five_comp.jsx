import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const five_comp = (props) => {
  return (
    <div> 

 <div className="Web_game" id="Videojuego">
      <div className="container">
        <p>
          <a style={{ backgroundColor: 'rgba(17, 82, 20)', color: 'white' }} className="btn collapsed" data-bs-toggle="collapse" href="#multiCollapseExample1"
            role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Historia del juego web</a>
          <button style={{ backgroundColor: 'rgba(17, 82, 20)', color: 'white' }} className="btn collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2" aria-expanded="false"
            aria-controls="multiCollapseExample2"> {props.metod} </button>
        </p>
        <div className="row">
          <div className="col">
            <div className="multi-collapse collapse" id="multiCollapseExample1">
              <div className="card card-body">
                La Diosa Demeter se encuentra desmotivada debido al caos causado por el mal manejo de la
                tierra.
                Actualmente, ella busca quien le ayude a recordarle a la gente cómo cuidar correctamente la
                tierra.

                La Diosa lanzará preguntas relacionadas con el tema de la agricultura, y si contestas bien
                la mayoría de las estas, ella se alegrará por tu progreso. Si por el contrario, fallas en las respuestas, la
                Diosa Demeter se molestará, aunque te permitirá volver a intentarlo para que obtengas grandes saberes sobre la
                cultura agrícola.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="multi-collapse collapse" id="multiCollapseExample2">
              <div className="card card-body">
                El juego contiene una bomba de tiempo que se reiniciará con cada cambio de pregunta. El
                jugador debe contestar la pregunta antes de que la barra de tiempo finalice, pues, si no lo hace, perderá
                una de sus cinco vidas.

                Se le otorgará al jugador tres bonus de juego, entre los cuales está: recuperar vidas,
                saltar preguntas y pistas para responder correctamente.

                Posterior a la selección de una respuesta en cualquier pregunta, la Diosa Demeter aparecerá
                y te explicará por qué es correcta o no dicha pregunta, buscando dejar un aprendizaje valioso dentro del
                juego.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div className="" id="contactos">
            <div className="nose">
            <a href="https://web.facebook.com/profile.php?id=100082990446705" class="iconos" style={{color: 'white'}}>
            <i class="bi bi-facebook" style={{padding: '2rem'}}></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" class="iconos" style={{color: 'white'}}>
                <i class="bi bi-envelope" style={{padding: '2rem'}}></i>
                </a>
                <a href="o" class="iconos" style={{color: 'white'}}>
                <i class="bi bi-whatsapp" style={{padding: '2rem'}}></i>
                </a>
                <a href="https://www.instagram.com/demeter1j2000/" class="iconos" style={{color: 'white'}}>
                <i class="bi bi-instagram" style={{padding: '2rem'}}></i>
                </a>
                <a href="https://www.youtube.com/channel/UCwmFYCn68zKjKaq7-ZwQi0A" class="iconos" style={{color: 'white'}}>
                <i class="bi bi-youtube" style={{padding: '2rem'}}></i>
                </a>
            </div>
          </div>
    </div>
  )
}

export default five_comp
