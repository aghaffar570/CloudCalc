const Trainer = require('./trainer');
const Pokemon = require('./pokemon');

//list model associations
Pokemon.belongsTo(Trainer, { as : 'master' }); // foreignKey on Pokemon table (trainerId => masterId)
Trainer.hasMany(Pokemon, { foreignKey : 'masterId'});

module.exports = {
  Trainer,
  Pokemon
}
