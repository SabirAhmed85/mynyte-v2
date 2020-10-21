import { StyleSheet } from 'react-native';

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      display: 'flex',
      backgroundColor: theme.primaryActiveBackground,
      borderBottomColor: theme.primaryActiveBorderColorFeint,
      borderBottomWidth: 1
    },
  });

export { styles };
