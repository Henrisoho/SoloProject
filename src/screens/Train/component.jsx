import React from 'react'
import { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

export default function WordGen({ word, answer }) {
    const [isCorrect, setIsCorrect] = useState(true);

    const handleCorrect = () => {
        if (word.id === answer.id) {
            setIsCorrect(false);
        } else {
            setIsCorrect(true)
        }
    }


    return (
        <>
            {isCorrect ? (
                <div key={word.id} onClick={handleCorrect} style={{
                    margin: 10,
                    height: '80px', 
                    alignItems: 'center',
                    width: '180px',
                    backgroundColor: 'hotpink',
                    padding: 10,
                    alignContent: 'center',
                    color: '#fff'}}>
                    <h1 key={word.id}>{word.word}</h1>
                </div>
            ) : (
                <div key={word.id} onClick={handleCorrect} style={{
                    margin: 10,
                    alignItems: 'center',
                    height: '80px', 
                    width: '180px',
                    backgroundColor: 'green',
                    padding: 10,
                    alignContent: 'center',
                    color: '#fff'}}>
            <h1 style={{ color: 'white' }} key={word.id}>{word.word}</h1>
        </div>
    )
}     
            </> 
    )
}



