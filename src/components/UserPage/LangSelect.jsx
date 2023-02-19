import { Button, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ColorModeContext, tokens } from "../App/theme"

export default function LangSelect({ languages, languageId, languageDesig }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleLangPicked = (event) => {
    console.log(languageDesig)
    event.preventDefault();

    dispatch({
      type: 'SET_LANGUAGE_PICKED',
      payload: {
        desig: languageDesig,
        name: languages,
        id: languageId
      }
    })
  }

  return (

    <Button
      variant="contained"
      color="success"
      style={{ margin: 5 }}
      key={languageId}
      onClick={handleLangPicked}
    >
      {languages}
    </Button>

  )
}