const axios = require('axios');

class PokeApi {
  constructor() {
    this.url = 'http://pokeapi.co/api/v2';
  }
  
  getPokemon(pokemonId) {
    return axios.get(`${this.url}/pokemon/${pokemonId}/`).then(pokemon => pokemon.data);
  }

  getAttack(attackId) {
    return axios.get(`${this.url}/move/${attackId}/`).then(attack => attack.data);
  }
}

module.exports = new PokeApi();