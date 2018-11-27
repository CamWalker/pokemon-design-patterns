const _ = require('lodash');

class Mediator {
  constructor() {
    this.fights = {
      // pokemonName: pokemonTheyAreFighting
    };
    this.history = [];
  }

  execute(name) {
    const args = Array.prototype.slice.call(arguments, 1);
    
    if (this[name]) {
      this.history.push({ name, args: _.cloneDeep(args) })
      return this[name].apply(this, args);
    }
  }

  undo() {
    this.history.pop();
  }

  replay() {
    this.history.forEach(({ name, args }) => {
      console.log(name, args)
      this.execute.call(this, name, ...args);
    })
  }

  fight(pokemon1, pokemon2) { //subscription
    this.fights[pokemon1.name] = pokemon2;
    this.fights[pokemon2.name] = pokemon1;
    console.log(`${pokemon1.name} is fighting ${pokemon2.name}`);
  }

  stopFighting(loserName) { //unsubscribe
    console.log(`${loserName} is unable to battle, ${this.fights[loserName].name} wins!`);
    this.fights[this.fights[loserName].name] = null
    this.fights[loserName] = null;
  }

  useAttack(attackingPokemonName, id) {
    const attacker = _.get(this.fights, _.get(this.fights, [attackingPokemonName, 'name']), null);
    if (attacker) {
      attacker.useAttack(id);
    }
  }
  
  receiveAttack(attack, attackingPokemonName) {
    // call receiveAttack on all subscibers of pokemon
    if (this.fights[attackingPokemonName]) {
      this.fights[attackingPokemonName].receiveAttack(attack);
    }
  }
}

module.exports = new Mediator();