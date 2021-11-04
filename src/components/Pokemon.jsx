import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import pokebola from '../styles/pokebola.gif'

function Pokemon(props) {
  const { pokemon } = props
  const [pokeInfo, setPokeInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon === 'urshifu' ? 'urshifu-single-strike' : pokemon}`)
      const data = await response.json()
      setPokeInfo(data)
      setLoading(false)
    }
    fetchData()
  }, [pokemon])

  function capitalize(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
  }

  return (
    <>
      {loading ? <img src={pokebola} alt="loading" /> : 
        <Link to={`/pokemon/${pokeInfo.id}`} className="ev2">
          <h1>{capitalize(pokeInfo.species.name)}</h1>
          <img src={pokeInfo.sprites.other["official-artwork"].front_default !== null ? pokeInfo.sprites.other["official-artwork"].front_default : pokeInfo.sprites.front_default} alt="pokemon" />
          <div className="pokClass">
          {pokeInfo.types.map(type => (
              <span key={type.type.name} className={`${type.type.name} tipo`}>{capitalize(type.type.name)}</span>
            ))}
          </div>
        </Link>
      }
    </>
  )
}

export default Pokemon
