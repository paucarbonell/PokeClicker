import useTypeSprites from "../utils/typeSprite";
import fetchData from "../utils/fetchData";
import { useState, useEffect } from "react";

export default function PokemonData({ pokemon }) {
  const typeData = useTypeSprites(pokemon);
  const [dataPoke, setDataPoke] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    fetchData(pokemon).then(setDataPoke);
  }, [pokemon]);

  function removeAccent(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function transformText(text) {
    return text
      .toLowerCase()
      .replace(/\f/g, " ")
      .replace(/é/gi, "e")
      .replace(/(^\w|(?<=\.\s)\w)/g, (l) => l.toUpperCase());
  }

  if (!typeData || !dataPoke || !pokemon?.sprites)
    return <div>Cargando...</div>;
  if (!pokemon || !pokemon.sprites) return <div>Cargando...</div>;

  return (
    <main className="bg-white border-2 border-black p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-3 grid-rows-4 gap-4 items-center">
        <div className="col-span-2 row-span-3 flex justify-center items-center">
          <img
            className="size-60"
            src={pokemon.sprites.front_default}
            alt="sprite"
          />
        </div>
        <div className="col-start-3 text-right pr-2">
          <section className="text-xl font-bold">
            #{pokemon.id}{" "}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </section>
          <section className="italic text-sm text-gray-600 mt-1">
            {removeAccent(dataPoke.genera[7].genus)}
          </section>
        </div>
        <div className="col-start-3 row-start-2 w-full flex justify-end pr-2">
          {typeData.map((type, i) => (
            <img
              key={i}
              src={
                type.sprites["generation-vi"]["omega-ruby-alpha-sapphire"]
                  .name_icon
              }
              alt={type.name}
              className={`w-20 mr-0.5 mt-0.5`}
            />
          ))}
        </div>
        <div className="col-start-3 row-start-3 text-sm text-gray-700 text-right pr-2">
          <section>Altura: {pokemon.height / 10} m</section>
          <section>Peso: {pokemon.weight / 10} kg</section>
        </div>
        <div className="col-span-3 row-start-4 text-center text-xl italic px-4 text-gray-800 lowercase first-letter:uppercase">
          {transformText(dataPoke.flavor_text_entries[4].flavor_text)}
        </div>
      </div>
    </main>
  );
}
