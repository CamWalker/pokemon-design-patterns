const _ = require('lodash');
const professorOaksLab = require('./professorOaksLab');
const mediator = require('./fightMediator');
const Pokemon = require('./pokemon');

async function main() {
  const squirtle = await professorOaksLab.getPokemon(7);
  const pikachu = await professorOaksLab.getPokemon(25);

  mediator.execute('fight', pikachu, squirtle);
  mediator.execute('useAttack', 'pikachu', 84);
  mediator.execute('useAttack', 'pikachu', 84);
  mediator.execute('useAttack', 'pikachu', 84);
  mediator.execute('useAttack', 'pikachu', 84);
  mediator.execute('useAttack', 'pikachu', 84);
  mediator.execute('useAttack', 'pikachu', 84);

  mediator.undo();
  mediator.undo();
  mediator.undo();
  mediator.replay();

  mediator.execute('useAttack', 'squirtle', 33);
  mediator.execute('useAttack', 'squirtle', 33);
  mediator.execute('useAttack', 'squirtle', 33);
  mediator.execute('useAttack', 'squirtle', 33);
  mediator.execute('useAttack', 'squirtle', 33);
}

main();