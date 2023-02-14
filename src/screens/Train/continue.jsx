import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import practiceCompleteReducer from '../../redux/reducers/practicecomplete.reducer';
import Train from './index';

export default function Continue({ answer, transWord }) {
    const history = useHistory();
    const dispatch = useDispatch()
    const trueFalse = useSelector(store => store.correctIncorrectReducer)
    const lang = useSelector((store) => store.langPickedReducer)
    const completeWordsArr = useSelector((store) => store.practiceCompleteReducer)
    console.log(completeWordsArr)

    const onNext = (event) => {
        event.preventDefault()
        history.replace('/train')
        dispatch({
            type: 'FETCH_WORDS',
            payload: {
                lang: lang[0].desig
            }
        });
        dispatch({
            type: 'PRACTICE_COMPLETE_WORD',
            payload: {
                correctWord: answer,
                transWord: transWord
            }
        });
    }

    const onTest = (event) => {
        event.preventDefault();
        dispatch({
            type: 'PRACTICE_COMPLETE_WORD',
            payload: {
                correctWord: answer,
                transWord: transWord
            }
        });
        history.push('/pretest')
    }



    if (trueFalse) {
        if (trueFalse.trueFalse === true && completeWordsArr.length < 9) {
            console.log('F')
            return (
                <div>
                    <Button variant="contained" onClick={onNext}>Next</Button>
                </div>
            )
        } else if (trueFalse.trueFalse === true && completeWordsArr.length == 9) {
            console.log('F')
            return (
                <div>
                    <Button onClick={onTest} variant="contained">Lets Test</Button>
                </div>
            )
        } else if (trueFalse.trueFalse === false) {
            console.log('F')
            return (
                <div>
                    <h1>try again</h1>
                </div>
            )
        }
    } else {
        return (
            <div></div>
        )
    }

}
