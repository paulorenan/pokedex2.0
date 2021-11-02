import React, {useState, useEffect} from 'react'
import { getPokeNome, getPoke } from '../services/pokeapi'
import PokemonCard from '../components/PokemonCard'

function Home() {
  const [pokemonsName, setPokemonsName] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [next, setNext] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPokemonsName() {
      const response = await getPokeNome()
      setPokemonsName(response)
    }
    loadPokemonsName()
  }, [])

  useEffect(() => {
    async function loadPokemons() {
      setLoading(true)
      const response = await getPoke('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      setPokemons(response.results)
      setNext(response.next)
      setLoading(false)
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
        {/* <PokemonCard poke={pokemons[0]} /> */}
        {loading ? null : pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} poke={pokemon} />
        ))}
      </div>
      <button onClick={pegarPokemons}>Carregar mais</button>
    </div>
  )
}

export default Home
