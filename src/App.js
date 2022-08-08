import './App.scss';
import React from 'react';
import Home from './routes/home';
import Login from './routes/login';
import Shop from './routes/shop';
import Checkout from './routes/checkout';
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
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
