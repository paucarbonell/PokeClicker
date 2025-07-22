import { useState, useEffect } from "react";
import { useTeam } from "../context/TeamContext";
import { Link } from "react-router";
import Team from "../components/Team";
import TeamBuilder from "../components/TeamBuilder";
import teamBuilder from "../utils/teamBuilder";
import teamStats from "../utils/teamStats";
import PokemonData from "../components/PokemonData";

export default function Game() {
  const {
    team1,
    setTeam1,
    team2,
    setTeam2,
    stats1,
    setStats1,
    stats2,
    setStats2,
  } = useTeam();
  const [editingTeam, setEditingTeam] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const generateTeam = () => {
      teamBuilder().then((t) => {
        setTeam1(t);
        setStats1(teamStats(t));
      });
      teamBuilder().then((t) => {
        setTeam2(t);
        setStats2(teamStats(t));
      });
    };
    generateTeam();
  }, [setTeam1, setStats1, setTeam2, setStats2]);

  return (
    <main
      className="bg-[length:100%] bg-[url(/imgs/1200px-SSBU-Pokémon_Stadium_2.png)] min-h-screen flex justify-center items-center p-4"
      style={{ fontFamily: "'pixel'" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-7xl gap-6">
        <div className="flex flex-col items-center w-full md:w-1/3">
          <Team
            team={team1}
            setTeam={setTeam1}
            stats={stats1}
            setStats={setStats1}
            teamNum={1}
            setSelected={setSelected}
          />
          <button
            onClick={() => setEditingTeam(1)}
            className="mt-4 bg-white border-2 border-black p-2 w-48 md:w-auto"
          >
            CHOOSE YOUR TEAM!
          </button>
        </div>

        <div className="relative h-40 md:h-72 flex items-center justify-center mx-4">
          <div className="font-bold text-white text-3xl md:text-5xl select-none">
            VS
          </div>
          <Link to="/fight">
            <section className="p-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 border-black border-2 bg-white cursor-pointer">
              FIGHT!
            </section>
          </Link>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/3">
          <Team
            team={team2}
            setTeam={setTeam2}
            stats={stats2}
            setStats={setStats2}
            teamNum={2}
            reverse
            setSelected={setSelected}
          />
          <button
            onClick={() => setEditingTeam(2)}
            className="mt-4 bg-white border-2 border-black p-2 w-48 md:w-auto"
          >
            CHOOSE YOUR TEAM!
          </button>
        </div>

        {selected && (
          <div
            className="fixed left-1/2 top-1/2 max-w-md w-11/12 -translate-x-1/2 -translate-y-1/2 border border-black bg-white p-4 shadow-lg z-50"
            onClick={() => setSelected(null)}
          >
            <PokemonData pokemon={selected} />
          </div>
        )}

        {editingTeam && (
          <div
            className={`fixed top-1/6 bottom-20 max-w-lg w-11/12 md:w-2/5 border border-black bg-white p-4 overflow-auto shadow-lg z-50 ${
              editingTeam === 1 ? "right-0" : "left-0"
            }`}
          >
            <TeamBuilder
              teamNum={editingTeam}
              close={() => setEditingTeam(null)}
              saveTeam={(newTeam) => {
                if (editingTeam === 1) {
                  setTeam1(newTeam);
                  setStats1(teamStats(newTeam));
                } else {
                  setTeam2(newTeam);
                  setStats2(teamStats(newTeam));
                }
                setEditingTeam(null);
              }}
            />
          </div>
        )}
      </div>
    </main>
  );
}
