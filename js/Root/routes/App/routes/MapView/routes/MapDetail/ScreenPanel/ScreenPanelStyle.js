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
    position: "relative"
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    height: 48,
    left: 0,
    right: 0,
    overflow: "hidden",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row"
  },
  cancelButton: {
    flex: 1,
    backgroundColor: colors.shadow,
    alignItems: "center",
    justifyContent: "center"
  },
  cancelButtonText: {
    textAlign: "center",
    width: "100%",
    ...fontStyle.bold,
    fontSize: 14,
    color: colors.dustyGray
  },
  saveButton: {
    flex: 1,
    backgroundColor: colors.dodgerBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  saveButtonText: {
    textAlign: "center",
    width: "100%",
    ...fontStyle.bold,
    fontSize: 14,
    color: colors.white
  },
  scrollView: {
    width: "100%",
    padding: 24,
    paddingBottom: 48
  },
  headerText: {
    ...fontStyle.regular,
    fontSize: 20,
    color: colors.mineshaft
  },
  screenContainer: {
    width: "100%",
    marginTop: 24
  }
});
export default styles;
