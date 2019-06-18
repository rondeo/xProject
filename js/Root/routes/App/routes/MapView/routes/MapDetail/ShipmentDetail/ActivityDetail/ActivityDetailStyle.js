import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "column",
    flexShrink: 0,
    position: "relative"
  },
  verticalLine: {
    left: 40,
    position: "absolute",
    borderLeftWidth: 1,
    width: 1,
    height: "100%",
    borderColor: colors.silver
  }
});
export default styles;
