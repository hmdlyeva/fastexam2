const router = require('express').Router()
const controller = require('../controller/controller')
router.get('/users', controller.getAllData)
router.delete('/users/:id', controller.delData)
router.post('/users', controller.postData)

module.exports = router