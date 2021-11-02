import React, {useState, useEffect} from 'react'
import {getPokeUrl} from '../services/pokeapi'
import Header from '../components/Header'

function PokeInfo(props) {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const { match: { params: { id } } } = props

  useEffect(() => {
    async function fetchData() {
      const pokemon = await getPokeUrl(id)
      setPokemon(pokemon)
      setLoading(false)
    }
    fetchData()
  }, [id])

  function capitalize(string) {
    console.log(string);
    const maiuscula = string.map((palavra)  => (
      palavra.charAt(0).toUpperCase() + palavra.slice(1)
      ))
    return maiuscula.join(' ')
  }

  const renderPokemon = () => {
    return (
      <div className="pokemon-info">
        <div>
          <h1>{`Pokemon nº: ${pokemon.id}`}</h1>
          <h2>{capitalize(pokemon.name.split('-'))}</h2>
        </div>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div>
          {pokemon.types.map(type => (
            <span key={type.type.name}>{capitalize(type.type.name.split('-'))}</span>
          ))}
        </div>
        <div>
          <h3>Habilidades</h3>
          {pokemon.abilities.map(ability => (
            <span key={ability.ability.name}>{capitalize(ability.ability.name.split('-'))}</span>
          ))}
        </div>
        <div>
          <h3>Stats</h3>
            <div>
              <label>HP</label>
              <meter min="0" max="255" value={pokemon.stats[0].base_stat}></meter>
              <label>Attack</label>
              <meter min="0" max="190" value={pokemon.stats[1].base_stat}></meter>
              <label>Defense</label>
              <meter min="0" max="230" value={pokemon.stats[2].base_stat}></meter>
              <label>Special Attack</label>
              <meter min="0" max="194" value={pokemon.stats[3].base_stat}></meter>
              <label>Special Defense</label>
              <meter min="0" max="230" value={pokemon.stats[4].base_stat}></meter>
              <label>Speed</label>
              <meter min="0" max="180" value={pokemon.stats[5].base_stat}></meter>
            </div>
        </div>
        <details>
          <summary>Ataques</summary>
          {pokemon.moves.map(move => (
            <span key={move.move.name}>{capitalize(move.move.name.split('-'))}</span>
          ))}
        </details>
        <div>
          <h3>Sprites</h3>
          <div>
            <div>
              <div>
                <span>Frente</span>
              </div>
              <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
            </div>
            <div>
              <div>
                <span>Costas</span>
              </div>
              <div>
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
              </div>
            </div>
          </div>
          {pokemon.sprites.back_female != null && 
            <div>
              <div>
                <div>
                  <span>{'Frente (Fêmea)'}</span>
                </div>
                <div>
                  <img src={pokemon.sprites.front_female} alt={pokemon.name} />
                </div>
              </div>
              <div>
                <div>
                  <span>{"Costas (Fêmea)"}</span>
                </div>
                <div>
                  <img src={pokemon.sprites.back_female} alt={pokemon.name} />
                </div>
              </div>
          </div> }
          <div>
            <div>
              <div>
                <span>{"Frente (Shiny)"}</span>
              </div>
              <div>
              <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
              </div>
            </div>
            <div>
              <div>
                <span>{"Costas (Shiny)"}</span>
              </div>
              <div>
              <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
              </div>
            </div>
          </div>
          {pokemon.sprites.back_shiny_female != null && 
            <div>
              <div>
                <div>
                  <span>{'Frente (Fêmea Shiny)'}</span>
                </div>
                <div>
                  <img src={pokemon.sprites.front_shiny_female} alt={pokemon.name} />
                </div>
              </div>
              <div>
                <div>
                  <span>{"Costas (Fêmea Shiny)"}</span>
                </div>
                <div>
                  <img src={pokemon.sprites.back_shiny_female} alt={pokemon.name} />
                </div>
              </div>
          </div> }
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      {loading ? <p>Loading...</p> : renderPokemon()}
    </div>
  )
}

export default PokeInfo
