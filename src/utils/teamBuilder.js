import fetchAll from "./fetchAll";

export default async function teamBuilder() {

    function getId() {
        let id = Math.floor(Math.random() * 151) + 1;
        return id;
    }

    async function fetchPokemon() {
        let id = getId();
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        return pokemon;
    }

    const team = [];

    while (team.length < 6) {
        const poke = await fetchPokemon();
        if (!team.some(p => p.id === poke.id)) {
            team.push(poke);
        }
    }
    return team;
}


