import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 16,
    position: "relative"
  },
  linearGradient: {
    height: 4,
    position: "absolute",
    left: 0
  },
  circleIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    flexShrink: 0,
    left: "0%",
    top: -6,
    position: "absolute",
    zIndex: 11
  }
});
export default styles;
