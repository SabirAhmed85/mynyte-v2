import { StyleSheet } from "react-native";

export default (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryHeader: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 0,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: theme.listItemBorderColor,
    borderBottomWidth: 1,
  }
});
