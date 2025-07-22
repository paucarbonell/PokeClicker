import { Pokedex } from "pokeapi-js-wrapper";
const P = new Pokedex();

export default async function fetchAll() {
  const data = await P.getPokemonsList({ limit: 151 });
  const detailedPokemon = await Promise.all(
    data.results.map((p) => P.getPokemonByName(p.name))
  );
  return detailedPokemon;
}
