import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FunctionComponent = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
