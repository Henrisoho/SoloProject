import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* translate(action) {
  const word = action.payload[0]
  const words = action.payload
  if(word != undefined){
    console.log(word.word)
    try{
        const transWord = yield axios({
            method: 'POST',
            url: '/api/translate',
            params: {
              word: word.word
            }
        })

        console.log('translate saga response:', transWord.data);
        yield put({ 
          type: 'SET_TRANSLATE', 
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