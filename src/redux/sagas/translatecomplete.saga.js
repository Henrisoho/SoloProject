import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest } from 'redux-saga/effects';

function* translateComplete(action) {
  const lang = action.payload.lang
  const word = action.payload.word
  console.log(word, lang)

  if(word != undefined){
    // console.log(word.word)
    try{
        const transWord = yield axios({
            method: 'POST',
            url: '/api/translatecomplete',
            params: {
              word: word,
              lang: lang
            }
        })

        yield put({ 
          type: 'TRANSLATED_COMPLETE_WORD', 
          payload: transWord.data});
    } catch {
    }
  }
}

export default function* translatecompleteSaga() {
  yield takeLatest('TRANSLATE_COMPLETE', translateComplete);
}