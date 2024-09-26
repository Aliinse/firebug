import React, { createContext, useState } from 'react';

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [pageObjects, setPageObjects] = useState([]);

  return (
    <AppContext.Provider value={{ pageObjects, setPageObjects }}>
      {children}
    </AppContext.Provider>
  );
};