import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { ColorModeContext, tokens } from '../../components/App/theme';
import { useContext } from "react"
import { useTheme } from '@mui/material';

export default function Complete() {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const dispatch = useDispatch();

    useEffect(() => {
    dispatch({ type: 'FETCH_COMPLETE' });  
  }, []);


  const store = useReduxStore();
  const words = useSelector(store => store.completeReducer)

  if(words != undefined){
console.log(words)
  }

if(words != undefined){

  return (
      <div className="container" style={{backgroundColor: colors.primary[400], height: '100%'}}>
        <div>

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
      <div style={{backgroundColor: colors.primary[400], height: '100%'}}>
        <h1>Loading</h1>
        </div>
    )
}
}
