
const { Router } = require('express');
const { getDirectors } = require('../controllers/director.controller');
const router = Router();

router.get('/directors', getDirectors);

module.exports = router;