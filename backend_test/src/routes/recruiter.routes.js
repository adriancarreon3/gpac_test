
const { Router } = require('express');
const { getRecruitersByCoach } = require('../controllers/recruiter.controller');
const router = Router();

router.get('/recruiters-by-coach/:id_coach', getRecruitersByCoach);

module.exports = router;