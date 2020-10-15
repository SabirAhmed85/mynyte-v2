import { StyleSheet } from 'react-native';

const nativeElemsStyles = (theme: any) => ({
  container: {
    padding: 0,
    width: '100%',
    paddingBottom: 5,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 25,
    backgroundColor: theme.cardBackground,
    borderColor: theme.cardBorderColor,
    borderRadius: 4,
    overflow: "hidden" as "hidden",
  },
});

const styles = (theme: any) =>
  StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 0,
    },
    pageMenuHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
    },
    title: {
      fontWeight: 'normal',
      textAlign: 'left',
      padding: 5,
      marginBottom: 5,
      color: theme.primaryColor,
      fontFamily: 'titillium',
    },
    note: {
      textAlign: 'right',
      padding: 5,
      marginBottom: 5,
      color: '#ff0000',
    },
    offerBody: {
      paddingTop: 0,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    description: {
      paddingBottom: 10,
    },
  });

export { nativeElemsStyles, styles };
