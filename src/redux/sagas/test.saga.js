
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* test(action) {
    console.log(action.payload)
    const userId = action.payload.userId
    const langId = action.payload.langId
    const wordId = action.payload.wordId
    try {
        const res = action.payload
        console.log(res)
        const chosenLang = yield axios({
            method: 'POST',
            url: '/api/test',
            params: {
              userId: userId,
              langId: langId,
              wordId: wordId
            }
        })
        yield put({
            type: 'SET_TEST_RESULT',
            payload: {
                trueFalse: true
                }
        });
        
    } catch (error) {
        console.log('correctIncorrect request failed', error);
    }
}

export default function* testSaga() {
    yield takeLatest('TEST', test);
}