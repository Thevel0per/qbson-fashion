import './App.scss';
import React from 'react';
import DirectoryMenu from './components/directory-menu';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      containerClass: 'narrow',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      containerClass: 'narrow',
      
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      containerClass: 'narrow',
    },
    {
      id: 4,
      title: 'Women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      containerClass: 'wide',
    },
    {
      id: 5,
      title: 'Men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      containerClass: 'wide',
    }
  ];

  return (
    <main className='app-body'>
      <DirectoryMenu menuItems={categories} />
    </main>
  );
};

export default App;
