import * as React from 'react';
import { Text as DefaultText, View as DefaultView, ScrollView as DefaultScrollView, SafeAreaView as DefaultSafeAreaView } from 'react-native';
import { Button as DefaultButton } from 'react-native-elements';

import { ThemeColors } from '../constants/Colors';
import { useTheme } from '../config/ThemeManager';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorProperty: keyof typeof ThemeColors
) {
  const { theme } = useTheme();
  const colorScheme = useColorScheme();
  const colorFromProps = props[colorScheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return theme[colorProperty];
  }
}

export function useAppFont(bold?: boolean) {
  return { fontFamily : !!bold ? 'titillium-semibold' : 'titillium' }
}

export function useThemeColorAndAppFont(
  props: { light?: string; dark?: string },
  colorProperty: keyof typeof ThemeColors,
  bold?: boolean) {
    return {
      color: { color: useThemeColor(props, colorProperty) },
      fontFamily: useAppFont(bold)
    }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ThemeTextProps = {
  bold?: boolean;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];

export function Text(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'text', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function PrimaryText(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'primaryColor', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function PrimaryActiveText(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'primaryActiveColor', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function PrimaryHighlightText(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'primaryActiveColorHighlight', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function SecondaryText(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'secondaryText', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function TertiaryText(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'tertiaryText', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function DisabledText(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'disabledText', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function LightText(props: TextProps & ThemeTextProps) {
  const { style, lightColor, darkColor, bold, ...otherProps } = props;
  const colorAndFont = useThemeColorAndAppFont({ light: lightColor, dark: darkColor }, 'lightText', bold);
  return <DefaultText style={[props.style, colorAndFont.color, colorAndFont.fontFamily]} {...otherProps} />;
}

export function ColorlessText(props: TextProps & ThemeTextProps) {
  const { style, bold, ...otherProps } = props;
  const fontFamily = useAppFont(bold);
  return <DefaultText style={[props.style, fontFamily]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
  const { titleStyle, ...otherProps } = props;
  return <DefaultButton titleStyle={[props.titleStyle, { fontFamily: 'titillium' }]} {...otherProps} />;
}

export function PrimaryButton(props: ButtonProps) {
  const { titleStyle, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'primaryActiveBackground');
  return <DefaultButton buttonStyle={{backgroundColor: color, height: 50}} titleStyle={[props.titleStyle, { fontFamily: 'titillium' }]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function InnerView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'cardBackground');
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function SafeAreaView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultScrollView style={[{ backgroundColor }, { flex: 1 }, { padding: 15 }, style]} {...otherProps} />;
}
