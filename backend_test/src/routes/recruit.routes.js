
const { Router } = require('express');
const {  addRecruit, getRecruitsByOwner, getRecruitById, getLocations } = require('../controllers/recruit.controller');
const router = Router();

router.post('/add-recruit', addRecruit);
router.get('/recruits-by-owner/:id_owner', getRecruitsByOwner);
router.get('/recruit-by-id/:id_recruit', getRecruitById);
router.get('/locations', getLocations);

module.exports = router;