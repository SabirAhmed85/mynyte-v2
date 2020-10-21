import { StyleSheet } from "react-native";

export const styles = (props: any, theme: any) => StyleSheet.create({
  container: {
    flexDirection: 'column',
    minHeight: props.minHeight,
    padding: 0,
    flex: !!props.fullFlex ? 1 : undefined,
  },
  button: {
    flexDirection: 'column',
    paddingTop: props.paddingY,
    paddingBottom: props.paddingY
  },
  buttonContainer: {
    borderRadius: 0,
    flex: 1,
    width: '100%',
    paddingRight: 0
  }
});