const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
console.log(`i work here are the values i recieve ${req.query.userId} , ${req.query.langId } ${req.query.wordId}`)
  const user_id= req.query.userId
  const language_id = req.query.langId
  const word_id = req.query.wordId

  const sqlQuery =`
  INSERT INTO "words_finished"
  ("word_id", "user_id", "language_id")
  VALUES
($1,$2,$3);
  `
  const sqlValues = [word_id, user_id, language_id]
  pool.query(sqlQuery,sqlValues)
  .then((dbres)=>{
    console.log(dbres)
    res.send(dbres.data);
  })
  .catch((error)=>{
    console.log(error)
  })
});

module.exports = router;