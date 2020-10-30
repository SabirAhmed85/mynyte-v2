import { StyleSheet } from 'react-native';

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
      elevation: !!clickable ? 1 : 0,
    },
    containerAlt: {
      flexDirection: 'row',
      height: 68,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: '#484444',
      borderBottomWidth: 1
    },
  });

export default styles;
