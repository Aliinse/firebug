import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageObjects, setPageObjects] = useState([]);

  return (
    <AppContext.Provider value={{ pageObjects, setPageObjects }}>
      {children}
    </AppContext.Provider>
  );
};