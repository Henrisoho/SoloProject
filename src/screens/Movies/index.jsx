import React from 'react'
import { ColorModeContext, tokens } from '../../components/App/theme';
import { useContext } from "react"
import { useTheme } from '@mui/material';


export default function Movies() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="container" style={{backgroundColor: colors.primary[400], height: '100%'}}>
      Movies
      </div>
  )
}
