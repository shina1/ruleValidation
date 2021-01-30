const { Router } = require('express');
const express = require('express');

const Controller = require('../controller/userCotroller');

const router = express.Router();


//get request route

router.get('/', Controller.getMyDetails);

module.exports = router;

