import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import pikachu from '../styles/pikachu.jpg'
import '../styles/NotFound.css'

function NotFound() {
  return (
    <div>
      <Header />
      <div className="notDiv">
        <h1>404</h1>
        <p>Pagina Não Encontrada</p>
      </div>
      <div className="pikaDiv">
        <img src={pikachu} alt="pikachu" className="pikachu"/>
      </div>
      <div className="buttonCont">
        <Link to={'/'} className="proxButton"><button>Voltar</button></Link>
      </div>
    </div>
  )
}

export default NotFound
