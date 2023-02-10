import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';

import TransWord from './transcomp';

export default function Train({isGlobalCorrect, setIsGlobalCorrect}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_WORDS' });
  }, [dispatch]);


  const store = useReduxStore();
  const words = useSelector(store => store.translateReducer)
  if (words != undefined) {
    console.log(words)
  }

  if (words != undefined) {
    const answer = words.Words[0]
    console.log(answer)

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const wordsArr = shuffleArray(words.Words)

    console.log(words.Words)
    return (
      <>
        <div>
          <div>
            <TransWord />
          </div>
          {wordsArr?.map((word) => {
            return (
              <WordGen 
              key={word.id} 
              word={word} 
              answer={answer}
              isGlobalCorrect={isGlobalCorrect} 
              setIsGlobalCorrect={setIsGlobalCorrect}
              />
            )
          })}
        </div>
      </>
    );
  } else {
    return (
      <h1>Loading</h1>
    )
  }
}


// function shuffleArray(array) {
//   if (array != undefined){
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   }
//   return array;
// }

// const wordsArr = shuffleArray(filteredWords)
