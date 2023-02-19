import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useHistory } from 'react-router-dom';
import LangSelect from './LangSelect';
import { ColorModeContext, tokens } from "../App/theme"
import { useContext } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Stack } from '@mui/system';

function UserPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const lang = useSelector((store) => store.langPickedReducer)
  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_LANGUAGES',
      payload: {
        userId: user.id
      }
    });
  }, []);

  const langPicked = lang[lang.length - 1]
  console.log(langPicked)
  //When clicked fetch words gets the 4 words from the data base for the
  // flashcards on the train page so you can begin the game
  const handleStart = (event) => {
    event.preventDefault();
    if(langPicked){
    dispatch({
      type: 'FETCH_WORDS',
      payload: {
        lang: langPicked.desig
      }
    });
    }
    history.push('/train')
  }
  const [isSet, setIsSet] = useState(false);

  //gets user information

  const langs = useSelector((store) => store.userLanguagesReducer);
  console.log(lang)



  return (

    <Box
      style={{ backgroundColor: colors.primary[400], height: '100%', alignContent: 'center', alignItems: 'center', textAlign: 'center' }}
    >
      <Stack direction="row" spacing={2}>
        <Box
          flex='row'
          width='70%'
        >
          <Typography
            variant="h1"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "30px 0 0 0", alignItems: 'center' }}
          >
            Welcome, {user.username}!
          </Typography>

          <Typography
            variant="h4"
            color={colors.grey[100]}
            fontWeight="semiBold"
            sx={{ m: "30px 0 0 0", alignItems: 'center', marginBottom: '20px' }}
          >
            First lets pick a Languge
          </Typography>

          <Box style={{ backgroundColor: colors.primary[400], alignItems: 'center', textAlign: 'center', justifyContent: 'center', paddingRight: '30%', paddingLeft: '30%' }}
          >
            {langs?.map((language) => {
              return (
                <LangSelect
                  languages={language.name}
                  languageDesig={language.desig}
                  languageId={language.id}
                  key={language.id}
                />
              )
            })}
          </Box>


          <Box
            paddingTop='60px'
          >
            <LogOutButton />
          </Box>
        </Box>


        <Box flex='row'>
          {langPicked && (
          <Typography
            variant="h4"
            color={colors.grey[100]}
            fontWeight="Bold"
            sx={{ m: "30px 0 0 0", alignItems: 'center', }}
          >
            {langPicked.name}
          </Typography>
          )}

          <Box paddingTop='30px'>
            <Button color="success" onClick={handleStart} variant="contained">LETS GO</Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
