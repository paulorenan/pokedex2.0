import React, {useState, useEffect} from 'react'
import { getPoke } from '../services/pokeapi.js'
import Loading from './Loading.jsx'

function Ability(props) {
  const { ability } = props.ability
  const [pokeAbility, setAbility] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const pokemon = await getPoke(ability.url)
      setAbility(pokemon)
      setLoading(false)
    }
    fetchData()
  }, [ability.url])

  function capitalize(string) {
    const maiuscula = string.map((palavra)  => (
      palavra.charAt(0).toUpperCase() + palavra.slice(1)
      ))
    return maiuscula.join(' ')
  }

  function filtrarAbilities(abilities) {
    const array = abilities.effect_entries
    const arrayFiltrado = array.filter((item) => item.language.name === 'en')
    return arrayFiltrado[0].short_effect
  }

  return (
    <div>
      {loading ? <Loading /> : 
      <details>
        <summary>{capitalize(ability.name.split('-'))}</summary>
        <p>{filtrarAbilities(pokeAbility)}</p>
      </details>}
    </div>
  )
}

export default Ability
