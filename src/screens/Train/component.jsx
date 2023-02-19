import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import wordsReducer from '../../redux/reducers/words.reducer';
import Continue from './continue';
import './component.css';
import { Box, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../components/App/theme';

export default function WordGen({ word, answer }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch()
    const trueFalse = useSelector(store => store.correctIncorrectReducer)


    const handleCorrect = (event) => {
        dispatch({
            type: 'CORRECT_INCORRECT_LOGIC',
            payload: {
                wordId: word.id,
                answerId: answer.id
            }
        })
    }



    if (trueFalse) {
        switch (trueFalse.trueFalse, trueFalse.wordId) {
            case true, answer.id:
                return (
                    <Box 
                    key={trueFalse.wordId} 
                    // className='correct' 
                    onClick={(e) => { handleCorrect() }}
                    backgroundColor={colors.greenAccent[600]}
                    margin='20px'
                    padding='20px'
                    >
                        <Typography
                            key={word.id}
                            variant="h2"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{ m: "10px 0 0 0" }}
                            backgroundColor='transparent'
                        >
                            {word.word}
                        </Typography>
                    </Box>
                );
            case false, word.id:
                return (
                    <Box 
                    key={word.id} 
                    // className='incorrect'
                    backgroundColor={colors.redAccent[600]}
                    margin='20px'
                    padding='20px'
                    >
                        <Typography
                            key={word.id}
                            variant="h2"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{ m: "10px 0 0 0" }}
                            backgroundColor='transparent'
                        >
                            {word.word}
                        </Typography>
                    </Box>
                );
            default:
                return (
                    <Box 
                    key={word.id} 
                    // className='null' 
                    onClick={(e) => { handleCorrect() }}
                    backgroundColor={colors.grey[600]}
                    margin='20px'
                    padding='20px'
                    >
                        <Typography
                            key={word.id}
                            variant="h2"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{ m: "10px 0 0 0" }}
                            backgroundColor='transparent'

                        >
                            {word.word}
                        </Typography>
                    </Box>
                );
        }
    } else {
        return (
            <Box 
            key={word.id} 
            // className='null' 
            onClick={(e) => { handleCorrect() }}
            backgroundColor={colors.grey[600]}
                    margin='20px'
                    padding='20px'
            >
                <Typography
                    key={word.id}
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                    backgroundColor='transparent'
                >
                    {word.word}
                </Typography>
            </Box>
        );
    }


}


