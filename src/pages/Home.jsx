import React, {useState, useEffect} from 'react'
import { getPokeNome, getPoke } from '../services/pokeapi'
import PokemonInfo from '../components/PokemonInfo'

function Home() {
  const [pokemonsName, setPokemonsName] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [next, setNext] = useState('')

  useEffect(() => {
    async function loadPokemonsName() {
      const response = await getPokeNome()
      setPokemonsName(response)
    }
    loadPokemonsName()
  }, [])

  useEffect(() => {
    async function loadPokemons() {
      const response = await getPoke('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      setPokemons(response.results)
      setNext(response.next)
    }
    loadPokemons()
  }, [])

  const pegarPokemons = async () => {
    const response = await getPoke(next)
    setPokemons([...pokemons, ...response.results])
    setNext(response.next)
  }

  return (
    <div>
      <input type="text" placeholder="Digite o nome do pokemon" list="pokeName"/>
      <datalist id="pokeName">
        {pokemonsName.map(pokemon => (
          <option key={pokemon} value={pokemon} />
        ))}
      </datalist>
      <div>
        <PokemonInfo poke={pokemons[0]} />
        {/* {pokemons.map(pokemon => (
          <PokemonInfo key={pokemon.name} poke={pokemon} />
        ))} */}
      </div>
      <button onClick={pegarPokemons}>Carregar mais</button>
    </div>
  )
}

export default Home
