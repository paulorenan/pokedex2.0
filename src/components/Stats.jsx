import React from 'react'

function Stats(props) {
  const {pokemon} = props
  return (
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
  )
}

export default Stats
