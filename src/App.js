import './App.scss';
import React, { useEffect } from 'react';
import Home from './routes/home';
import Login from './routes/login';
import Shop from './routes/shop';
import Checkout from './routes/checkout';
import NavigationBar from './components/navigation-bar';
import MainContent from './components/main-content';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChangedListener } from './api/firebase/authetication';
import { createUserDocumentFromAuth } from './api/firebase/firestore';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

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
