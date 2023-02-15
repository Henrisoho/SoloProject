
import { put, takeLatest } from 'redux-saga/effects';

function* test(action) {
    try {
        const res = action.payload
        console.log(res)

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