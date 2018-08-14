const axios = require('axios');

class PokeApi {
  constructor() {
    this.url = 'http://pokeapi.co/api/v2';
    this.count = 0;
    this.pokemon = {};
  }

  increment() {
    this.count += 1;
    console.log(this.count);
  }
  
  getPokemon(pokemonId) {
    if (this.pokemon[pokemonId]) {
      return this.pokemon[pokemonId]
    }
    
    this.increment();
    return axios.get(`${this.url}/pokemon/${pokemonId}/`).then(pokemon => {
      this.pokemon[pokemonId] = pokemon.data;
      return pokemon.data;
    });
  }

  getAttack(attackId) {
    this.increment();
    return axios.get(`${this.url}/move/${attackId}/`).then(attack => attack.data);
  }
}

module.exports = new PokeApi();