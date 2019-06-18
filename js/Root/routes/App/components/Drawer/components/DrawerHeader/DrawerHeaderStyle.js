import { StyleSheet, Dimensions } from "react-native";
import { HEADER_HEIGHT, HEADER_PADDING_TOP } from "js/static";
import { colors } from "js/UIElements/colors";

export default (styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.black,
    flexDirection: "row"
  },
  headerLeft: {
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  headerTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1
  }
}));
