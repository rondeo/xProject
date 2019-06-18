import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
import { HEADER_HEIGHT } from "js/static";
import { isIphoneX } from "js/Services/index";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - 2 * HEADER_HEIGHT
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center"
  },
  panel: {
    height: Screen.height - (isIphoneX() ? 50 : 0),
    backgroundColor: colors.white,
    marginHorizontal: 10,
    flexDirection: "column",
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: "relative",
    padding: 24
  },
  headerText: {
    ...fontStyle.bold,
    fontSize: 20,
    color: colors.mineshaft
  },
  headerSubText: {
    marginTop: 16,
    ...fontStyle.regular,
    fontSize: 16,
    color: colors.black
  },
  headerSubText2: {
    marginTop: 16,
    ...fontStyle.regular,
    fontSize: 14,
    color: colors.dustyGray,
    fontStyle: "italic"
  },
  innerContainer: {
    width: "100%",
    marginTop: 16
  },
  textBoxItemContainer: {
    marginBottom: 24
  },
  signInButton: {
    backgroundColor: colors.dodgerBlue,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: "100%",
    height: 50
  },
  signInText: {
    ...fontStyle.bold,
    fontSize: 14,
    color: colors.white,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  }
});

export default styles;
