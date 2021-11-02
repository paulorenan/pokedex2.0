import React, { useEffect, useState } from 'react'
import { getPoke } from '../services/pokeapi'

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
    console.log(pokemon);
  }, [poke]);


  const renderPokemon = () => {
    console.log(pokemon);
    return (
      <div>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <div>
        {pokemon.types.map((type) => (
          <p key={type.type.name}>{type.type.name}</p>
        ))}
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
