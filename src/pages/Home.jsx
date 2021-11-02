import React, {useState, useEffect} from 'react'
import { getPokeNome, getPoke } from '../services/pokeapi'
import PokemonCard from '../components/PokemonCard'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Home.css'

function Home() {
  const [pokemonsName, setPokemonsName] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [next, setNext] = useState('')
  const [loading, setLoading] = useState(true)
  const [nameInput, setNameInput] = useState('')

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
    <div className="home">
      <Header />
      <div className="pokeBusca">
        <input type="text" placeholder="Digite o nome do pokemon" list="pokeName" onChange={ (e) => setNameInput(e.target.value)} />
        <Link to={`/pokemon/${nameInput}`}><button>Buscar</button></Link>
      <datalist id="pokeName">
        {pokemonsName.map(pokemon => (
          <option key={pokemon} value={pokemon} />
        ))}
      </datalist>
      </div>
      <div className="pokeCard">
        {loading ? null : pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} poke={pokemon} />
        ))}
      </div>
      <div className="proxButton">
        <button onClick={pegarPokemons}>Carregar mais</button>
      </div>
    </div>
  )
}

export default Home;
