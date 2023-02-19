import { Button, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import practiceCompleteReducer from '../../redux/reducers/practicecomplete.reducer';
import Train from './index';
import { ColorModeContext, tokens } from '../../components/App/theme';

export default function Continue({ answer, transWord }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                    <Button variant="contained" color="success"  onClick={onNext}>Next</Button>
                </div>
            )
        } else if (trueFalse.trueFalse === true && completeWordsArr.length == 9) {
            console.log('F')
            return (
                <div>
                    <Button onClick={onTest} color="success" variant="contained">Lets Test</Button>
                </div>
            )
        } else if (trueFalse.trueFalse === false) {
            console.log('F')
            return (
                <div>
                    <Typography
                    variant="h3"
                color={colors.redAccent[600]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
                    >try again
                    </Typography>
                </div>
            )
        }
    } else {
        return (
            <div></div>
        )
    }

}
