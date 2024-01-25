import Router from './shared/Router';
import GlobalStyle from './GlobaStyle';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';

function App() {
  useAuth();
  // useEffect(() => {
  // }, []);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
