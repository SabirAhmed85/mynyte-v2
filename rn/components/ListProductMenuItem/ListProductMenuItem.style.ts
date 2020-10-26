import { StyleSheet } from 'react-native';

const styles = (theme?: any) =>
  StyleSheet.create({
    container: {
      marginTop: 2,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 5,
      backgroundColor: theme.background,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 13,
      paddingBottom: 13,
      paddingLeft: 15,
      paddingRight: 10,
      minHeight: 60,
    },
    itemLeftContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemMainContent: {
      flexDirection: 'column',
      alignSelf: 'center',
      flex: 1
    },
    itemHeadingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    itemName: {
      fontSize: 15,
      flex: 1
    },
    itemPrice: {
      fontSize: 15,
      marginLeft: 5,
      alignItems: 'flex-end'
    },
    itemDescription: {
      fontSize: 13,
      flex: 1
    },
  });

export default styles;
