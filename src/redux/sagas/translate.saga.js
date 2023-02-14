import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest } from 'redux-saga/effects';

function* translate(action) {
  const lang = action.payload.lang
  const word = action.payload.words[0]
  const words = action.payload.words


console.log(word)
console.log(lang)
console.log(words)

  if(word != undefined){
    console.log(word.word)
    try{
        const transWord = yield axios({
            method: 'POST',
            url: '/api/translate',
            params: {
              word: word.word,
              lang: lang
            }
        })

        console.log('translate saga response:', transWord.data);
        yield put({ 
          type: 'SET_SHUFFLE_AND_DELEGATE', 
          payload:{
            transWord: transWord.data,
            Words: words
            }});
    } catch {
    }
  }
}

export default function* translateSaga() {
  yield takeLatest('TRANSLATE', translate);
}