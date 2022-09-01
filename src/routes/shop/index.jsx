import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview';
import Category from '../category';
import { getCollectionWithDocuments } from '../../api/firebase/firestore';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCollectionWithDocuments('categories');
      dispatch(setCategories(categories));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
