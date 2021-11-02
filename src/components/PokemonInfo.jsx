import React, { useEffect, useState } from 'react'
import { getPoke } from '../services/pokeapi'

function PokemonInfo(props) {
  const [pokemon, setPokemon] = useState({})
  const { poke } = props
  console.log(poke);

  useEffect(() => {
    async function fetchData() {
      console.log(poke.url);
      const response = getPoke(poke.url)
      const data = await response.json()
      setPokemon(data)
    }
    fetchData()
  })


  return (
    <div>
      {pokemon.name}
    </div>
  )
}

export default PokemonInfo
