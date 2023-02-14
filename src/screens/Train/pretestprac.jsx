import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';

export default function PreTest() {
    const dispatch = useDispatch();
    const history = useHistory();
    const store = useReduxStore();
    const words = useSelector(store => store.completeReducer)
    const completeWordsArr = useSelector((store) => store.practiceCompleteReducer)
    const lang = useSelector((store) => store.langPickedReducer)

    const goNext = (e) => {
        e.preventDefault();
        history.push('/test')
    }

    console.log(lang)
    return (
        <div>
            <div>
                <h1>Memorize these then we'll test</h1>
            </div>
            {completeWordsArr?.map((word) => {
                return (
                    <h3 key={word.correctWord.id}>{word.correctWord.word} = {word.transWord}</h3>
                )
            })}
            <div>
                <h1>When you are ready lets begin the test</h1>
            </div>
            <Button onClick={goNext} variant="contained">Let's Begin</Button>
        </div>
    );
}
