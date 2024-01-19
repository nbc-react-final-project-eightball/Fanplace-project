import Router from './shared/Router';
import GlobalStyle from './GlobaStyle';
import useAuth from 'hooks/useAuth';

function App() {
  useAuth();

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
