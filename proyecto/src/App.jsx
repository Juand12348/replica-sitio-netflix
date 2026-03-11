import { useState } from 'react'
import './App.css'
import Principal from './Principal'
import DavidMartinez from './DavidMartinez'

function App() {
  return (
    <>
    <header className = "cabecera">
      {/* en esta linea va la navbar, debe tener position:absolute asi la imagen no se mueve hacia abajo o otros lados*/}
      <Principal />
      </header>
      <DavidMartinez />
    </>
  )
}

export default App
