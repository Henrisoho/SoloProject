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
SELECT *
FROM "word" X
WHERE NOT EXISTS (
  SELECT 1
  FROM "words_finished" Y
  WHERE X.id = Y.word_id
);` 
)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for shelf:', error);
      res.sendStatus(500);
    }); 
});

module.exports = router