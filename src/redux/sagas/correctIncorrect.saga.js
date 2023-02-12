
import { put, takeLatest } from 'redux-saga/effects';

function* correctIncorrectLogic(action) {
    try {
        const res = action.payload
        const wordId = res.wordId

        const trueFalse =() =>{
        if (res.answerId === res.wordId){
            return true
        }else{
            return false
        }
        }
         

        yield put({
            type: 'SET_CORRECT_INCORRECT',
            payload: {
                trueFalse: trueFalse(),
                wordId: wordId
                }
        });
        
    } catch (error) {
        console.log('correctIncorrect request failed', error);
    }
}

export default function* correctIncorrectSaga() {
    yield takeLatest('CORRECT_INCORRECT_LOGIC', correctIncorrectLogic);
}