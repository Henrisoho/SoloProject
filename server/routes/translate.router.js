const express = require('express');
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const router = express.Router()
const axios = require('axios');

router.post('/', rejectUnauthenticated, (req, res) =>{
const lang = (req.query.lang)
console.log(lang)
const string = (req.query.word)
console.log(string)
const encodedParams = new URLSearchParams();
encodedParams.append("q", string);
encodedParams.append("target", lang);
encodedParams.append("source", "es");

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': process.env.API_KEY,
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
