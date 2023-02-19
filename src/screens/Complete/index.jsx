import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { ColorModeContext, tokens } from '../../components/App/theme';
import { useContext } from "react"
import { Typography, useTheme } from '@mui/material';
import Flashcard from './components';

export default function Complete() {
const theme = useTheme();
 const lang = useSelector((store) => store.langPickedReducer)
const colors = tokens(theme.palette.mode);
const dispatch = useDispatch();
const langPicked = lang[lang.length - 1]
console.log(langPicked.id)
    useEffect(() => {
      if(langPicked){
    dispatch({ 
      type: 'FETCH_COMPLETE',
      payload: langPicked.id
      });
      }  
  }, []);


  const store = useReduxStore();
  const words = useSelector(store => store.completeReducer)

  if(words != undefined){
console.log(words)
  }

if(words != undefined){

  return (
      <div className="container"  style={{backgroundColor: colors.primary[400], height: '100%'}}>
        <div>

        </div>
         {words?.map((word) =>{
          return(
            // <Typography
            //   key={word}
            //   variant="h2"
            //   color={colors.grey[100]}
            //   fontWeight="bold"
            //   sx={{ m: "10px 0 0 0" }}
            //   backgroundColor='transparent'
            // >{word.word}</Typography>
            <Flashcard word={word}/>
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
