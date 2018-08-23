const Pokemon = require('./pokemon');

class professorOaksLab {
  constructor(id) {
    this.pokemonStore = {};
  }

  async getPokemon(id) {
    if (this.pokemonStore[id]) {
      return this.pokemonStore[id];
    }

    const pokemon = await new Pokemon(id).create();
    this.pokemonStore[id] = pokemon;
    return pokemon;
  }
}

module.exports = new professorOaksLab();