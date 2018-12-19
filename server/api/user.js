const router = require('express').Router();


router.get('/', (req, res, next) => { /* etc */});

router.post('/', (req, res, next) => { /* etc */});

router.put('/:userId', (req, res, next) => { /* etc */});

router.delete('/:userId', (req, res, next) => { /* etc */});

module.exports = router;
