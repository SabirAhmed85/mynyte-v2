import { StyleSheet } from 'react-native';

const nativeElemsStyles = (theme: any) => ({
  container: {
    padding: 0,
    margin: 15,
    backgroundColor: theme.cardBackground,
    borderWidth: 0,
    borderRadius: 3,
    shadowColor: theme.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
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
