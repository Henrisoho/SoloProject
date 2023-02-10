import { put, takeLatest } from 'redux-saga/effects';

function* correctIncorrectLogic(action) {
    try {
        const response = action.payload
        console.log('this is the response', response)

        yield put({
            type: 'SET_CORRECT_INCORRECT',
            payload: response
        });
        
    } catch (error) {
        console.log('response from correctIncorrect saga', action.payload)
        console.log('correctIncorrect request failed', error);
    }
}

export default function* correctIncorrectSaga() {
    yield takeLatest('CORRECT_INCORRECT_LOGIC', correctIncorrectLogic);
}