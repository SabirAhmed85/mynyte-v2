import { StyleSheet } from "react-native";

export default (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
  actionButtonsRow: {
    marginTop: 8,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    borderBottomColor: theme.listItemBorderColor,
    borderBottomWidth: 1,
    marginBottom: 10
  },
});
