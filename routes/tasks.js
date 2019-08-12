const router = require('express').Router();

const tasksController = require('../controllers/tasksController');

// Begin routes

router.get('/', tasksController.index);
router.get('/:id', tasksController.show);
router.get('/:id/edit', tasksController.edit);
router.post('/', tasksController.create);
router.post('/update', tasksController.update);
router.post('/destroy', tasksController.destroy);

// We have to export our changes
module.exports = router;