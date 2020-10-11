import { StyleSheet } from "react-native";

export const styles = (theme: any) => StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    maxWidth: 1100,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
