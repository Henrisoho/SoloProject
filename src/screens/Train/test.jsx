import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';

export default function Test() {
    const dispatch = useDispatch();
    const history = useHistory();
    const store = useReduxStore();
    const completeWordsArr = useSelector((store) => store.practiceCompleteReducer)
    const lang = useSelector((store) => store.langPickedReducer)
    const [guess, setNewGuess] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const correctAnswer = completeWordsArr[0].correctWord.word
        if(guess === correctAnswer){
            completeWordsArr.shift()
        console.log(guess)
        console.log(correctAnswer)
        history.replace('/test')
        }
    }

    console.log(lang)
    return (
        <div>
            <h1>Type the correct translation</h1>
            <h2>{completeWordsArr[0].transWord}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    typye="Text"
                    placeholder="answer"
                    value={guess}
                    onChange={(event) => setNewGuess(event.target.value)}
                    required />
                    <button>Submit</button>
            </form>
        </div>
    );
}