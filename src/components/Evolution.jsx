import React, {useState, useEffect} from 'react'
import {getPoke} from '../services/pokeapi.js'
import Pokemon from './Pokemon.jsx'
import '../styles/Evolution.css'
import pokebola from '../styles/pokebola.gif'

function Evolution(props) {
  const {pokeSpecie} = props
  const [evolution, setEvolution] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const evolution = await getPoke(pokeSpecie.evolution_chain.url)
      setEvolution(evolution.chain)
      setLoading(false)
    }
    fetchData()
  }, [pokeSpecie])


  return (
    <>
      {loading ? <img src={pokebola} alt="loading" /> : 
        <>
          {evolution.evolves_to.length > 0 && 
            <div className="evCont">
              <h3>Evolution</h3>
              <div className="ev1">
                <Pokemon pokemon={evolution.species.name}/>
                {evolution.evolves_to.map(evolution => (
                  <div key={evolution.species.name} className="ev3">
                  <Pokemon pokemon={evolution.species.name}/>
                  {evolution.evolves_to.length > 0 &&
                    <>
                      {evolution.evolves_to.map((ev) => (
                        <Pokemon pokemon={ev.species.name} key={ev.species.name}/>
                      ))}
                    </>
                  }
                  </div>
                ))}
              </div>
            </div>
          }
        </>
      }
    </>
  )
}

export default Evolution
