// TeamBuilder.jsx
import { useState, useEffect } from "react";
import fetchAll from "../utils/fetchAll";
import Pokemon from "./Pokemon";

export default function TeamBuilder({ close, saveTeam, teamNum }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [team, setTeam] = useState([null, null, null, null, null, null]);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        fetchAll().then(data => {
            if (Array.isArray(data)) setPokemonList(data);
            else setPokemonList([]);
        });
    }, []);

    const addToTeam = async (index, pokemonName) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await res.json();
        const updated = [...team];
        updated[index] = data;
        setTeam(updated);
        setSelectedSlot(null);
    };

    const finishSelection = () => {
        saveTeam(team.filter(Boolean));
    };

    return (
        <div className="border-4 border-black w-full h-full mx-auto p-4 flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">CHOOSE YOUR TEAM! (Team {teamNum})</h1>

            <div className="grid grid-cols-6 gap-3">
                {team.map((poke, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedSlot(i)}
                        className={`w-24 h-24 border-2 flex items-center justify-center cursor-pointer ${selectedSlot === i ? "border-blue-500" : "border-black"
                            }`}
                    >
                        {poke ? (
                            <img src={poke.sprites.front_default} alt={poke.name} />
                        ) : (
                            <span>Slot {i + 1}</span>
                        )}
                    </div>
                ))}
            </div>

            <div className="overflow-y-auto h-2/3 border border-black p-2 grid grid-cols-6 gap-2">
                {Array.isArray(pokemonList) &&
                    pokemonList.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => selectedSlot !== null && addToTeam(selectedSlot, p.name)}
                            className="cursor-pointer"
                        >
                            <Pokemon pokemon={p} />
                        </div>
                    ))}
            </div>

            <div className="flex gap-4 justify-center mt-4">
                <button
                    onClick={finishSelection}
                    className="border border-black px-4 py-2 font-bold"
                >
                    Save Team {teamNum}
                </button>
                <button
                    onClick={close}
                    className="border border-black px-4 py-2 font-bold"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
