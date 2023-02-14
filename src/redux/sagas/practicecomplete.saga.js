//we want to take the values from the correct answer and push them into an array once there are 10 words in the array we need to display the 10 words and their definitions then set up the test.

import { put, takeLatest } from 'redux-saga/effects';

function* practiceComplete(action) {
    try {


        yield put({
            type: 'SET_PRACTICE_COMPLETE',
            payload:{
                correctWord: action.payload.correctWord,
                transWord: action.payload.transWord
            }
        });

        
    } catch (error) {
        console.log('practiceComplete request failed', error);
    }
}

export default function* practiceCompleteSaga() {
    yield takeLatest('PRACTICE_COMPLETE_WORD', practiceComplete);
}