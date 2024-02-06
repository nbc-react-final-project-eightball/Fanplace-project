import Router from './shared/Router';
import GlobalStyle from './GlobaStyle';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useGetAddresses } from 'hooks/useGetAddresses';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';

const queryClient = new QueryClient();
function App() {
  const { userAuth } = useAuth();
  const { getAddresses } = useGetAddresses();
  const user = useSelector((state: RootState) => state.signUpSlice.userInfo);

  useEffect(() => {
    if (user) {
      getAddresses();
    }
  }, [user]);

  useEffect(() => {
    userAuth();
  }, []);

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
