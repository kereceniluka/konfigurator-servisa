import React from 'react';

// pages
import Home from './pages/Home';

// utils
import { ContextProvider } from './utils/context/Context';

const App = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;