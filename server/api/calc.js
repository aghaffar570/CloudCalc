const router = require('express').Router();
const { Calculation } = require('../db/models');
const { add, subtract, multiply, divide } = require('./math.util')

router.get('/', (req, res, next) => {
  Calculation.findAll()
    .then(operations => {
      // console.log(operations, 'operations from BE');
      res.json(operations)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const data = {...req.body}
  data.value = `${data.value}`
  console.log(data, req.body);
  Calculation.create(data)
    .then(operation => {
      console.log('NEW DATA CREATED', operation)
      res.json(operation)
    })
    .catch(next)
})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router;
