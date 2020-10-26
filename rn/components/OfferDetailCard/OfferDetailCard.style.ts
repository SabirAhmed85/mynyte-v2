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
    borderWidth: 1,
    borderRadius: 4,
    overflow: "hidden" as "hidden",
  },
});

const styles = (theme: any) =>
  StyleSheet.create({
    pageHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
    },
    pageHeader: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      maxWidth: '80%'
    },
    title: {
      fontWeight: 'normal',
      textAlign: 'left',
      padding: 5,
      marginBottom: 5,
      color: theme.primaryColor,
      fontFamily: 'titillium',
    },
    offerHeaderNoteContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      flex: 1,
    },
    offerHeaderNote: {
      backgroundColor: 'rgba(30, 30, 30, 0.5)',
      flex: 1,
      borderRadius: 30,
      alignSelf: 'flex-end',
      paddingTop: 10,
      paddingBottom: 10,
      margin: 10,
      paddingLeft: 15,
      paddingRight: 15
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
