const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router()


router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('iwork')
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