const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router()
const axios = require('axios');

router.post('/', (req, res) =>{
const string = (req.query.word)
console.log(string)
const encodedParams = new URLSearchParams();
encodedParams.append("q", string);
encodedParams.append("target", "fr");
encodedParams.append("source", "en");

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '4908717772msh571e50099e595b7p18545fjsn0641b559ef67',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
   res.send(response.data.data.translations[0].translatedText)
}).catch(function (error) {
	console.error(error);
});
})

module.exports = router