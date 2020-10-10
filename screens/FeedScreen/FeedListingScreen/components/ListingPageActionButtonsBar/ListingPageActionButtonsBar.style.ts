import { StyleSheet } from 'react-native';

const nativeElemsStyles = (theme: any) => ({
  container: {
    width: '100%',
    padding: 0,
    margin: 0,
    marginBottom: 15,
    backgroundColor: theme.cardBackground,
    borderColor: theme.cardBorderColor,
  },
});

const styles = (theme: any) =>
  StyleSheet.create({
    title: {
      fontWeight: 'normal',
      textAlign: 'left',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 5,
      color: theme.primaryColor,
    },
    offerBody: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
  });

export { nativeElemsStyles, styles };
