import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

export default function Train() {
const dispatch = useDispatch();

    useEffect(() => {
    dispatch({ type: 'FETCH_COMPLETE' });  
  }, [dispatch]);


  const store = useReduxStore();
  const words = useSelector(store => store.completeReducer)
  
  if(words != undefined){
console.log(words)
  }

if(words != undefined){

  return (
      <div>
        <div>
          <TransWord/>
        </div>
         {words?.map((word) =>{
          return(
            <h1>{word}</h1>
          )
        })}
        
      </div>
  );
}else{
    return(
        <h1>Loading</h1>
    )
}
}
