/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

// Actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider is a component that will wrap around any components that need the UserContext
// It allows any children components to access the values inside of its state
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};