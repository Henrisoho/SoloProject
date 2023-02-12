import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchLanguages() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };


    const response = yield axios.get('/api/languages', config);

    yield put({ type: 'SET_LANGUAGES', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* languagesSaga() {
  yield takeLatest('FETCH_LANGUAGES', fetchLanguages);
}

export default languagesSaga;
