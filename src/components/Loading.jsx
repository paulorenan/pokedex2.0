import React from 'react'
import pokebola from '../styles/pokebola.gif'
import '../styles/Loading.css'

function Loading() {
  return (
    <div className="loadImg">
      <img src={pokebola} alt="loading" />
    </div>
  )
}

export default Loading
