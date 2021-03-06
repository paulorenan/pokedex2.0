import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPoke } from '../services/pokeapi'
import Loading from './Loading'
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

  function capitalize(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
  }

  const renderPokemon = () => {
    return (
      <Link to={`/pokemon/${pokemon.id}`} className="cardContainer">
        <div className="imageCard">
          <img src={pokemon.sprites.other["official-artwork"].front_default !== null ? pokemon.sprites.other["official-artwork"].front_default : pokemon.sprites.front_default} alt="pokemon" />
        </div>
        <div className="infoCard">
        <p>{capitalize(pokemon.species.name)}</p>
        <p>{`nº ${pokemon.id}`}</p>
        </div>
        <div className="typeCard">
          {pokemon.types.map((type) => (
            <div key={type.type.name} className={`${type.type.name} tipo`}>
              <p>{capitalize(type.type.name)}</p>
            </div>
          ))}
        </div>
      </Link>
    )
  }


  return (
    <div>
    {loading ? <Loading /> : renderPokemon()}
    </div>
  )
}

export default PokemonCard;
