class Mediator {
  constructor() {
    this.opponent = {}
  }

  fight(pokemon1, pokemon2) {
    this.opponent[pokemon1.name] = pokemon2;
    this.opponent[pokemon2.name] = pokemon1;
  }

  useAttack(attack, attackerName) {
    this.opponent[attackerName].receiveAttack(attack);
  }

  stopFighting(pokemonName) {
    console.log(`${pokemonName} is unable to battle, ${this.opponent[pokemonName].name} wins!`);
    this.opponent[this.opponent[pokemonName].name] = null;
    this.opponent[pokemonName] = null;
  }
}

module.exports = new Mediator();
