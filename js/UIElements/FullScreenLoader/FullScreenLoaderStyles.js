import { StyleSheet, Dimensions } from "react-native";
import { HEADER_PADDING_TOP, HEADER_HEIGHT } from "js/static";
const { height: ScreenHeight, width: ScreenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  loadingContainer: {
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
    flex: 1
  }
});
export default styles;
