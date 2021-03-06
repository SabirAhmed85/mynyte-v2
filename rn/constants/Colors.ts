const tintColorLight = '#fd465e';
const tintColorDark = '#fd465e'; //  #fd465e or #f35469

export const ThemeColors: any = {
  text: {
    light: '#6a6a6a',
    dark: '#b5b5b5',
  },
  secondaryText: {
    light: '#1b1b1b',
    dark: '#f4f4f4',
  },
  tertiaryText: {
    light: '#3b3b3b',
    dark: '#afafaf'
  },
  disabledText: {
    light: '#7b7b7b',
    dark: '#828282'
  },
  lightText: {
    light: '#f5f5f5',
    dark: '#f4f4f4',
  },
  background: {
    light: '#fefefe',
    dark: '#353535',
  },
  tint: {
    light: tintColorLight,
    dark: tintColorDark,
  },
  tabIconDefault: {
    light: '#3b3b3b',
    dark: '#8e8e8f',
  },
  tabIconSelected: {
    light: tintColorLight,
    dark: tintColorDark,
  },
  lightBorder: {
    light: '#dadada',
    dark: '#bbb',
  },
  headerBackground: {
    light: '#ff4059',
    dark: tintColorDark, // or #fd465e? 
  },
  headerBorderColor: {
    light: '#ea7b8a',
    dark: '#ea7b8a',
  },
  headerTint: {
    light: '#555555',
    dark: '#eeeeee',
  },
  headerNotificationBg: {
    light: '#fbf3eb',
    dark: '#3c3b3b'
  },
  tabBarBackground: {
    light: '#ffffff',
    dark: '#2f2f2f',
  },
  tabBarBorderColor: {
    light: '#eeeeee',
    dark: '#454444',
  },
  listItemBackground: {
    light: '#f9f9f9',
    dark: '#494949',
  },
  listItemActiveBackground: {
    light: '#f2f2f2',
    dark: '#4d4d4d',
  },
  listItemBorderColor: {
    light: '#f6f6f6',
    dark: '#4c4a4a'
  },
  primaryColor: {
    light: '#151515',
    dark: '#d5d5d5'
  },
  primaryColorInverse: {
    light: '#fdfdfd',
    dark: '#666666'
  },
  primaryActiveColor: {
    light: tintColorLight,
    dark: tintColorDark
  },
  primaryActiveBackground: {
    light: tintColorLight,
    dark: tintColorDark
  },
  primaryActiveBorderColor: {
    light: '#e44f63',
    dark: '#e44f63'
  },
  primaryActiveBorderColorFeint: {
    light: '#f74159',
    dark: '#f74159'
  },
  shadedColor: {
    light: '#969696',
    dark: '#818181'
  },
  primaryActiveColorHighlight: {
    light: '#ff9292',
    dark: '#f5abab'
  },
  primaryActiveBackgroundHighlight: {
    light: '#fd546a',
    dark: '#fd546a'
  },
  primaryActiveBorderColorHighlight: {
    light: '#f55268',
    dark: '#f55268'
  },
  primaryActiveBackgroundShaded: {
    light: '#de4d60',
    dark: '#de4d60'
  },
  primaryActiveColorShaded: {
    light: '#9e1628',
    dark: '#9e1628'
  },
  shadowColor: {
    light: '#dddddd',
    dark: '#303030'
  },
  cardBackground: {
    light: '#ffffff',
    dark: '#414141'
  },
  cardBackgroundInverse: {
    light: '#e5e5e5',
    dark: '#eeeeee'
  },
  cardBorderColor: {
    light: '#f4f4f4',
    dark: '#4c4a4a'
  },
  colors: {
    light: {
      white: '#fff'
    },
    dark: {
      white: '#fff'
    }
  },
  searchPanelHeaderBg: {
    light: '#ffffff',
    dark: '#3c3b3b'
  },
  feedBackgroundColor: {
    light: '#ffffff',
    dark: '#353535',
  },
  feedHeaderBorderColor: {
    light: '#f4f4f4',
    dark: '#3d3d3d'
  },
  feedHeaderButtonColor: {
    light: '#1b1b1b',
    dark: '#828282'
  },
  feedSectionBorderColor: {
    light: '#f6f6f6',
    dark: '#3c3c3c'
  },
};

export const getTheme = (mode: string) => {
  let theme = {} as any;
  for (let key in ThemeColors) {
     theme[key] = ThemeColors[key][mode];
  }

  return theme;
};

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
