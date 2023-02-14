import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchWords(action) {
  console.log(action.payload.lang)
  const lang = action.payload.lang
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/unusedwords', config);


    yield put({
      type: 'TRANSLATE',
      payload:{ 
        words: response.data,
        lang: lang
      }
    });
  } catch (error) {
    console.log('WORDS get request failed', error);
  }
}

export default function* wordsSaga() {
  yield takeLatest('FETCH_WORDS', fetchWords);
}