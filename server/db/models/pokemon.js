const Sequelize = require('sequelize');
const db = require('../index');

const Pokemon = db.define('pokemon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  attack: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }
})

// class methods
Pokemon.findByType = function(pokemonType) {
  return this.findAll({
    where: {
      type: { $eq: pokemonType }
    }
  })
}

Pokemon.findByLevel = function(level) {
  return this.findAll({
    where: {
      level : {
        $lte : level
      }
    }
  })
}

// instance methods
Pokemon.prototype.setPokemonFree = function() {
  return this.destroy().then((freePokemon) => {
    console.log(`${freePokemon.name} was set free.`);
    return freePokemon;
  })
}




module.exports = Pokemon;
