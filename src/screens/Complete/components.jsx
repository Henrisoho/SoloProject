import { Box, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ColorModeContext, tokens } from '../../components/App/theme';

export default function Flashcard({word}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [flip, setFlip] = useState(false)
    const dispatch = useDispatch()
    const transWord = useSelector((store) => store.translateCompleteReducer)
    const newTransWord = null
    const onFlip = (event) => {
        event.preventDefault()
        dispatch({
            type: 'TRANSLATE_COMPLETE',
            payload: {
                lang: 'fr',
                word: word.word
            }
        });
        setFlip(!flip)
        newTransWord = transWord
    }
    console.log(transWord)
if(flip == false){
    return (
        <center>
        <Box
            m='5px'
            backgroundColor = {colors.greenAccent[400]}
            height='200px'
            borderRadius='5px'
            width='200px'
            onClick={onFlip}
            textAlign= 'center'
        >
            <Box paddingTop='65px'>
                <Typography
            marginTop='10px'
            variant="h2"
            color={colors.primary[400]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >{word.word}</Typography>
            </Box>
        </Box>
        </center>
    )
}else{
    return (
        <center>
        <Box
        m='5px'
           backgroundColor = {colors.greenAccent[400]}
            height='200px'
            borderRadius='5px'
            width='200px'
            onClick={onFlip}
            textAlign= 'center'
        >

            { transWord && (
            <Box paddingTop='65px'>
                <Typography
            marginTop='10px'
            variant="h2"
            color={colors.primary[400]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >{transWord}</Typography>
            </Box>
)}
        </Box>
        </center>
    )
}
}