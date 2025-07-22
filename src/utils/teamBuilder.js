import { Pokedex } from "pokeapi-js-wrapper";
const P = new Pokedex();

export default async function teamBuilder() {
  function getId() {
    return Math.floor(Math.random() * 151) + 1;
  }

  const ids = new Set();
  while (ids.size < 6) ids.add(getId());

  const team = await Promise.all([...ids].map((id) => P.getPokemonByName(id)));

  return team;
}
