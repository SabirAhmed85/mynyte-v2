import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Button } from '../Themed';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface ActionButtonProps extends ActionButtonIconProps, ActionButtonSharedProps {
  title: string;
  onPress: (props: any) => any; 
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

type ActionButtonSharedProps = {
  active: boolean;
  color: string;
  disabled: boolean;
  activeColor: string;
  disabledColor: string;
};

type ActionButtonIconProps = {
  icon: string;
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

export const ActionButton = (props: ActionButtonProps) => (
  <Button
    buttonStyle={{ flexDirection: 'column', paddingTop: 12, paddingBottom: 12 }}
    containerStyle={[{ flex: 1 }, { borderRadius: 0 }, props.containerStyle]}
    titleStyle={[{ fontSize: 13 }, { color: getColor(props) }, props.titleStyle]}
    icon={ButtonIcon({ iconProps: { icon: props.icon, iconSize: props.iconSize }, buttonProps: { active: props.active, color: props.color, disabled: props.disabled, activeColor: props.activeColor, disabledColor: props.disabledColor } })}
    type='clear'
    title={props.title}
    onPress={props.onPress} />
);

ActionButton.defaultProps = {
  iconSize: 'small',
  color: '#eeeeee',
  active: false,
  disabled: false,
};