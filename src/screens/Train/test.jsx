import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';
import { Box, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../components/App/theme';

export default function Test() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
        if (guess === correctAnswer) {
            dispatch({
                type: 'TEST',
                payload: completeWordsArr[0].correctWord
            });
        }
    }

    const goNext = (e) => {
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

    if (trueFalse.trueFalse == true) {
        return (
            <Box
                className="container"
                textAlign='center'
                alignItems='center'
                alignContent='center'
                style={{ backgroundColor: colors.primary[400], height: '100%', }}
            >
                <Box>
                    <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        backgroundColor={colors.primary[400]}
                    >
                        Type the correct translation
                    </Typography>

                    <Typography
                        variant="h2"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        backgroundColor={colors.primary[400]}
                    >
                        {completeWordsArr[0].transWord}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <input
                            typye="Text"
                            placeholder="answer"
                            value={guess}
                            onChange={(event) => setNewGuess(event.target.value)}
                            required />
                        <button>Submit</button>
                    </form>
                </Box>
                <Typography>THAT IS CORRECT!!!</Typography>
                <Box>
                    <Button variant="contained" onClick={goNext}>Next</Button>
                </Box>
            </Box>
        );
    } else if (completeWordsArr === undefined) {
        return (
            <Box
                className="container"
                textAlign='center'
                alignItems='center'
                alignContent='center'
                style={{ backgroundColor: colors.primary[400], height: '100%', }}
            >
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                    backgroundColor={colors.primary[400]}
                >
                    CONGRATULATIONS YOUVE FINISHED
                </Typography>
                <Button variant="contained" onClick={goAgain}>Click here to start again</Button>
            </Box>
        )
    } else {
        return (
            <Box
                className="container"
                textAlign='center'
                alignItems='center'
                alignContent='center'
                style={{ backgroundColor: colors.primary[400], height: '100%', }}
            >
                <Box>
                    <Typography
                        variant="h3"
                        color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                        backgroundColor={colors.primary[400]}
                    >
                        Type the correct translation
                    </Typography>
                    <Typography
                    variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
            backgroundColor={colors.primary[400]}
                    >
                        {completeWordsArr[0].transWord}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <input
                            typye="Text"
                            placeholder="answer"
                            value={guess}
                            onChange={(event) => setNewGuess(event.target.value)}
                            required />
                        <button>Submit</button>
                    </form>
                </Box>
                <Box>
                </Box>
            </Box>
        )
    }
}