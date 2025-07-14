import Pokemon from "./Pokemon"
import teamBuilder from "../utils/teamBuilder"
import { useEffect } from "react"

export default function Team({ team, setTeam, stats, teamNum, width, reverse = false }) {
    const generateTeam = () => {
        teamBuilder().then(t => {
            setTeam(t);
        });
    };

    useEffect(() => {
        generateTeam();
    }, []);

    return (
        <>
            <div className={`w-${width} flex ${reverse ? `flex-row-reverse` : `flex-row`}`}>
                <div className="justify-items-center">
                    <div className="mb-4 font-bold text-2xl">TEAM {teamNum}</div>
                    <div className="grid grid-cols-2 grid-rows-3 gap-2">
                        {team.map((pokemon, i) => {
                            let rowClass = '';
                            if (i === 2 || i === 3) rowClass = 'row-start-2';
                            else if (i === 4 || i === 5) rowClass = 'row-start-3';

                            return (
                                <div key={i} className={rowClass}>
                                    <Pokemon pokemon={pokemon} />
                                </div>
                            );
                        })}
                    </div>
                    <button onClick={generateTeam} className="mt-4">GENERATE NEW TEAM</button>
                </div>
                <section className="m-5 flex flex-col items-center justify-center">
                    <div className="font-bold mb-2 underline-offset-4">STATS</div>
                    <ol className="flex flex-col items-center">
                        {stats.map(([name, value], j) => {
                            return (
                                <li className="text-xs mb-2" key={j}>{name}: {value}</li>
                            );
                        })}
                    </ol>
                </section>
            </div>
        </>
    )
}