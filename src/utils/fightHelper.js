export default function fightHelper(stats, stats2) {
    const calcDamage = (atk, def) => Math.max(1, Math.floor(((2 * atk) / def)));

    const totalAttack1 = calcDamage(stats[1][1], stats2[2][1]) + calcDamage(stats[3][1], stats2[4][1]);
    const totalAttack2 = calcDamage(stats2[1][1], stats[2][1]) + calcDamage(stats2[3][1], stats[4][1]);

    let hp1 = stats[0][1];
    let hp2 = stats2[0][1];

    const firstFaster = stats[5][1] > stats2[5][1];

    while (hp1 > 0 && hp2 > 0) {
        if (firstFaster) {
            hp2 -= totalAttack1;
            if (hp2 <= 0) break;
            hp1 -= totalAttack2;
        } else {
            hp1 -= totalAttack2;
            if (hp1 <= 0) break;
            hp2 -= totalAttack1;
        }
    }

    return (hp1 > 0 ? "Equipo 1 gana!" : "Equipo 2 gana!");
}
