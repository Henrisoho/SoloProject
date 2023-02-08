import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* translate(action) {
console.log(action.payload)
const encodedParams = new URLSearchParams();
encodedParams.append("q", action.payload);
encodedParams.append("target", "es");
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
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

export default function* translateSaga() {
  yield takeLatest('TRANSLATE', translate);
}