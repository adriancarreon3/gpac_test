
const { Router } = require('express');
const { getCoachesByDirector } = require('../controllers/coach.controller');
const router = Router();

router.get('/coaches-by-director/:id_director', getCoachesByDirector);

module.exports = router;