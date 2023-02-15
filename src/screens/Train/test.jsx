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
    const trueFalse = useSelector((store) => store.testReducer)
    const [guess, setNewGuess] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const correctAnswer = completeWordsArr[0].correctWord.word
        if(guess === correctAnswer){
            dispatch({
                type: 'TEST',
                payload: completeWordsArr[0].correctWord
            });
        }
    }

      const goNext = (e) => {np
        e.preventDefault();
         dispatch({
                type: 'UN_SET_TEST_RESULT'
            });
        history.replace('/test')
        completeWordsArr.shift()
       
    }

    const goAgain = (e) => {
        e.preventDefault();
        history.replace('/user')
       
    }
console.log(trueFalse.trueFalse)
    
    if(trueFalse.trueFalse == true){
    return (
        <div>
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
        <h1>THAT IS CORRECT!!!</h1>
        <div>
            <Button variant="contained" onClick={goNext}>Next</Button>
        </div>
        </div>
    );
    }else if(completeWordsArr === undefined){
        return(
            <div>
            <h1>CONGRATULATIONS YOUVE FINISHED</h1>
            <Button variant="contained" onClick={goAgain}>Click here to start again</Button>
            </div>
        )
    }else{
        return (
        <div>
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
        <div>
        </div>
        </div>
        )
    }
}