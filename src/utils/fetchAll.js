export default async function fetchAll() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const res = await fetch(url);
    const allPokemon = await res.json();

    const promises = allPokemon.results.map(p =>
        fetch(p.url).then(res => res.json())
    );

    const detailedPokemon = await Promise.all(promises);
    return detailedPokemon;
}
