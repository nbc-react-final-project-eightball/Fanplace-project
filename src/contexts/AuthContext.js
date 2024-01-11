import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../firebase/config';
import { createContext, useEffect, useReducer } from 'react';
import { authReducer } from 'reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      console.log('payload: ', user);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
