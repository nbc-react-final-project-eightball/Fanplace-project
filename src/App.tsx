import Router from './shared/Router';
import GlobalStyle from './GlobaStyle';
import AuthContextProvider from 'contexts/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyle />
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
