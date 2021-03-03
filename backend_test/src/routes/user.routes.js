

const { Router } = require('express');
const { getUsers, login } = require('../controllers/user.controller');
const router = Router();

router.post('/login', login);
router.get('/users', getUsers);

module.exports = router;