import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';


function* fetchComplete(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      params: action.payload
    };


    const response = yield axios.get('/api/complete' ,config);

    yield put({ type: 'SET_COMPLETE', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* completeSaga() {
  yield takeLatest('FETCH_COMPLETE', fetchComplete);
}

export default completeSaga;
