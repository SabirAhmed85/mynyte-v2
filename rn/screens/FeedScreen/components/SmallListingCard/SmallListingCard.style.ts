import { StyleSheet } from "react-native";

const nativeElemsStyles = (theme: any) => ({
  container: {
    padding: 0,
    marginTop: 0,
    marginLeft: 2,
    marginRight: 20,
    marginBottom: 5,
    backgroundColor: theme.cardBackground,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 2,
  },
});

const styles = (theme: any) =>
  StyleSheet.create({
    container: {
      width: "70%",
      padding: 0,
      marginTop: 0,
      marginLeft: 2,
      marginRight: 20,
      marginBottom: 5,
      backgroundColor: theme.cardBackground,
      borderWidth: 0,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,
      elevation: 2,
    },
    title: {
      fontWeight: "normal",
      textAlign: "left",
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
