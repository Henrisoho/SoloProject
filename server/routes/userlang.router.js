const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('this is the user languages router back end')
    pool
    .query(`
    SELECT *
FROM "user_language"
JOIN "language" ON "user_language"."language_id" = "language"."id"
WHERE "user_language"."user_id" = 1;` )
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