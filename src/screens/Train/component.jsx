import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import wordsReducer from '../../redux/reducers/words.reducer';
import Continue from './continue';

export default function WordGen({ word, answer}) {
    const [isCorrect, setIsCorrect]= useState(null)
    const dispatch = useDispatch()
   const trueFalse = useSelector(store => store.correctIncorrectReducerr)


    const handleCorrect = (event) => {
     dispatch({
        type: 'CORRECT_INCORRECT_LOGIC',
        payload: {
          wordId: word.id,
          answerId: answer.id
        }
      })
    }


if(word.id && answer.id){
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
                <div key={word.id}  style={{
                    margin: 10,
                    alignItems: 'center',
                    height: '80px',
                    width: '180px',
                    backgroundColor: 'green',
                    padding: 10,
                    alignContent: 'center',
                    color: '#fff'
                }}>
                    <h1 onClick={() => {handleCorrect()}} style={{ color: 'white' }} key={word.id}>{word.word}</h1>
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
}else{
    return(
        <div>fffff</div>
    )
}
    

}


