const express = require ('express');
const router = express.Router();
const mainController= require ('../src/controllers/mainController');


router.get ('/', mainController.home);

module.exports = router;