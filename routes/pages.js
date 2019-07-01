const router = require('express').Router();

//Our Controllers
const PagesController = require('../controllers/pagesController');


//create our routes
router.get('/', PagesController.show);
router.get('/about',PagesController.show);
router.get('/contact', PagesController.show);

module.exports = router;