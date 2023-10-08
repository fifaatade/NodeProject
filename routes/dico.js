var express = require('express');
var router = express.Router();
var TraductionController = require('../Controller/TraductionController');

router.get('/dico', function(req, res, next) {
  TraductionController.index(req, res); 
});

router.post('/dico/posts', function(req, res, next) {
  TraductionController.store(req, res); 
});

module.exports = router;
