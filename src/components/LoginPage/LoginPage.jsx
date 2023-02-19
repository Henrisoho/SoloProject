import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import logo from '/Users/hank/Documents/SoloDolo/Hermes/src/assets/Comp1.gif'


function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <center>
      <img src={logo} alt="ordo" style={{height: '300px'}}/>
      <LoginForm />

      
        <Button className="btn btn_asLink" variant="contained" color='success' onClick={() => {
          history.push('/registration');
        }}>
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
