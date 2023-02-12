const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
console.log(`i work here are the values i recieve ${req.query.userId} , ${req.query.langId }`)
  const user_id= req.query.userId
  const language_id = req.query.langId 

  const sqlQuery =`
  INSERT INTO "user_language"
  ("user_id", "language_id")
  VALUES
($1,$2);
  `
  const sqlValues = [user_id, language_id]
  pool.query(sqlQuery,sqlValues)
  .then((dbres)=>{
    console.log(dbres)
    res.send(dbres.data);
  })
  .catch((error)=>{
    res.send(error);
  })
});

module.exports = router;