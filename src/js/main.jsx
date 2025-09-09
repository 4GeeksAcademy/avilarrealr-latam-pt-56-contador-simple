import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let unidad = 0
let decena = 0
let centena = 0
let unidadDeMil = 0
let decenaDeMil = 0

let root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
  if (unidad >= 9) {
    unidad = 0;
    decena++;
  } else {
    unidad++;
  }

  if (decena >= 9) {
    decena = 0
    centena++
  }

  if (centena >= 9) {
    centena = 0
    unidadDemil++
  }

  if (unidadDeMil >= 9) {
    unidadDeMil = 0
    decenaDeMil++
  }

  root.render(

    <React.StrictMode>
      <Home unidad={unidad} decena={decena} centena={centena} unidadDeMil={unidadDeMil} decenaDeMil={decenaDeMil} />
    </React.StrictMode>,
  )


}, 1000);

