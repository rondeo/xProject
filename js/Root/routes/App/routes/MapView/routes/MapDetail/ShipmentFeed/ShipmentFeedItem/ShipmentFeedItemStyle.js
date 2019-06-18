import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    borderColor: colors.silver,
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative"
  },
  topContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 8
  },
  topLeftContainer: {
    flexBasis: "90%",
    flexDirection: "row"
  },
  topRightContainer: {
    alignItems: "flex-end",
    flexBasis: "10%",
    padding: 5
  },

  menuButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 32,
    marginTop: -16,
    marginRight: -24,
    backgroundColor: "transparent"
  },

  detailTitleContainer: {
    flex: 1,
    marginLeft: 16
  },
  titleText: {
    fontSize: 16,
    color: colors.black,
    height: 20,
    ...fontStyle.bold
  },
  subTitleTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  subTitleText1: {
    fontSize: 12,
    color: colors.silverChalice,
    ...fontStyle.regular,
    width: 30
  },
  subTitleText2: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    ...fontStyle.regular
  },
  detailTextContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  fromText: {
    flexBasis: "75%",
    fontSize: 12,
    color: colors.black,
    ...fontStyle.light
  },
  toText: {
    flexBasis: "70%",
    fontSize: 12,
    color: colors.black,
    ...fontStyle.regular
  },
  etaText: {
    flexBasis: "25%",
    fontSize: 10,
    textAlign: "right",
    color: colors.black,
    ...fontStyle.regular
  },
  dateText: {
    flexBasis: "30%",
    fontSize: 14,
    textAlign: "right",
    color: colors.black,
    ...fontStyle.bold
  },
  footerTextContainer: {
    marginTop: 16,
    width: "100%",
    flexDirection: "column"
  },
  footerText: {
    fontSize: 12,
    textAlign: "right",
    color: colors.black,
    ...fontStyle.regular
  },
  footerSubText: {
    fontSize: 12,
    textAlign: "right",
    color: colors.black,
    ...fontStyle.light
  },
  linearGradientContainer: {
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
  },
  popoverMenuContainer: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    borderColor: colors.silver,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: "absolute",
    right: -12,
    top: 16,
    elevation: 5,
    paddingVertical: 8
  },
  popoverMenuItemTitleText: {
    paddingHorizontal: 8,
    height: 20,
    fontSize: 14,
    color: colors.black,
    ...fontStyle.regular
  },
  menuTrigger: {
    width: 48,
    height: 48
  }
});
export default styles;
