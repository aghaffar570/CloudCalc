const router = require('express').Router();

// mini routers
router.use('/user', require('./user'))

// requested route was Not Found
router.use((req, res, next) => {
  const error = new Error('Not Found!');
  error.status = 404;
  next(error);
})

module.exports = router;
