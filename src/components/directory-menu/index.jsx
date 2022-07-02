/* eslint-disable react/prop-types */
import React from 'react';
import Category from '../category';
import './directory-menu.styles.scss';

const DirectoryMenu = ({menuItems}) => {
  return (
    <div className="directory-menu">
      { menuItems.map(item => <Category key={item.id} category={item} />)}
    </div>
  );
};

export default DirectoryMenu;