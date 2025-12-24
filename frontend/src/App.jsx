import React from 'react';
import { Button } from './components/ui/button';
import Header from './components/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Dashboard from './page/Dashboard';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
