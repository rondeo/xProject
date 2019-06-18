import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexShrink: 0,
    width: "100%",
    marginBottom: 32
  },
  detailContainer: {
    marginLeft: 16,
    flexDirection: "column",
    flexShrink: 0
  },
  typeText: {
    ...fontStyle.bold,
    color: colors.black,
    fontSize: 16,
    marginBottom: 8
  },
  dateText: {
    color: colors.mineshaft,
    ...fontStyle.light,
    fontStyle: "italic",
    fontSize: 12
  }
});

export default styles;
