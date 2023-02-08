import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* translate(action) {
  console.log('From translate saga:', action.payload)
    try{
        const word = action.payload
        const transWord = yield axios({
            method: 'POST',
            url: '/api/translate',
            params: word
        })
        console.log('translate saga response:', transWord.data);
        yield put({ type: 'SET_TRANSLATE', payload: transWord.data });
    } catch {
    }
}

export default function* translateSaga() {
  yield takeLatest('TRANSLATE', translate);
}