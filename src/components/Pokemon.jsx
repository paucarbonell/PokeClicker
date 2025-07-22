import typeSprite from "../utils/typeSprite";

export default function Pokemon({ pokemon }) {
  const typeData = typeSprite(pokemon);

  if (!typeData.length) return <div>Cargando tipos...</div>;

  return (
    <main className="flex flex-col justify-center items-center relative border-2 border-black p-2 bg-gray size-30 bg-white">
      {typeData.map((type, i) => (
        <img
          key={i}
          src={type.sprites["generation-vi"]["omega-ruby-alpha-sapphire"].name_icon}
          alt={type.name}
          className={`w-9 h-4 mr-0.5 mt-0.5 absolute top-0 right-${i * 6}`}
        />
      ))}

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-20 h-20"
      />
      <section>
        <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
      </section>
    </main>
  );
}
