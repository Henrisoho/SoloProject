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
  pool
    .query(`
    SELECT * FROM "word";` )
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for shelf:', error);
      res.sendStatus(500);
    }); 
});

module.exports = router