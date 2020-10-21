import { StyleSheet } from "react-native";
import { useTheme } from '../../config/ThemeManager';

const getButtonColor = (active: boolean | undefined) => {
  const { theme } = useTheme();
  return !!active ? theme.primaryActiveColor : theme.primaryColor;
};

export const barStyles = (theme: any) => StyleSheet.create({
  cardDivider: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#4e4c4c',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 5,
    paddingRight: 5,
  },
  leftButtons: {
    width: '50%',
    alignItems: 'flex-start'
  },
  rightButtons: {
    width: '50%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export const nativeElemsButtonStyles = (props: any) => ({
  buttonTitle: {
    fontSize: 14,
    color: getButtonColor(props.active),
  }
});

export const buttonStyles = (props?: any) => StyleSheet.create({
  buttonIcon: {
    marginRight: 5,
    color: getButtonColor(props.active),
  },
});
