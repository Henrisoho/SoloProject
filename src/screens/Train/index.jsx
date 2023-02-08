import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';
import TransWord from './transcomp';

export default function Train() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const words = useSelector(store => store.wordsReducer)

  useEffect(() => {
    dispatch({ 
        type: 'TRANSLATE',
        payload: { 
            word: correctWord.word
        }
     });
    dispatch({ type: 'FETCH_WORDS' });
    dispatch({ type: 'FETCH_UNUSEDWORDS' });
      
  }, [dispatch]);

function filter(x) {
    let transWord = {}
  if (x != undefined){
  transWord = x
  }
  return transWord;
}

let correctWord = filter(words.correctWord)

function shuffleArray(array) {
  if (array != undefined){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  }
  return array;
}

const wordsArr = shuffleArray(words.testArray)


  return (
      <div>
        <div>
          <TransWord answer={correctWord}/>
        </div>
         {wordsArr?.map((word) =>{
          return(
            <WordGen key={word.id} word={word} answer={correctWord}/>
          )
        })}
        
      </div>
  );
}