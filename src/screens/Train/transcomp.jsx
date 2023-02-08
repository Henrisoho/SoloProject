import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';

export default function TransWord({ word, answer }) {
const dispatch = useDispatch();

function filter(x) {
    let transWord = {}
  if (x != undefined){
  transWord = x
  }
  return transWord;
}
let filteredWord = filter(answer)


console.log(filteredWord.word)
 useEffect(() => {
    dispatch({ 
        type: 'TRANSLATE',
        payload: filteredWord.word
     });
  }, [dispatch]);



    return(
        <div>
            <h1>{filteredWord.word}</h1>
        </div>
    )
}

