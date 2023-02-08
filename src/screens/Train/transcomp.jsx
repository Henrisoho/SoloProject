import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';

export default function TransWord({ word, answer }) {
const dispatch = useDispatch();
const displayWord = useSelector(store => store.translateReducer)
console.log('response from the set word reducer', displayWord)

function filter(x) {
    let transWord = null
  if (x != undefined){
  transWord = x
  }
  return transWord;
}

let filteredWord = filter(answer)


console.log(filteredWord.word)
 useEffect(() => {
  
  }, []);



    return(
        <div>
            <h1>{displayWord}</h1>
        </div>
    )
}

