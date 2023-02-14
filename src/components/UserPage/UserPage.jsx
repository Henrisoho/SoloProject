import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import LangSelect from './LangSelect';

function UserPage() {
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
  //When clicked fetch words gets the 4 words from the data base for the
  // flashcards on the train page so you can begin the game
  const handleStart = (event) => {
    event.preventDefault();
    dispatch({ 
      type: 'FETCH_WORDS',
      payload: {
        lang: lang[0].desig
      }
    });
    history.push('/train')
  }


  //gets user information

  const langs = useSelector((store) => store.userLanguagesReducer);
  console.log(lang)

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h3>Are you ready to train?</h3>
        <Button onClick={handleStart} variant="contained">LETS GO</Button>
      </div>
      <br />
      <h3>Pick a Languge</h3>
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
      <br />
      <br />
      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
