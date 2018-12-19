const router = require('express').Router();
const { Trainer } = require('../db/models');

router.get('/', (req, res) => {
  res.send('get all trainers')
});

router.post('/', (req, res) => {

});

router.put('/:trainerId', (req, res) => {

});

router.delete('/:trainerId', (req, res) => {

});

module.exports = router;
