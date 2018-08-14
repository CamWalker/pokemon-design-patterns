const _ = require('lodash');
const PokeApi = require('./pokeApi.service.js');
const Pokemon = require('./pokemon');

async function main() {
  const pikachu = await new Pokemon(25).create();
  pikachu.useAttack(45);

  pikachu.learnPrank({
    id: 1,
    name: 'static cling',
    type: {
      name: 'electric',
    },
    isFunny: true,
  });
  pikachu.usePrank(1);
  pikachu.learnPrank({
    id: 2,
    name: 'shock alarm clock',
    type: {
      name: 'electric',
    },
    isFunny: false,
  });
  pikachu.usePrank(2);
  pikachu.usePrank(3);
}

main();