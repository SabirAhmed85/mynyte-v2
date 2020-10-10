const tintColorLight = '#2f95dc';
const tintColorDark = '#fd465e'; //  #fd465e or #f35469

export const ThemeColors: any = {
  text: {
    light: '#9a9a9a',
    dark: '#b5b5b5',
  },
  secondaryText: {
    light: '#ebebeb',
    dark: '#f4f4f4',
  },
  tertiaryText: {
    light: '#6f6f6f',
    dark: '#afafaf'
  },
  disabledText: {
    light: '#9f9f9f',
    dark: '#828282'
  },
  background: {
    light: '#fcfcfc',
    dark: '#323232',
  },
  tint: {
    light: tintColorLight,
    dark: tintColorDark,
  },
  tabIconDefault: {
    light: '#aeaeae',
    dark: '#ccc',
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
    light: '#6bbbff',
    dark: tintColorDark, // or #fd465e? 
  },
  headerBorderColor: {
    light: '#ffffff',
    dark: '#ea7b8a',
  },
  headerTint: {
    light: '#555555',
    dark: '#eeeeee',
  },
  headerNotificationBg: {
    light: '#ebf3fb',
    dark: '#3c3b3b'
  },
  listItemBorderColor: {
    light: '#f2f2f2',
    dark: '#3c3a3a'
  },
  primaryColor: {
    light: '#565656',
    dark: '#d5d5d5'
  },
  primaryColorInverse: {
    light: '#838383',
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
    light: '#6db1ea',
    dark: '#e44f63'
  },
  primaryActiveBorderColorFeint: {
    light: '#6db1ea',
    dark: '#f74159'
  },
  shadedColor: {
    light: '#969696',
    dark: '#818181'
  },
  primaryActiveColorHighlight: {
    light: tintColorLight,
    dark: '#f5abab'
  },
  primaryActiveBackgroundHighlight: {
    light: tintColorLight,
    dark: '#fd546a'
  },
  primaryActiveBorderColorHighlight: {
    light: tintColorLight,
    dark: '#f55268'
  },
  primaryActiveBackgroundShaded: {
    light: '#de4d60',
    dark: '#de4d60'
  },
  primaryActiveColorShaded: {
    light: '#de4d60',
    dark: '#9e1628'
  },
  cardBackground: {
    light: '#ffffff',
    dark: '#464646'
  },
  cardBackgroundInverse: {
    light: '#e5e5e5',
    dark: '#eeeeee'
  },
  cardBorderColor: {
    light: '#e5e5e5',
    dark: '#525050'
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
    light: '#f5f5f5',
    dark: '#3c3b3b'
  },
  searchPanelInnerBorderColor: {
    light: '#fafafa',
    dark: '#424242'
  }
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
