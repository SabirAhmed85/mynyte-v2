import { StyleSheet } from 'react-native';

const containerShadow = (theme: any, clickable?: boolean) => !!clickable ? ({
  elevation: 1,
  shadowColor: theme.shadowColor,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
}) : ({});

const styles = (theme?: any, clickable?: boolean) =>
  StyleSheet.create({
    container: {
      marginTop: 2,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 5,
      backgroundColor: theme.listItemBackground,
      borderRadius: 5,
      flexDirection: 'row',
      height: 68,
      alignItems: 'center',
      justifyContent: 'space-between',
      ...containerShadow(theme, clickable)
    },
  });

export default styles;
