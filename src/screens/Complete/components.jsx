import { Box } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Flashcard({word}) {
    const [flip, setFlip] = useState(false)
    const dispatch = useDispatch()
    const transWord = useSelector((store) => store.translateCompleteReducer)
    const onFlip = (event) => {
        console.log(transWord)
        event.preventDefault()
        dispatch({
            type: 'TRANSLATE_COMPLETE',
            payload: {
                lang: 'fr',
                word: word.word
            }
        });
        setFlip(!flip)
        console.log(transWord.data.translations[0].translatedText)
    }


if(flip == true){
    return (
        <Box
            m='5px'
            backgroundColor = 'white'
            height='100px'
            width='100px'
            onClick={onFlip}
            textAlign= 'center'
        >
            <Box paddingTop='35px'>
                {word.word}
            </Box>
        </Box>
    )
}else{
    return (
        <Box
        m='5px'
            backgroundColor = 'white'
            height='100px'
            width='100px'
            onClick={onFlip}
            textAlign= 'center'
        >


            <Box paddingTop='35px'>
                {transWord.data.translations[0].translatedText}
            </Box>
        </Box>
    )
}
}