import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firts_comp from './componentes/firts_comp'
import Second_comp from './componentes/second_comp'
import Three_comp from './componentes/three_comp'
import Four_comp from './componentes/four_comp'
import Five_comp from './componentes/five_comp'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       <Firts_comp boton= "No funciona el boton XD"/>
       <Second_comp papaya = "Mondongo"/>
       <Three_comp diego = "soy diegouski :)" />
       <Four_comp/>
       <Five_comp metod= "Jueguito de DEMETER"/>
      </div>
    
  )
}

export default App
