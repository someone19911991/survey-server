const router = require('express').Router();
const SheetController = require('../controllers/SheetController');

router.post('/survey', SheetController.addSurvey);

module.exports = router;