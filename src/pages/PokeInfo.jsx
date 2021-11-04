import React, {useState, useEffect} from 'react'
import {getPokeUrl, getPokeNome, getPoke} from '../services/pokeapi'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Ability from '../components/Ability'
import Moves from '../components/Moves'
import Loading from '../components/Loading'
import Evolution from '../components/Evolution'
import PokeImg from '../components/PokeImg'
import Stats from '../components/Stats'
import pokebola from '../styles/pokebola.gif'
import '../styles/PokeInfo.css'

function PokeInfo(props) {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [loadinSp, setLoadingSp] = useState(true)
  const [pokemonsName, setPokemonsName] = useState([])
  const [pokeSpecie, setPokeSpecie] = useState({})
  const [nameInput, setNameInput] = useState('')
  const [click, setClick] = useState(true)
  const { match: { params: { id } } } = props
  const { history } = props

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try{
      const pokemon = await getPokeUrl(id)
      setPokemon(pokemon)
      setLoading(false)
      } catch(err) {
        history.push('/notfound')
      }
    }
    fetchData()
  }, [id, history])

  useEffect(() => {
    async function fetchData() {
      const pokemonsName = await getPokeNome()
      setPokemonsName(pokemonsName)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      setLoadingSp(true)
      const pokeSpecie = await getPoke(pokemon.species.url)
      setPokeSpecie(pokeSpecie)
      setLoadingSp(false)
    }
    if (loading === false) {
      fetchData()
    }
  }, [pokemon, loading])

  function capitalize(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const {history} = props
    history.push(`/pokemon/${nameInput}`)
    setNameInput('')
  }

  const renderPokemon = () => {
    return (
      <div>
        <form className="pokeBusca" onSubmit={handleSearch}>
          {pokemon.id !== 1 && <Link to={`/pokemon/${pokemon.id - 1}`}> <button className="but1"><span>Anterior</span></button></Link>}
          <input type="text" placeholder="Digite o nome do pokemon" list="pokeName" onChange={ (e) => setNameInput(e.target.value)} />
          <button className="searchButton" type="submit" disabled={nameInput === '' ? true : false}>Pesquisar</button>
          {pokemon.id !== 898 && <Link to={`/pokemon/${pokemon.id + 1}`}><button className="but2"><span>Próximo</span></button></Link>}
        <datalist id="pokeName">
          {pokemonsName.map(pokemon => (
            <option key={pokemon} value={pokemon} />
          ))}
        </datalist>
        </form>
        <div className="pokemon-info">
          <div className="pokeName">
            <h1>{`Pokemon nº: ${pokemon.id}`}</h1>
            <h2>{capitalize(pokemon.species.name)}</h2>
          </div>
          <div>
            <img src={pokemon.sprites.other["official-artwork"].front_default !== null ? pokemon.sprites.other["official-artwork"].front_default : pokemon.sprites.front_default} alt="pokemon" className="pokImg"/>
          </div>
          <div>
            {pokemon.types.map(type => (
              <span key={type.type.name} className={`${type.type.name} tipo`}>{capitalize(type.type.name)}</span>
            ))}
          </div>
          <div className="statsAbility">
            <div className="ability">
              <h3>Habilidades</h3>
              {pokemon.id <= 10180 && pokemon.abilities.map(ability => (
                <Ability key={ability.ability.name} ability={ability} />
              ))}
            </div>
            <Stats pokemon={pokemon} />
          </div>
          <details className="moveCont">
            <summary className="cont1" onClick={ () => setClick(!click) }><h3>{click ? '► Ataques' : '▼ Ataques'}</h3></summary>
            <div className="cont2">
              {pokemon.moves.map(moves => (
                <Moves key={moves.move.name} moves={moves} />
              ))}
            </div>
          </details>
          <>
            {loadinSp ? <img src={pokebola} alt="loading" /> : <Evolution pokeSpecie={pokeSpecie} />}
          </>
          <PokeImg pokemon={pokemon} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      {loading ? <Loading /> : renderPokemon()}
      <div className="buttonCont">
          <Link to={'/'} className="proxButton"><button>Voltar ao inicio</button></Link>
        </div>
    </div>
  )
}

export default PokeInfo
