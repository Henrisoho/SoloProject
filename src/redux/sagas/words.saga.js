import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchWords() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/unusedwords', config);
    

    yield put({ type: 'SET_WORDS', payload: response.data });
  } catch (error) {
    console.log('WORDS get request failed', error);
  }
}

export default function* wordsSaga() {
  yield takeLatest('FETCH_WORDS', fetchWords);
}