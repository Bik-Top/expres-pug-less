var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) =>{
  console.log(req);
  res.send('people id: ' + this);
});



module.exports = router;
