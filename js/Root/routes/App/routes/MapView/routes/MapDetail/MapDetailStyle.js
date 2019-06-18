import { StyleSheet, Dimensions, Platform } from "react-native";
import { HEADER_HEIGHT, STATUS_BAR_HEIGHT } from "js/static";
import { colors } from "js/UIElements/colors";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -HEADER_HEIGHT,
    marginBottom: -HEADER_HEIGHT
  }
});
export default styles;
