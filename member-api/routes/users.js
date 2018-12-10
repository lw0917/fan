var express = require('express');
var router = express.Router();
var query=require('../mysql');

/* GET users listing. */
router.get('/api/namelist', function(req, res, next) {
          res.end('1')
});

module.exports = router;
