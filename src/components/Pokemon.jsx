import React, {useEffect, useState} from 'react'

function Pokemon(props) {
  const { pokemon } = props
  const [pokeInfo, setPokeInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      const data = await response.json()
      setPokeInfo(data)
      setLoading(false)
    }
    fetchData()
  }, [pokemon])

  function capitalize(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
  }

  return (
    <>
      {loading ? null : 
        <div>
          <h1>{capitalize(pokeInfo.name)}</h1>
          <img src={pokeInfo.sprites.front_default} alt={pokeInfo.name} />
        </div>
      }
    </>
  )
}

export default Pokemon
