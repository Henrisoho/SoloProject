import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchComplete() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };


    const response = yield axios.get('/api/complete', config);

    yield put({ type: 'SET_COMPLETE', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* completeSaga() {
  yield takeLatest('FETCH_COMPLETE', fetchComplete);
}

export default completeSaga;
