const AURORA = 'Aurora';
const EMBER = 'Ember';
const NEBULA = 'Nebula';
const RIFT = 'Rift';
const OBSIDIAN = 'Obsidian';
const ECLIPSE = 'Eclipse';

function firstRoute(gate) {
    if (gate === AURORA) {
        return EMBER;
    }
    if (gate === EMBER) {
        return NEBULA;
    }
    if (gate === NEBULA) {
        return RIFT;
    }
    if (gate === RIFT) {
        return AURORA;
    }
}

function secondRoute(gate) {
    if (gate === EMBER) {
        return NEBULA;
    }
    if (gate === NEBULA) {
        return RIFT;
    }
    if (gate === RIFT) {
        return OBSIDIAN;
    }
    if (gate === OBSIDIAN) {
        return ECLIPSE;
    }
    if (gate === ECLIPSE) {
        return EMBER;
    }
}

function meet(ship1, ship2) {
    return ship1 === ship2
        ? 0
        : meet(firstRoute(ship1), secondRoute(ship2)) + 1;
}
console.log(meet(AURORA, EMBER));

//Aurora → Ember → Nebula → Rift → Aurora → ...
//Ember → Nebula → Rift → Obsidian → Eclipse → Ember → ...
