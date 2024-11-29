const express = require('express')
const router = express.Router()

//to get controller
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
 
} = require('../controllers/appcontroll')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router
