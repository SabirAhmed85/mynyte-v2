import React from 'react';
import { Appearance } from 'react-native-appearance';
import { getTheme } from '../constants/Colors';

type ThemeManagerState = {
  mode: string;
};

// set default colour scheme from OS
const osTheme = Appearance.getColorScheme();
const setMode = (theme: string, action: string) => {
  if (action === 'set') {
    return theme === 'light' ? 'light' : 'dark';
  }
  else {
    return theme === 'light' ? 'dark' : 'light';
  }
}

// initiate context
export const ManageThemeContext: React.Context<any> = React.createContext({
  mode: osTheme,
  theme: getTheme(osTheme),
  toggle: () => { }
});

// define useTheme hook for functional components
export const useTheme = () => React.useContext(ManageThemeContext);

// initiate context provider
export const ThemeManager = (props: { children: any }) => {
  const [state, setState] = React.useState({ mode: setMode(osTheme, 'set') } as ThemeManagerState);

  const toggleTheme = async () => {
    setState({ ...state, mode: setMode(state.mode, 'update') });
  }

  return (
      <ManageThemeContext.Provider value={{
        mode: state.mode,
        theme: getTheme(state.mode),
        toggle: toggleTheme
      }}>
        {props.children}
      </ManageThemeContext.Provider>
    )
}

export default ThemeManager;