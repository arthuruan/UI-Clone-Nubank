import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import Routes from './routes';
import Theme from './theme';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
