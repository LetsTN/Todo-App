import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePeristedState from './utils/usePersistedState'

import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
