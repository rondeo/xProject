import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexShrink: 0,
    width: "100%",
    paddingHorizontal: 24
  },
  addButtonContainer: {
    width: "100%",
    borderWidth: 1,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.silver,
    height: 64,
    paddingHorizontal: 16,
    flexDirection: "row",
    // marginBottom: 16,
    flexShrink: 0
  },
  addButtonDetailContainer: {
    marginLeft: 16,
    flexDirection: "column",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonText: {
    ...fontStyle.bold,
    fontSize: 18,
    color: colors.dodgerBlue,
    marginBottom: 4
  },
  addButtonSubText: {
    ...fontStyle.light,
    fontSize: 12,
    color: colors.mineshaft
  }
});

export default styles;
