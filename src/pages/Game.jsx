// Game.jsx
import { useState, useEffect } from "react";
import Team from "../components/Team";
import TeamBuilder from "../components/TeamBuilder";
import teamBuilder from "../utils/teamBuilder";
import teamStats from "../utils/teamStats";
import fightHelper from "../utils/fightHelper";

export default function Game() {
    const [team, setTeam] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [stats, setStats] = useState([]);
    const [stats2, setStats2] = useState([]);
    const [result, setResult] = useState(null);
    const [editingTeam, setEditingTeam] = useState(null);

    const generateTeam = () => {
        teamBuilder().then(t => {
            setTeam(t);
            setStats(teamStats(t));
        });
        teamBuilder().then(t => {
            setTeam2(t);
            setStats2(teamStats(t));
        });
    };

    const handleFight = () => {
        const r = fightHelper(stats, stats2);
        setResult(r);
        setTimeout(() => setResult(null), 3000);
    };

    useEffect(() => {
        generateTeam();
    }, []);

    return (
        <main className="bg-[length:100%] bg-[url(/imgs/1200px-SSBU-Pokémon_Stadium_2.png)]">
            <main
                className="flex items-center h-dvh w-4/5 justify-between mx-auto "
                style={{ fontFamily: "'pixel'" }}
            >
                <Team
                    team={team}
                    setTeam={setTeam}
                    stats={stats}
                    setStats={setStats}
                    teamNum={1}
                    width={140}
                    openBuilder={() => setEditingTeam(1)}
                />
                <div className="relative h-3/4 my-auto flex items-center justify-center mx-4">
                    <div className="font-bold text-white">VS</div>
                    <button
                        onClick={handleFight}
                        className="p-2 absolute bottom-0  border-black border-2 bg-white"
                    >
                        FIGHT!
                    </button>
                    {result && (
                        <div className="absolute bottom-15 whitespace-nowrap bg-white border-2 border-black p-1">{result}</div>
                    )}
                </div>
                <Team
                    team={team2}
                    setTeam={setTeam2}
                    stats={stats2}
                    setStats={setStats2}
                    teamNum={2}
                    width={140}
                    reverse
                    openBuilder={() => setEditingTeam(2)}
                />

                {editingTeam && (
                    <div
                        className={`absolute top-1/6 bottom-46 w-9/20 h-2/3 border border-black bg-white p-4 overflow-auto shadow-lg ${editingTeam === 1 ? "right-0" : "left-0"
                            }`}
                        style={{ zIndex: 20 }}
                    >
                        <TeamBuilder
                            teamNum={editingTeam}
                            close={() => setEditingTeam(null)}
                            saveTeam={(newTeam) => {
                                if (editingTeam === 1) {
                                    setTeam(newTeam);
                                    setStats(teamStats(newTeam));
                                } else {
                                    setTeam2(newTeam);
                                    setStats2(teamStats(newTeam));
                                }
                                setEditingTeam(null);
                            }}
                        />
                    </div>
                )}
            </main>
        </main>
    );
}
