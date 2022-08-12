import React, { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener } from '../api/firebase/authetication';
import { createUserDocumentFromAuth } from '../api/firebase/firestore';

// Actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  'SET_CURRENT_USER': 'SET_CURRENT_USER'
};

export const userReducer = (state, action) => {
  console.log(`Dispatched ${action.type}!`);
  const { type, payload } = action;

  switch(type) {
  case USER_ACTION_TYPES.SET_CURRENT_USER:
    return { ...state, currentUser: payload };
  default:
    throw new Error(`Unknown action type: ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

// Provider is a component that will wrap around any components that need the UserContext
// It allows any children components to access the values inside of its state
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};