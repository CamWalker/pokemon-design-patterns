const axios = require('axios');

class PokeApi {
  constructor() {
    this.url = 'http://pokeapi.co/api/v2';
    // this.count = 0;
  }

  // increment() {
  //   this.count += 1;
  //   console.log(this.count);
  // }
  
  getPokemon(pokemonId) {
    // this.increment();
    return axios.get(`${this.url}/pokemon/${pokemonId}/`).then(pokemon => pokemon.data);
  }

  getAttack(attackId) {
    // this.increment();
    return axios.get(`${this.url}/move/${attackId}/`).then(attack => attack.data);
  }
}

module.exports = PokeApi;
// module.exports = new PokeApi();