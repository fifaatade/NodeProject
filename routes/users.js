var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    jonh:'jonh',
    age:23,
  });
});

module.exports = router;
