import { StyleSheet } from 'react-native';

const nativeElemsStyles = (theme: any) => ({
  container: {
    padding: 0,
    marginTop: 0,
    marginLeft: 15,
    marginBottom: 15,
    backgroundColor: theme.cardBackground,
    borderWidth: 0,
    borderRadius: 4,
    overflow: "hidden" as "hidden",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
});

const styles = (theme: any, offerIsExclusive?: boolean) =>
  StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: !!offerIsExclusive ? theme.primaryActiveColor : '#4c4a4a',
      borderBottomWidth: 2,
      paddingTop: 5,
      paddingLeft: 13,
      paddingRight: 11,
      paddingBottom: 6,
    },
    title: {
      fontWeight: 'normal',
      textAlign: 'left',
      color: theme.primaryColor,
      fontFamily: 'titillium',
      marginBottom: 0,
    },
    titleRight: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    titleImage: {
      width: 45,
      height: 45,
      borderRadius: 45,
      borderColor: theme.primaryColorInverse,
      borderWidth: 1
    },
    note: {
      textAlign: 'right',
      marginRight: 10,
      color: '#ff0000',
    },
    offerBody: {
      paddingTop: 15,
      paddingBottom: 10,
      paddingLeft: 13,
      paddingRight: 13,
    },
    description: {
      paddingBottom: 15,
    },
  });

export { nativeElemsStyles, styles };
