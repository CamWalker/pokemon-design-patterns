const PokeApi = require('./pokeApi.service.js');
const Pokemon = require('./pokemon');
const _ = require('lodash');

async function main() {
  
  const pikachu = await new Pokemon(25).create();
  pikachu.useAttack(45);
  let pika2;
  setTimeout(async () => {
    pika2 = await PokeApi.getPokemon(25);
    console.log(pika2);
  }, 3000);
}

main();