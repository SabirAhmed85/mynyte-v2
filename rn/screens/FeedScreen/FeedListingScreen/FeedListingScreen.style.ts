import { StyleSheet } from "react-native";

const styles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingBottom: 10,
    height: '100%',
  },
  contentContainer: {
    padding: 15
  },
  pageMenuHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageMenuHeaderContainerAlt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.primaryActiveBackground,
    padding: 15
  },
  pageMenuHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '80%'
  },
});

export default styles;
