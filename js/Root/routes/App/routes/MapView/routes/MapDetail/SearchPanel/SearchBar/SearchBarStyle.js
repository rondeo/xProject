import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "100%",
    position: "relative",
    justifyContent: "center"
  },
  headerSearchText: {
    ...fontStyle.regular,
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 32,
    paddingVertical: 8,
    fontStyle: "italic",
    color: colors.black
  },
  closeButton: {
    position: "absolute",
    right: 8,
    borderRadius: 10,
    width: 20,
    height: 20,
    backgroundColor: colors.dustyGray,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
