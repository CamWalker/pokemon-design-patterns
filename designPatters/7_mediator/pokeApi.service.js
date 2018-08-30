const axios = require('axios');
const squirtle = require('./pokemonCollection/squirtle.json');
const pikachu = require('./pokemonCollection/pikachu.json');
const tackle = require('./attackCollection/tackle.json');
const tail_whip = require('./attackCollection/tail_whip.json');
const growl = require('./attackCollection/growl.json');
const thunder_shock = require('./attackCollection/thunder_shock.json');

class PokeApi {
  constructor() {
    this.url = 'http://pokeapi.co/api/v2';
    this.count = 0;
    this.pokemon = {
      7: squirtle,
      25: pikachu,
    };
    this.attacks = {
      33: tackle,
      39: tail_whip,
      45: growl,
      84: thunder_shock,
    };
  }

  increment() {
    this.count += 1;
    console.log(this.count);
  }
  
  getPokemon(pokemonId) {
    if (this.pokemon[pokemonId]) {
      return this.pokemon[pokemonId];
    }
    
    this.increment();
    return axios.get(`${this.url}/pokemon/${pokemonId}/`).then(pokemon => {
      this.pokemon[pokemonId] = pokemon.data;
      return pokemon.data;
    });
  }

  getAttack(attackId) {
    if (this.attacks[attackId]) {
      return Promise.resolve(this.attacks[attackId]);
    }

    this.increment();
    return axios.get(`${this.url}/move/${attackId}/`).then(attack => {
      this.attacks[attackId] = attack.data;
      return attack.data
    });
  }
}

module.exports = new PokeApi();