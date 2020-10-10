import { StyleSheet } from 'react-native';

const nativeElemsStyles = (theme: any) => ({
  container: {
    width: '100%',
    padding: 0,
    margin: 0,
    marginBottom: 15,
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
      borderBottomColor: '#565555',
      borderBottomWidth: 1,
      backgroundColor: '#545252',
      paddingTop: 9,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 0,
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
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 13,
      paddingRight: 13,
    },
    description: {
      paddingBottom: 10,
    },
  });

export { nativeElemsStyles, styles };
