const _ = require('lodash');
const professorOaksLab = require('./professorOaksLab');
const fightMediator = require('./fightMediator');

async function main() {
  const squirtle = await professorOaksLab.getPokemon(7);
  const pikachu = await professorOaksLab.getPokemon(25);
  // pikachu.fight(squirtle);
  // squirtle.fight(pikachu);
  fightMediator.fight(pikachu, squirtle);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
  pikachu.useAttack(84);
}

main();