import { Pokedex } from "pokeapi-js-wrapper";
const P = new Pokedex();

export default async function fetchData(pokemon) {
  return await P.getPokemonSpeciesByName(pokemon.name);
}
