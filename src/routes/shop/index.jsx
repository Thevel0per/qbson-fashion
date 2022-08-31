import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview';
import Category from '../category';
import { getCollectionWithDocuments } from '../../api/firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCollectionWithDocuments();
      dispatch(setCategoriesMap(categoriesMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
