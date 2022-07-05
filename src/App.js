import './App.scss';
import React from 'react';
import Home from './routes/home';
import Login from './routes/login';
import NavigationBar from './components/navigation-bar';
import MainContent from './components/main-content';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <Routes>
        <Route path='/' element={<MainContent />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
