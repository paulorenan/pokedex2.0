import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPoke } from '../services/pokeapi'
import '../styles/PokeCard.css'

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const { poke } = props

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const response = await getPoke(poke['url'])
      setPokemon(response)
      setLoading(false)
    }
    fetchData()
  }, [poke]);

  function capitalize(string) {
    console.log(string);
    const maiuscula = string.map((palavra)  => (
      palavra.charAt(0).toUpperCase() + palavra.slice(1)
      ))
    return maiuscula.join(' ')
  }

  const renderPokemon = () => {
    console.log(pokemon);
    return (
      <div className="cardContainer">
        <div className="imageCard">
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        </div>
        <div className="infoCard">
        <p>{capitalize(pokemon.name.split('-'))}</p>
        <p>{`nº ${pokemon.id}`}</p>
        </div>
        <div className="typeCard">
          {pokemon.types.map((type) => (
            <p key={type.type.name}>{capitalize(type.type.name.split("-"))}</p>
          ))}
        </div>
        <div className="proxButton">
        <Link to={`/pokemon/${pokemon.id}`}><button>Detalhes</button></Link>
        </div>
      </div>
    )
  }


  return (
    <div>
    {loading ? <p>Loading...</p> : renderPokemon()}
    </div>
  )
}

export default PokemonCard;
