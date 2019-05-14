const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allCandy = await Candy.findAll();
    res.json(allCandy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
