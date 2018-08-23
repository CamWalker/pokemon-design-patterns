const _ = require('lodash');
const Pokemon = require('./pokemon');
const professorOaksLab = require('./professorOaksLab');

async function main() {
  const pokemonCollection = [];

  const startMemory = process.memoryUsage().heapUsed;

  // for (let i = 0; i < 2000; i++) {
  //   const pokemon = pokemonCollection.push(await new Pokemon(60).create());
  // }

  for (let i = 0; i < 2000; i++) {
    pokemonCollection.push(await professorOaksLab.getPokemon(60));
  }

  const endMemory = process.memoryUsage().heapUsed;

  console.log(endMemory, startMemory);
  console.log('used Memory: ', (endMemory - startMemory) / 1000000);
  console.log('total Pokemon: ', _.size(professorOaksLab.pokemonStore));
}

main();