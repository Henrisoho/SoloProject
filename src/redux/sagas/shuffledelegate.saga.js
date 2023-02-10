import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* shuffleDelegateWords(action) {
    try {
        const words = action.payload
        function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
            const answer = words.Words[0]
            const transWord = words.transWord
            const wordsArr = shuffleArray(words.Words)
            console.log(answer)


        yield put({
            type: 'SET_TRANSLATE',
            payload: {
                answer: answer,
                transWord: transWord,
                wordsArr: wordsArr
            }
        });
        
    } catch (error) {
        console.log('response from shuffle saga', action.payload)
        console.log('WORDS get request failed', error);
    }
}

export default function* shuffleDelegateSaga() {
    yield takeLatest('SET_SHUFFLE_AND_DELEGATE', shuffleDelegateWords);
}