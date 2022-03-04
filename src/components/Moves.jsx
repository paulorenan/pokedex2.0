import React, { useEffect, useState} from 'react'
import { getPoke } from '../services/pokeapi.js'
import pokebola from '../styles/pokebola.gif'

function Moves(props) {
  const { moves } = props
  const [movesList, setMovesList] = useState({})
  const [loading, setLoading] = useState(true)
  const [click, setClick] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const pokemon = await getPoke(moves.move.url)
      setMovesList(pokemon)
      setLoading(false)
    }
    fetchData()
  }, [moves.move.url])

  function capitalize(string) {
    const maiuscula = string.map((palavra)  => (
      palavra.charAt(0).toUpperCase() + palavra.slice(1)
      ))
    return maiuscula.join(' ')
  }

  return (
    <div>
      {loading ? <img src={pokebola} alt="loading" /> :
      <details className="cont4">
        <summary onClick={ () => setClick(!click)} className={click ? 'caso1' : 'caso2'}>{capitalize(moves.move.name.split('-'))}</summary>
        <div className="cont5">
          {console.log(movesList)}
          { movesList.effect_entries[0]
            ? <p>{movesList.effect_entries[0].short_effect}</p>
            : <p>{(movesList.flavor_text_entries.find((lan) => lan.language.name === "en")).flavor_text}</p>
          }
          {/* <p>{movesList.effect_entries[0].short_effect}</p> */}
          <span className={`${movesList.type.name} tipo`}>{capitalize(movesList.type.name.split('-'))}</span>
          <p>{`Tipo: ${capitalize(movesList.damage_class.name.split('-'))}`}</p>
          <p>{`Power: ${(movesList.power === null ? '--' : movesList.power)}`}</p>
          <p>{`Accuracy: ${(movesList.accuracy === null ? '--' : movesList.accuracy)}`}</p>
        </div>
      </details>
        }
    </div>
  )
}

export default Moves
