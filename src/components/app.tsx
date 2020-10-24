import {createTheme} from '../utils/create-material-theme';
import {ThemeProvider, Theme} from '@material-ui/core';
import React, {useState, useEffect} from 'react';

export const App: React.FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    setTheme(createTheme());
  }, []);

  return <>{theme && <ThemeProvider theme={theme}>{children}</ThemeProvider>}</>;
};
