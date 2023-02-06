import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';

export default function Train() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const words = useSelector(store => store.wordsReducer)
  console.log(words)
  useEffect(() => {
    dispatch({ type: 'FETCH_WORDS' });
    dispatch({ type: 'FETCH_UNUSEDWORDS' });
  }, [dispatch]);

  return (
      <div>
         {words.map((word) =>{
          return(
            <WordGen key={word.id} word={word}/>
          )
        })}
        
      </div>
  );
}