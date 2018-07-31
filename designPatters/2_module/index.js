
const Pokemon = require('./pokemon').Pokemon;
const PokeApi = require('./pokeApi.service.js');

async function capture(pokemonId) {
  const data = await PokeApi.getPokemon(pokemonId);
  const pokemon = new Pokemon(data);
  console.log(`I caught a ${pokemon.name}!`);
  return pokemon;
}

async function train(pokemon) {
  console.log(`${pokemon.name}, use scratch!`)
  pokemon.useAttack(10);
  await pokemon.learn(10);
  console.log(`${pokemon.name}, use scratch!`)
  pokemon.useAttack(10);
  await pokemon.learn(55);
  console.log(`${pokemon.name}, use water gun!`)
  pokemon.useAttack(55);
  await pokemon.learn(7);
  console.log(`${pokemon.name}, use fire punch!`)
  pokemon.useAttack(7);
}

async function main() {
  const charmander = await capture(4);
  train(charmander);
  const wartortle = await capture(8);
  train(wartortle);
}

main()