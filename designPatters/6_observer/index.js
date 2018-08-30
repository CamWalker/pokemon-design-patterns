const _ = require('lodash');
const Pokemon = require('./pokemon');
const professorOaksLab = require('./professorOaksLab');

async function main() {
  const squirtle = await professorOaksLab.getPokemon(7);
  const pikachu = await professorOaksLab.getPokemon(25);
  pikachu.fight(squirtle);
  squirtle.fight(pikachu);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
}

main();