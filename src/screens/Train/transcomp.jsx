import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';

export default function TransWord({ word, answer }) {

function filter(x) {
    let transWord = {}
  if (x != undefined){
  transWord = x
  }
  return transWord;
}

let filteredWord = filter(answer)

    return(
        <div>
            <h1>{filteredWord.word}</h1>
        </div>
    )
}