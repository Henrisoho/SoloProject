import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';
import Continue from './continue';

import TransWord from './transcomp';

export default function Train({isGlobalCorrect, setIsGlobalCorrect}) {

  const store = useReduxStore();
  const words = useSelector(store => store.translateReducer)
  console.log(words)

const translatedWord = words.transWord
const arrayOfWords = words.wordsArr
const correctWord = words.answer

  // console.log('this is the correct word translated', translatedWord)
  // console.log('this is the array of words',arrayOfWords)
  // console.log('this is the correct word', correctWord)



    return (
      <>
        <div>
          <div>
            <TransWord transWord = {translatedWord} />
          </div>
          {arrayOfWords?.map((word) => {
            return (
              <WordGen 
              key={word.id} 
              word={word} 
              answer={correctWord}
              transWord = {translatedWord}
              />
            )
          })} 
        </div>
        <Continue answer={correctWord} transWord = {translatedWord}/>
      </>
    );
  } 

