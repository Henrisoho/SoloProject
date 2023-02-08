import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';

export default function TransWord({ word, answer }) {
const dispatch = useDispatch();
const displayWord = useSelector(store => store.translateReducer)
  const words = useSelector(store => store.wordsReducer)
console.log('response from the set word reducer', displayWord)

function filter(x) {
    let transWord = null
  if (x != undefined){
  transWord = x
  }
  return transWord;
}


let filteredWord = filter(words.correctWord.word)


console.log(filteredWord)
 useEffect(() => {
  dispatch({
        type: 'TRANSLATE',
        payload: {
          word: 'pot',
        }
      })
  }, []);



    return(
        <div>
            <h1>{displayWord}</h1>
        </div>
    )
}

