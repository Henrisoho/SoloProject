import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchUserLanguages(action) {
  //query subtract used languages
  //select query to reject duplicates
  //add pop up
  // console.log(action.payload.userId)
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      params: {
        userId: action.payload.userId
      }
    };


    const response = yield axios.get('/api/userlang', config);

    yield put({ type: 'SET_USER_LANGUAGES', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* userLanguagesSaga() {
  yield takeLatest('FETCH_USER_LANGUAGES', fetchUserLanguages);
}

export default userLanguagesSaga;