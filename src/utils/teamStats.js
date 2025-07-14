export default function teamStats(team) {
    let hp = 0;
    let attack = 0;
    let defense = 0;
    let specialAttack = 0;
    let specialDefense = 0;
    let speed = 0;

    team.forEach(pokemon => {
        hp += pokemon.stats[0].base_stat;
        attack += pokemon.stats[1].base_stat;
        defense += pokemon.stats[2].base_stat;
        specialAttack += pokemon.stats[3].base_stat;
        specialDefense += pokemon.stats[4].base_stat;
        speed += pokemon.stats[5].base_stat;
    });

    return [
        ['HP', hp],
        ['ATTACK', attack],
        ['DEFENSE', defense],
        ['SPECIAL ATTACK', specialAttack],
        ['SPECIAL DEFENSE', specialDefense],
        ['SPEED', speed]
    ];

}