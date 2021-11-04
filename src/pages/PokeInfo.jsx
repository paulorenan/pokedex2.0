import React, {useState, useEffect} from 'react'
import {getPokeUrl, getPokeNome, getPoke} from '../services/pokeapi'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Ability from '../components/Ability'
import Moves from '../components/Moves'
import Loading from '../components/Loading'
import Evolution from '../components/Evolution'
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
      console.log(pokeSpecie);
      setLoadingSp(false)
    }
    if (loading === false) {
      fetchData()
    }
  }, [pokemon, loading])

  function capitalize(string) {
    const maiuscula = string.map((palavra)  => (
      palavra.charAt(0).toUpperCase() + palavra.slice(1)
      ))
    return maiuscula.join(' ')
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
            <h2>{capitalize(pokemon.name.split('-'))}</h2>
          </div>
          <div>
            <img src={pokemon.sprites.other["official-artwork"].front_default !== null ? pokemon.sprites.other["official-artwork"].front_default : pokemon.sprites.front_default} alt="pokemon" className="pokImg"/>
          </div>
          <div>
            {pokemon.types.map(type => (
              <span key={type.type.name} className={`${type.type.name} tipo`}>{capitalize(type.type.name.split('-'))}</span>
            ))}
          </div>
          <div className="statsAbility">
            <div className="ability">
              <h3>Habilidades</h3>
              {pokemon.id <= 10180 && pokemon.abilities.map(ability => (
                <Ability key={ability.ability.name} ability={ability} />
              ))}
            </div>
            <div className="stats">
              <h3>Stats</h3>
              <div className="statsDiv">
                <div className="points">
                <label>HP</label>
                <meter min="0" max="255" value={pokemon.stats[0].base_stat}></meter>
                </div>
                <div className="points">
                  <label>Attack</label>
                  <meter min="0" max="190" value={pokemon.stats[1].base_stat}></meter>
                </div>
                <div className="points">
                  <label>Defense</label>
                  <meter min="0" max="230" value={pokemon.stats[2].base_stat}></meter>
                </div>
                <div className="points">
                  <label>Special Attack</label>
                  <meter min="0" max="194" value={pokemon.stats[3].base_stat}></meter>
                </div>
                <div className="points">
                  <label>Special Defense</label>
                  <meter min="0" max="230" value={pokemon.stats[4].base_stat}></meter>
                </div>
                <div className="points">
                  <label>Speed</label>
                  <meter min="0" max="180" value={pokemon.stats[5].base_stat}></meter>
                </div>
              </div>
            </div>
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
            {loadinSp ? null : <Evolution pokeSpecie={pokeSpecie} />}
          </>
          <div className="imgCont">
            <h3>Sprites</h3>
            <div className="img1">
              <div className="img2">
                <div className="nomePok">
                  <p className="lado">Frente</p>
                </div>
                <div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
              </div>
              <div className="img2">
                <div className="nomePok">
                  <p className="lado">Costas</p>
                </div>
                <div>
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                </div>
              </div>
            </div>
            {pokemon.sprites.back_female != null && 
              <div className="img1">
                <div className="img2">
                  <div className="nomePok">
                    <p className="lado">{'Frente (Fêmea)'}</p>
                  </div>
                  <div>
                    <img src={pokemon.sprites.front_female} alt={pokemon.name} />
                  </div>
                </div>
                <div className="img2">
                  <div className="nomePok">
                    <p className="lado">{"Costas (Fêmea)"}</p>
                  </div>
                  <div>
                    <img src={pokemon.sprites.back_female} alt={pokemon.name} />
                  </div>
                </div>
            </div> }
            <div className="img1">
              <div className="img2">
                <div className="nomePok">
                  <p className="lado">{"Frente (Shiny)"}</p>
                </div>
                <div>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                </div>
              </div>
              <div className="img2">
                <div className="nomePok">
                  <p className="lado">{"Costas (Shiny)"}</p>
                </div>
                <div>
                <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                </div>
              </div>
            </div>
            {pokemon.sprites.back_shiny_female != null && 
              <div className="img1">
                <div className="img2">
                  <div className="nomePok">
                    <p className="lado">{'Frente (Fêmea Shiny)'}</p>
                  </div>
                  <div>
                    <img src={pokemon.sprites.front_shiny_female} alt={pokemon.name} />
                  </div>
                </div>
                <div className="img2">
                  <div className="nomePok">
                    <p className="lado">{"Costas (Fêmea Shiny)"}</p>
                  </div>
                  <div>
                    <img src={pokemon.sprites.back_shiny_female} alt={pokemon.name} />
                  </div>
                </div>
            </div> }
          </div>
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