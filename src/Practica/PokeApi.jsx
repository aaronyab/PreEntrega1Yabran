import { useState } from "react"
import { useEffect } from "react"



export const PokeApi = () => {
const [pokemon, setPokemon] = useState(null)
const [id, setId] = useState(1)
useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}` )
    .then((response) => response.json())
    .then((data) => setPokemon(data))
}, [id])

const handleAnterior = () => {
    id > 1 && setId(id - 1)
}

const handleSiguiente = () => {
 setId(id + 1 )
}

  return (
    <div className="container m-auto mt-8">
    <h2 className="text-4xl font-semibold">Pokeapi</h2>
    <hr />

      {
          pokemon &&
          <>
              <h2 className="text-2xl font-semibold">{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          </>
      }

      <div className="flex gap-5">
          <button className="bg-indigo-600 px-3 py-1 uppercase text-white font-semibold rounded-sm" onClick={handleAnterior}>Anterior  </button>
          <button className="bg-indigo-600 px-3 py-1 uppercase text-white font-semibold rounded-sm" onClick={handleSiguiente}>Siguiente </button>
      </div>
  </div>
  )
}
