import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Train from './index';

export default function Continue() {
const history = useHistory();
const dispatch = useDispatch()
const trueFalse = useSelector(store => store.correctIncorrectReducerr)


const onNext = () => {
    history.push('/train')
    dispatch({ type: 'FETCH_WORDS' });
}

// if (correct) {
    console.log('F')
    return (
        <div>
            <button onClick={onNext}>Next</button>
        </div>
    )
// }

}
