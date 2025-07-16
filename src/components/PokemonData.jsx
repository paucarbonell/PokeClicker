import { useState, useEffect } from 'react'

export default function PokemonData(pokemon) {

    const [description, setDescription] = useState([]);
    return (
        <main className="w-full h-full bg-white border-2 border-black flex flex-col">
            <div className="grid grid-cols-5 grid-rows-5 gap-4">
                <div className="col-span-2 row-span-3">
                    <img src={pokemon.sprites.front_default} alt="sprite" />
                </div>
                <div className="col-start-3">
                    <section>{pokemon.id} {pokemon.name}</section>
                    <section></section>
                </div>
                <div className="col-start-3 row-start-2">3</div>
                <div className="col-start-3 row-start-3">4</div>
                <div className="col-span-3 row-start-4">5</div>
            </div>
        </main>
    )
}