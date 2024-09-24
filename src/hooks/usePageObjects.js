// src/hooks/usePageObjects.js

import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const usePageObjects = () => {
  const { pageObjects, setPageObjects } = useContext(AppContext);

  useEffect(() => {
    const fetchPageObjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pageObjects');
        setPageObjects(response.data);
      } catch (error) {
        console.error('Ошибка при получении pageObjects:', error);
      }
    };

    fetchPageObjects();
  }, [setPageObjects]);

  const addPageObject = async (newObject) => {
    try {
      const response = await axios.post('http://localhost:5000/api/pageObjects', newObject);
      setPageObjects([...pageObjects, response.data]);
    } catch (error) {
      console.error('Ошибка при добавлении pageObject:', error);
    }
  };

  return { pageObjects, addPageObject };
};

export default usePageObjects;
