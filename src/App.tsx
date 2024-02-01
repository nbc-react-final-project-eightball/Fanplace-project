import Router from './shared/Router';
import GlobalStyle from './GlobaStyle';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  useAuth();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
