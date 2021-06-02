const express = require('express')
const router = express.Router() 
const todoCltr = require('../app/controllers/todoCltr')

router.post('/addItem',  todoCltr.create)
router.get('/showItem', todoCltr.list)
router.delete('/deleteItem/:id',todoCltr.destroy)
router.put('/updateItem/:id',todoCltr.update)

module.exports = router