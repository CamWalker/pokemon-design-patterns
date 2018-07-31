const PokeApi = require('./pokeApi.service.js');

class Attack {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type.name;
  }
}

class Pokemon {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.type = data.types[0].type.name;
    this.attacks = {};
  }

  useAttack(attackId) {
    if (this.attacks[attackId]) {
      console.log(`
        "${this.name}!!!!"
        
        ${this.attacks[attackId].type === this.type ? "It's super effective!" : ''}
      `);
    } else {
      console.log(`
        "${this.name}?"
        
        ${this.name} hurt itself in a fit of confusion
      `);
    }
  }
  
  learn(attackId) {
    return PokeApi.getAttack(attackId).then(attack => {
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

// const Attack = function(data) {
//   this.id = data.id;
//   this.name = data.name;
//   this.type = data.type.name;
// }

// const Pokemon = function(data) {
//   this.name = data.name;
//   this.id = data.id;
//   this.type = data.types[0].type.name;
//   this.attacks = {};
// }

// Pokemon.prototype.useAttack = function(attackId) {
//   if (this.attacks[attackId]) {
//     console.log(`
//       "${this.name}!!!!"
      
//       ${this.attacks[attackId].type === this.type ? "It's super effective!" : ''}
//     `);
//   } else {
//     console.log(`
//       "${this.name}?"
      
//       ${this.name} hurt itself in a fit of confusion
//     `);
//   }
// }

// Pokemon.prototype.learn = async function(attackId) {
//   return axios.get(`http://pokeapi.co/api/v2/move/${attackId}/`).then(attack => {
//     if (attack.type.name === 'normal' || attack.type.name === this.type) {
//       this.attacks[attackId] = new Attack(attack);
//       console.log(`${this.name} learned ${attack.name}.`)
//     } else {
//       console.log(`Looks like ${this.name} can't learn ${attack.name}`);
//     }
//     return;
//   });
// }

module.exports = {
  Pokemon,
}