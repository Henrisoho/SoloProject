const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router()

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('i go this')
  pool
    .query(`
  WITH cte AS (
  SELECT DISTINCT ON (x.id) x.*
  FROM word x
  LEFT JOIN words_finished y ON x.id = y.word_id
  WHERE y.word_id IS NULL
  ORDER BY x.id
)
SELECT * FROM cte
ORDER BY RANDOM()
LIMIT 4;
` 
)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for shelf:', error);
      res.sendStatus(500);
    }); 
});

module.exports = router