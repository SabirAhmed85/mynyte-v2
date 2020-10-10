import { StyleSheet } from "react-native";

const styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingBottom: 10,
    height: '100%'
  },
  pageMenuHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4c4b4b',
    padding: 15
  },
  pageMenuHeaderContainerAlt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.primaryActiveBackground,
    padding: 15
  }
});

export default styles;
