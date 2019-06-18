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
  innerContainer: {
    width: "100%",
    marginTop: 24
  },
  textBoxItemContainer: {
    marginBottom: 24
  },
  checkBoxContainer: {
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
  forgotPasswordContainer: {
    marginTop: 24
  },
  forgotPasswordText: {
    ...fontStyle.regular,
    color: colors.dodgerBlue,
    fontSize: 14,
    textAlign: "center"
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 16,
    width: "100%",

    alignItems: "center",
    justifyContent: "center"
  },
  signUpButtonContainer: {
    alignItems: "center",
    marginLeft: 4
  },
  signUpText: {
    ...fontStyle.regular,
    color: colors.charcoal,
    fontSize: 14,
    width: "auto"
  },
  signUpButtonText: {
    ...fontStyle.regular,
    color: colors.dodgerBlue,
    fontSize: 14,

    width: "auto"
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
