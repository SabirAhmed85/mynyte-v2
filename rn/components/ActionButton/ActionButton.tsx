import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../../config/ThemeManager';
import { Button } from '../Themed';
import { styles } from './ActionButton.style';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StretchBar } from '../../components/StretchBar/StretchBar';

interface ActionButtonProps extends ActionButtonIconProps, ActionButtonSharedProps {
  title: string;
  onPress: (props: any) => any;

  minHeight: number;
  paddingY: number;
  withIndicator: boolean;
  fullFlex: boolean;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  indicatorColor?: string;
}

type ActionButtonSharedProps = {
  active: boolean;
  color: string;
  disabled: boolean;
  activeColor: string;
  disabledColor: string;
};

type ActionButtonIconProps = {
  icon?: string;
  iconSize?: string;
};

const getColor = (props: ActionButtonSharedProps) => {
  let color = props.color;

  if (!!props.active) {
    color = props.activeColor;
  }

  if (!!props.disabled) {
    color = props.disabledColor;
  }

  return color;
};

const ButtonIcon = (props: { iconProps: ActionButtonIconProps, buttonProps: ActionButtonSharedProps }) => (
  <FontAwesome5
    active={props.buttonProps.active}
    size={props.iconProps.iconSize === 'large' ? 21 : 17}
    color={getColor(props.buttonProps)}
    name={props.iconProps.icon} />
);

export const ActionButton = (props: ActionButtonProps) => {
  const { theme } = useTheme();

  return (
    <DefaultView style={styles(props, theme).container}>
      <Button
        buttonStyle={[styles(props, theme).button, props.buttonStyle]}
        containerStyle={[ styles(props, theme).buttonContainer, props.containerStyle]}
        titleStyle={[{ fontSize: 13 }, { color: getColor(props) }, props.titleStyle]}
        icon={props.icon ? 
          ButtonIcon({ iconProps: { icon: props.icon, iconSize: props.iconSize }, buttonProps: { active: props.active, color: props.color, disabled: props.disabled, activeColor: props.activeColor, disabledColor: props.disabledColor } }) :
          false}
        type='clear'
        title={props.title}
        onPress={props.onPress} />
      {!!props.withIndicator &&
      <StretchBar showBar={props.active} style={{ backgroundColor: props.indicatorColor }} />
      }
    </DefaultView>
  )
};

ActionButton.defaultProps = {
  iconSize: 'small',
  color: '#eeeeee',
  active: false,
  disabled: false,
  minHeight: 60,
  paddingY: 12,
  withIndicator: false,
  fullFlex: true,
};
