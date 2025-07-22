import { useState, useEffect } from "react";
import { Pokedex } from "pokeapi-js-wrapper";

const P = new Pokedex();

export default function useTypeSprites(pokemon) {
  const [typeData, setTypeData] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      if (!pokemon?.types) return;
      const results = await Promise.all(
        pokemon.types.map(({ type }) => P.getTypeByName(type.name))
      );
      setTypeData(results);
    }
    fetchTypes();
  }, [pokemon?.types]);

  return typeData;
}
