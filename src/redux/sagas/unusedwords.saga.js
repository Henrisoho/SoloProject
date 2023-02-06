import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUnusedWords() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/unusedwords', config);
    

    yield put({ type: 'SET_UNUSEDWORDS', payload: response.data });
  } catch (error) {
    console.log('WORDS get request failed', error);
  }
}

export default function* unusedWordsSaga() {
  yield takeLatest('FETCH_UNUSEDWORDS', fetchUnusedWords);
}