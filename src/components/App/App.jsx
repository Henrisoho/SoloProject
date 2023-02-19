import React, { useEffect, useState } from 'react';
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
import TopBar from '../Nav/TopBar';
import { Box } from '@mui/system';

function App() {
  const dispatch = useDispatch();
  const [theme, colorMode] = useMode()
  const [isSidebar, setissidebar] = useState(true);
  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <ProSidebarProvider>
    
    <Router>
    <Box className='app'>
    <main className="content">
      { user.id && (<TopBar setIsSidebar={setissidebar}/>)}
      <Box sx={{display: 'flex', height: 1, width:1}}>
       { user.id && (<SideBar sx={{}} isSidebar={isSidebar}/>)}
          <Switch>
            <Box sx={{width:1}}>
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
            {/* <Route><h1>404</h1></Route> */}
            </Box>
            </Switch>
        </Box>
</main>
</Box>
    </Router>
    </ProSidebarProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App




