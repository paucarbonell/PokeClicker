import { useState, useEffect } from "react";
import Team from "../components/Team"
import teamBuilder from "../utils/teamBuilder";
import teamStats from "../utils/teamStats";

export default function Game() {

    const [team, setTeam] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [stats, setStats] = useState([]);
    const [stats2, setStats2] = useState([]);

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

    useEffect(() => {
        generateTeam();
    }, []);

    return (
        <>
            <main
                className="flex items-center h-screen w-4/5 justify-between mx-auto"
                style={{ fontFamily: "'pixel'" }}>
                <Team team={team} setTeam={setTeam} stats={stats} teamNum={1} width={140} />
                <div className="relative h-3/4 my-auto flex items-center justify-center">
                    <div className="font-bold">VS</div>
                    <button className="p-2 absolute bottom-0 border-black border-2">FIGHT!</button>
                </div>
                <Team team={team2} setTeam={setTeam2} stats={stats2} teamNum={2} width={140} reverse />
            </main>
        </>
    );
}
