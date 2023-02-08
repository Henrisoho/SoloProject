import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';

export default function TransWord({ word, answer }) {
const dispatch = useDispatch();
const displayWord = useSelector(store => store.translateReducer)
  const words = useSelector(store => store.wordsReducer)
console.log('response from the set word reducer', displayWord)

if(displayWord != undefined){
    return(
        <div>
            <h1>{displayWord.transWord}</h1>
        </div>
    )
} else{
    return(
        <h1>Loading</h1>
    )
}
}

