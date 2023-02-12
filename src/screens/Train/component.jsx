import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import wordsReducer from '../../redux/reducers/words.reducer';
import Continue from './continue';
import './component.css';

export default function WordGen({ word, answer }) {
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

    // if (trueFalse) {
    //     if (trueFalse.trueFalse === true && trueFalse.wordId === answer.id) {
    //         return (
    //             <div key={trueFalse.wordId} className='correct' onClick={(e) => { handleCorrect() }}>
    //                 <h1 key={word.id}>{word.word}</h1>
    //             </div>
    //         );
    //     } else if (trueFalse.trueFalse === false && trueFalse.wordId !== answer.id) {
    //         return (
    //             <div key={word.id} className='incorrect'>
    //                 <h1 key={word.id}>{word.word}</h1>
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div key={word.id} className='null' onClick={(e) => { handleCorrect() }}>
    //                 <h1 key={word.id}>{word.word}</h1>
    //             </div>
    //         );
    //     }
    // }else{
    //          return (
    //              <div key={word.id} className='null' onClick={(e)=> {handleCorrect()}}>
    //                  <h1 key={word.id}>{word.word}</h1>
    //              </div>
    //          );
    //      }




        if(trueFalse){
            switch (trueFalse.trueFalse, trueFalse.wordId) {
        case true, answer.id:
          return (
                <div key={trueFalse.wordId} className='correct' onClick={(e)=> {handleCorrect()}}>
                    <h1 key={word.id}>{word.word}</h1>
                </div>
            );
        case false, word.id:
          return (
                <div key={word.id} className='incorrect'>
                    <h1 key={word.id}>{word.word}</h1>
                </div>
            );
        default:
          return (
                <div key={word.id} className='null' onClick={(e)=> {handleCorrect()}}>
                    <h1 key={word.id}>{word.word}</h1>
                </div>
            );
      }
        }else{
            return (
                <div key={word.id} className='null' onClick={(e)=> {handleCorrect()}}>
                    <h1 key={word.id}>{word.word}</h1>
                </div>
            );
        }


}


