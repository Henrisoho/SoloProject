import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Train from './index';

export default function Continue() {
const history = useHistory();
const dispatch = useDispatch()
const trueFalse = useSelector(store => store.correctIncorrectReducer)
const lang = useSelector((store) => store.langPickedReducer)

const onNext = (event) => {
    console.log(lang[0].desig)
    event.preventDefault()
    history.replace('/train')
    dispatch({ 
        type: 'FETCH_WORDS',
        payload: { 
            lang: lang[0].desig
            }
     });
}

if(trueFalse){
if (trueFalse.trueFalse === true) {
    console.log('F')
    return (
        <div>
            <Button variant="contained" onClick={onNext}>Next</Button>
        </div>
    )
}else if (trueFalse.trueFalse === false) {
    console.log('F')
    return (
        <div>
            <h1>try again</h1>
        </div>
    )
}
}else{
    return(
        <div></div>
    )
}

}
