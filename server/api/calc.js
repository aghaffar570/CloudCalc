const router = require('express').Router();
const Calculation = require('../db/models/calculation');
const { add, subtract, multiply, divide } = require('./math.util')

router.get('/', (req, res, next) => {
  Calculation.findAll()
    .then(operations => {
      res.json(operations)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  console.log(req.body);
  Calculation.create(req.body)
    .then(createdOperation => {
      console.log('NEW DATA CREATED', createdOperation)
      res.json(createdOperation)
    })
    .catch(next)
})

router.put('/', (req, res) => {

})

router.delete('/', (req, res, next) => {
  Calculation.destroy({where: {}})
  .then(deletedOperation => {
    console.log('NEW DATA CREATED', deletedOperation)
    res.json(deletedOperation)
  })
  .catch(next)
})

module.exports = router;
