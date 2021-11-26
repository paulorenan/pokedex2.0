import React from 'react'

function PokeImg(props) {
  const { pokemon } = props
  return (
    <div className="imgCont">
      <h3>Sprites</h3>
      <div className="img1">
        <div className="img3">
          <div className="img2">
            <div div className="nomePok">
              <p className="lado">Frente</p>
            </div>
            <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          </div>
          {pokemon.sprites.back_default !== null &&
          <div className="img2">
            <div className="nomePok">
              <p className="lado">Costas</p>
            </div>
            <div>
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            </div>
          </div>}
          <div className="img1">
          <div className="img2">
            <div className="nomePok">
              <p className="lado">{"Frente (Shiny)"}</p>
            </div>
            <div>
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            </div>
          </div>
          {pokemon.sprites.back_shiny !== null && 
          <div className="img2">
            <div className="nomePok">
              <p className="lado">{"Costas (Shiny)"}</p>
            </div>
            <div>
            <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
            </div>
          </div>}
        </div>
      </div>
      </div>
      <div className="img3">
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
  )
}

export default PokeImg
