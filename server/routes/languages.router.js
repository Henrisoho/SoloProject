const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('this is the languages router back end')
    pool
    .query(`
    SELECT * FROM "language";` )
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for shelf:', error);
      res.sendStatus(500);
    }); 
});


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;