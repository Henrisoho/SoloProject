import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Routes
} from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Nav from '../Nav/SideBar';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';
import Movies from '../../screens/Movies';
import Settings from '../../screens/Settings';
import Complete from '../../screens/Complete';
import Train from '../../screens/Train/index';
import PreTest from '../../screens/Train/pretestprac';
import Test from '../../screens/Train/test';
import SideBar from '../Nav/SideBar';


function App() {
  const dispatch = useDispatch();
  const [theme, colorMode] = useMode()
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ProSidebarProvider>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <>
    <Router>
    <div className='app'>
    <SideBar/>
    <main className="content">
      
        <div>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <ProtectedRoute exact path="/user"><UserPage /></ProtectedRoute>
            <ProtectedRoute exact path="/movie"><Movies /></ProtectedRoute>
            <ProtectedRoute exact path="/complete"><Complete /></ProtectedRoute>
            <ProtectedRoute exact path="/settings"><Settings /></ProtectedRoute>
            <ProtectedRoute exact path="/train" ><Train /></ProtectedRoute>
            <ProtectedRoute exact path="/pretest"><PreTest /></ProtectedRoute>
            <ProtectedRoute exact path="/test"><Test /></ProtectedRoute>


            <Route exact path="/login">{user.id ? <Redirect to="/user" /> : <LoginPage />}</Route>
            <Route exact path="/registration">{user.id ? <Redirect to="/user" /> : <RegisterPage />}</Route>
            <Route exact path="/home">{user.id ? <Redirect to="/user" /> : <LandingPage />}</Route>
            <Route><h1>404</h1></Route>

          </Switch>
        </div>
      
    </main>
    
    </div>
    </Router>
    </>
    
    </ThemeProvider>
    </ColorModeContext.Provider>
    </ProSidebarProvider>
  );
}

export default App




