import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import RandomThree from './component';

export default function ShelfPage() {
  const dispatch = useDispatch();
  const store = useReduxStore();
  const words = useSelector(store => store.wordReducer)
console.log(words)
  useEffect(() => {
    dispatch({ type: 'FETCH_WORDS' });
  }, [dispatch]);

  return (
    <div className="container">
      <div>
        {words.map((word) =>{
          return(
            <ul key={word.id} style ={{listStyleType: 'none'}}><RandomThree word={word}/></ul>
          )
        })}
      </div>
    </div>
  );
}