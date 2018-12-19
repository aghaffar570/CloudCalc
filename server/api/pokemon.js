const router = require('express').Router();
const { Pokemon } = require('../db/models');


router.get('/', (req, res, next) => {
  Pokemon.findAll()
    .then((pokemons) => {
      res.json(pokemons);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Pokemon.findByPk(req.params.id)
    .then((pokemon) => {
      res.json(pokemon);
    })
    .catch(next);
  })

  // conflicting routes ∆˚¬¬˚∆¬˚˙˚∆˙¬˚∆˚˚˚˚∆∆∆∆∆∆˙∆∆

router.get('/:type', (req, res, next) => {
  Pokemon.findByType(req.params.type)
    .then((pokemon) => {
      res.json(pokemon);
    })
    .catch(next);
})

router.post('/', (req, res) => {

});

router.put('/:pokemonId', (req, res) => {

});

router.delete('/:pokemonId', (req, res) => {

});

module.exports = router;
