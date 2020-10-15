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

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return <DefaultText style={[props.style, { color }, {fontFamily: 'titillium'}]} {...otherProps} />;
}

export function PrimaryText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'primaryActiveColor');
  return <DefaultText style={[props.style, { color }, {fontFamily: 'titillium'}]} {...otherProps} />;
}

export function PrimaryHighlightText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'primaryActiveColorHighlight');
  return <DefaultText style={[props.style, { color }, {fontFamily: 'titillium'}]} {...otherProps} />;
}

export function SecondaryText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'secondaryText');
  return <DefaultText style={[props.style, { color }, {fontFamily: 'titillium'}]} {...otherProps} />;
}

export function TertiaryText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'tertiaryText');
  return <DefaultText style={[props.style, { color }, {fontFamily: 'titillium'}]} {...otherProps} />;
}

export function DisabledText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'disabledText');
  return <DefaultText style={[props.style, { color }, {fontFamily: 'titillium'}]} {...otherProps} />;
}

export function ColorlessText(props: TextProps) {
  const { style, ...otherProps } = props;
  return <DefaultText style={[props.style, {fontFamily: 'titillium'}]} {...otherProps} />;
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
