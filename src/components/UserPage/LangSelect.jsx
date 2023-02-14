import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function LangSelect({languages,languageId,languageDesig}) {
  const dispatch = useDispatch();

  const handleLangPicked = (event) => {
    console.log(languageDesig)
    event.preventDefault();
    dispatch({
      type: 'SET_LANGUAGE_PICKED',
      payload:{
        desig: languageDesig
      }
      })
  }

  return (
    <Button 
    variant="contained" 
    style={{margin: 5}}
    key={languageId}
    onClick={handleLangPicked}
    >
        {languages}
    </Button>

  )
}