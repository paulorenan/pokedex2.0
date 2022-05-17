import React, {useState, useEffect, useRef} from 'react'
import { getPokeNome, getPoke } from '../services/pokeapi'
import PokemonCard from '../components/PokemonCard'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Loading from '../components/Loading'
import '../styles/Home.css'

function Home(props) {
  const [pokemonsName, setPokemonsName] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [next, setNext] = useState('')
  const [loading, setLoading] = useState(true)
  const [limit, setLimit] = useState(10);
  const [nameInput, setNameInput] = useState('')
  const loaderRef = useRef(null);

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
      const response = await getPoke('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      setPokemons(response.results)
      setNext(response.next)
      setLoading(false)
    }
    loadPokemons()
  }, [])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting){
        setLimit(old => old + 100);
      }
    }, options);

    if (loaderRef.current){
      observer.observe(loaderRef.current);
    }
  }, []);

  useEffect(() => {
    if(limit > 10){
    const pegarPokemons = async () => {
      if (next) {
        const response = await getPoke(next)
        setPokemons(state => [...state, ...response.results])
        setNext(response.next)
      }
    }
    pegarPokemons();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  const handleSearch = async (e) => {
    e.preventDefault()
    const {history} = props
    history.push(`/pokemon/${nameInput.toLowerCase()}`)
  }

  return (
    <div className="home">
      <Header />
      <form className="pokeBusca" onSubmit={handleSearch}>
        <input type="text" placeholder="Digite o nome do pokemon" list="pokeName" onChange={ (e) => setNameInput((e.target.value).toLowerCase())} />
        <Link to={`/pokemon/${nameInput}`}><button className="searchButton" disabled={nameInput === '' ? true : false}>Pesquisar</button></Link>
      <datalist id="pokeName">
        {pokemonsName.map(pokemon => (
          <option key={pokemon} value={pokemon} />
        ))}
      </datalist>
      </form>
      <div className="pokeCard">
        {loading ? <Loading /> : pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} poke={pokemon} />
        ))}
      </div>
      {next !== null && <div ref={loaderRef}><Loading /></div>}      
    </div>
  )
}

export default Home;
