const _ = require('lodash');
const PokeApi = require('./pokeApi.service.js');

class Attack {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type.name;
  }
}

class Pokemon {
  constructor(id) {
    this.level = 1;
    this.id = id;
    // this.levelUpMoves = {};
    this.attacks = {};
  }

  async create() {
    const data = await PokeApi.getPokemon(this.id);
    this.name = data.name;
    this.type = data.types[0].type.name;

    const calls = [];

    _.forEach(
      _.filter(data.moves, move => _.find(move.version_group_details, version => version.version_group.name === 'yellow' && version.move_learn_method.name === 'level-up')),
      move => {
        const version = _.find(move.version_group_details, version => {
          return version.version_group.name === 'yellow' && version.move_learn_method.name === 'level-up';
        })
        if (version.level_learned_at === 1) {
          calls.push(this.learn(_.replace(_.replace(move.move.url, 'https://pokeapi.co/api/v2/move/', ''), '/','')));
        }
        // if (_.isEmpty(this.levelUpMoves[version.level_learned_at])) {
        //   this.levelUpMoves[version.level_learned_at] = [move.move.url] 
        // } else {
        //   this.levelUpMoves[version.level_learned_at].push(move.move.url)
        // }
      },
    );

    console.log(`I caught a ${this.name}!`);
    return Promise.all(calls).then(() => this)
  }

  useAttack(attackId) {
    const attack = this.attacks[attackId]
    if (attack) {
      console.log(`${this.name} used ${attack.name}`,`
        "${this.name}!!!!"
        
        ${attack.type === this.type ? "It's super effective!" : ''}
      `);
    } else {
      console.log(`
        "${this.name}?"
        
        ${this.name} hurt itself in a fit of confusion
      `);
    }
  }
  
  async learn(attackId) {
    return await PokeApi.getAttack(attackId).then(attack => {
      if (attack.type.name === 'normal' || attack.type.name === this.type) {
        this.attacks[attackId] = new Attack(attack);
        console.log(`${this.name} learned ${attack.name}.`)
      } else {
        console.log(`Looks like ${this.name} can't learn ${attack.name}`);
      }
      return;
    });
  }
}

module.exports = Pokemon;