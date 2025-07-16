import { useState, useEffect } from "react";

export default function Pokemon({ pokemon }) {
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        async function fetchTypes() {
            const results = await Promise.all(
                pokemon.types.map(async ({ type }) => {
                    const res = await fetch(`https://pokeapi.co/api/v2/type/${type.name}`);
                    return res.json();
                })
            );
            setTypeData(results);
        }
        fetchTypes();
    }, [pokemon.types]);

    if (!typeData.length) return <div>Cargando tipos...</div>;

    return (
        <main className="flex flex-col justify-center items-center relative border-2 border-black p-2 bg-gray size-30 bg-white">
            {typeData.map((type, i) => (
                <img
                    key={i}
                    src={type.sprites["generation-iv"].platinum.name_icon}
                    alt={type.name}
                    className={`w-9 h-4 mr-0.5 mt-0.5 absolute top-0 right-${i * 6}`}
                />
            ))}

            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-20 h-20" />
            <section>
                <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            </section>
        </main>
    );
}
