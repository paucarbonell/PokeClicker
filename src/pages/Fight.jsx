import { useTeam } from "../context/TeamContext";
import { useState } from "react";
import Team from "../components/Team";
import PokemonData from "../components/PokemonData";

export default function Fight() {
  const { team1, team2, stats1, stats2 } = useTeam();
  const [selected, setSelected] = useState(null);

  return (
    <main>
      <Team team={team1} stats={stats1} teamNum={1} setSelected={setSelected} />
      <Team team={team2} stats={stats2} teamNum={2} setSelected={setSelected} />
      {selected && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-black bg-white p-4 w-3/6"
          onClick={() => setSelected(null)}
        >
          <PokemonData pokemon={selected} />
        </div>
      )}
    </main>
  );
}
