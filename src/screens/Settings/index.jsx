import React, { useEffect } from 'react'
import axios from 'axios';
import LangPicker from './components';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext, tokens } from '../../components/App/theme';
import { useContext } from "react"
import { Box, Typography, useTheme } from '@mui/material';


export default function Settings() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const languages = useSelector(store => store.languagesReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_LANGUAGES' });
  }, []);
  


  if (languages) {
    console.log(languages)
    return (
      <div className="container" style={{ backgroundColor: colors.primary[400], height: '100%' }}>

        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
          backgroundColor={colors.primary[400]}
        >
          Pick a langauge
        </Typography>

        <div>
          {languages?.map((language) => {
            return (
              <LangPicker
                key={language.id}
                languages={language.name}
                languageId={language.id}
                languageDesig={language.desig}
              />
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div style={{ backgroundColor: colors.primary[400], height: '100%' }}>
        <h1>Loading</h1>
      </div>
    )
  }
}