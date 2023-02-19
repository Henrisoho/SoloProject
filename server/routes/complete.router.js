const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('this is the complete router back end', req.params)
    pool
    .query(`
    SELECT A.word
FROM word A
INNER JOIN words_finished B ON A.id = B.word_id
WHERE B.language_id = 1;
;` )
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