import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Box 
    textAlign='center'
    alignItems='center'
    >
      <h2>{heading}</h2>

      <Box >
        <Box >

        </Box>
        <Box>
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <Button variant="contained" color='success' onClick={onLogin}>
              Login
            </Button>
          </center>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
