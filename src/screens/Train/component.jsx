import React from 'react'
import { useState } from "react";
import Continue from './continue';

export default function WordGen({ word, answer, setIsGlobalCorrect}) {
    const [isCorrect, setIsCorrect]= useState(null)

    const handleCorrect = (event) => {
        if (word.id === answer.id) {
            setIsCorrect(1);
        } else if (word.id != answer.id) {
            setIsCorrect(0)
        } else {
            setIsCorrect(null)
        }
    }

    const handleContinue = (event) =>{
        event.preventDefualt()

    }

    if (isCorrect == false) {
        return (
            <div key={word.id} 
            
            style={{
                margin: 10,
                height: '80px',
                alignItems: 'center',
                width: '180px',
                backgroundColor: 'white',
                padding: 10,
                alignContent: 'center',
                color: '#fff'
            }}>
                <h1 key={word.id}>{word.word}</h1>
            </div>
        )
    } else if (isCorrect == true) {
        return (
            <div>
                <div key={word.id} onClick={handleCorrect} onChange={handleContinue} style={{
                    margin: 10,
                    alignItems: 'center',
                    height: '80px',
                    width: '180px',
                    backgroundColor: 'green',
                    padding: 10,
                    alignContent: 'center',
                    color: '#fff'
                }}>
                    <h1 style={{ color: 'white' }} key={word.id}>{word.word}</h1>
                </div>
        </div>
        )
    } else if (isCorrect == null) {
        return (
            <div>
                <div key={word.id} onClick={handleCorrect} style={{
                    margin: 10,
                    alignItems: 'center',
                    height: '80px',
                    width: '180px',
                    backgroundColor: 'grey',
                    padding: 10,
                    alignContent: 'center',
                    color: 'black'
                }}>
                    <h1 style={{ color: 'black' }} key={word.id}>{word.word}</h1>
                </div>
            </div>
        )
    }else{
        return(
            <>
            <h1>Loading</h1>
            
            </>
        )
    }

    

}


