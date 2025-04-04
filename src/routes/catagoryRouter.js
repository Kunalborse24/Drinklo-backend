const express = require('express');
const router = express.Router();
const catagoryController = require('../controllers/catagoryController');  


router.get('/', catagoryController.getAllCatagory); 

module.exports = router;