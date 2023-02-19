import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import WordGen from './component';
import Continue from './continue';
import { ColorModeContext, tokens } from '../../components/App/theme';
import { useContext } from "react"
import { Box, Typography, useTheme } from '@mui/material';
import TransWord from './transcomp';

export default function Train({isGlobalCorrect, setIsGlobalCorrect}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        <Box 
        className="container" 
        textAlign= 'center'
        alignItems='center'
        alignContent='center'
        style={{ backgroundColor: colors.primary[400], height: '100%',}}>
        <div>
          <div>
            <TransWord transWord = {translatedWord} />
          </div>
          <Box>
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
          </Box>
        </div>
        <Continue answer={correctWord} transWord = {translatedWord}/>
      </Box>
    );
  } 

