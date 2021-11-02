const pokeNomeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=898'

export const getPokeNome = async () => {
  const response = await fetch(pokeNomeUrl)
  const data = await response.json()
  return data.results.map(pokemon => pokemon.name)
}

export const getPoke = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}