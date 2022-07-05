import React from 'react';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MainContent = () => {
  return (
    <main className='app-body'>
      <Outlet />
    </main>
  );
};

export default MainContent;