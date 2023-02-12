import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function UserPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();

     useEffect(() => {
 dispatch({
      type: 'FETCH_USER_LANGUAGES',
      payload:{
        userId: user.id
      }
 });
       }, []);
//When clicked fetch words gets the 4 words from the data base for the
// flashcards on the train page so you can begin the game
  const handleStart = (event) => {
    event.preventDefault();
    dispatch({ type: 'FETCH_WORDS' });
    history.push('/train')
  }

  //gets user information

    const langs = useSelector((store) => store.userLanguagesReducer);

  
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
      <br />
      <br />
      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
