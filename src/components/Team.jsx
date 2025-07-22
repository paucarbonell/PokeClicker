import Pokemon from "./Pokemon";

export default function Team({
  team,
  stats,
  teamNum,
  reverse = false,
  setSelected,
}) {
  return (
    <div
      className={`w-140 flex items-center ${
        reverse ? `flex-row-reverse` : `flex-row`
      }`}
    >
      <div className="justify-items-center">
        <div className="mb-4 font-bold text-2xl bg-white p-2 border-2 border-black">
          TEAM {teamNum}
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          {team.map((pokemon, i) => {
            let rowClass = "";
            if (i === 2 || i === 3) rowClass = "row-start-2";
            else if (i === 4 || i === 5) rowClass = "row-start-3";

            return (
              <div
                key={i}
                className={rowClass}
                onClick={() => setSelected(pokemon)}
              >
                <Pokemon pokemon={pokemon} />
              </div>
            );
          })}
        </div>
      </div>
      <section className="m-5 p-2 h-50 flex flex-col items-center justify-center border-2 border-black bg-white">
        <div className="font-bold mb-2 underline-offset-4">STATS</div>
        <ol className="flex flex-col items-center">
          {stats.map(([name, value], j) => {
            return (
              <li className="text-xs mb-2" key={j}>
                {name}: {value}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
