import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
import { HEADER_HEIGHT } from "js/static";
import { isIphoneX } from "js/Services";
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
    ...fontStyle.regular,
    fontSize: 30,
    color: colors.mineshaft
  },
  headerSubText: {
    marginTop: 8,
    ...fontStyle.regular,
    fontSize: 12,
    color: colors.dustyGray
  },
  innerContainer: {
    width: "100%",
    marginTop: 24
  },
  textBoxItemContainer: {
    marginBottom: 24
  },
  buttonContainer: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  },

  signUpButton: {
    backgroundColor: colors.dodgerBlue,
    color: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: "60%",
    height: "100%"
  },

  signUpButtonText: {
    ...fontStyle.bold,
    fontSize: 14,
    color: colors.white,
    textAlign: "center"
  },
  cancelButton: {
    backgroundColor: colors.shadow,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: "38%",
    height: "100%"
  },

  cancelButtonText: {
    textAlign: "center",
    width: "100%",
    ...fontStyle.bold,
    fontSize: 14,
    color: colors.dustyGray
  },

  bottomTextContainer: {
    bottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  },
  copyRightText: {
    textAlign: "center",
    ...fontStyle.regular,
    fontSize: 12,
    color: colors.dustyGray
  }
});

export default styles;
