const router = require('express').Router();
const Calculation = require('../db/models/calculation');
const { add, subtract, multiply, divide } = require('./math.util')

// get logged operations
router.get('/', (req, res, next) => {
  Calculation.findAll()
    .then(operations => {
      res.json(operations)
    })
    .catch(next)
})

// post a new operation to the list
router.post('/', (req, res, next) => {
  Calculation.create(req.body)
    .then(createdOperation => {
      res.json(createdOperation)
    })
    .catch(next)
})

// update and assign a single operation log with a variable
router.put('/:operation_id', (req, res, next) => {
  console.log(req.body, 'updated body')
  // Calculation.findByPk(req.params.operation_id)
  //   then(operation => {
  //     return operation.update()
  //   })
  //   .then(updatedOperation => {
  //     res.json(updatedOperation)
  //   })
  //   .catch(next)
})

// delete all operation records
router.delete('/', (req, res, next) => {
  Calculation.destroy({where: {}})
  .then(deletedOperation => {
    res.json(deletedOperation)
  })
  .catch(next)
})

module.exports = router;
