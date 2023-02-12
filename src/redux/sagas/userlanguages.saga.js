import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchUserLanguages(action) {
  console.log(action.payload.userId)
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      params: {
        userId: action.payload.userId
      }
    };


    const response = yield axios.get('/api/userlanguages', config);

    yield put({ type: 'SET_USER_LANGUAGES', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* userLanguagesSaga() {
  yield takeLatest('FETCH_USER_LANGUAGES', fetchUserLanguages);
}

export default userLanguagesSaga;