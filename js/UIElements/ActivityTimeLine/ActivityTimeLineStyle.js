import { StyleSheet, Platform } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 24,
    position: "relative",
    justifyContent: "center",
    marginBottom: 16
  },
  line: {
    width: "100%",
    height: 4,
    backgroundColor: colors.silver,
    position: "relative"
  },
  greenLine: {
    left: 0,
    height: 4,
    backgroundColor: colors.christi,
    position: "absolute"
  },
  iconContainer: {
    position: "absolute"
  },
  locationIconContainer: {
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center"
  },
  blackDot: {
    marginTop: 4,
    backgroundColor: colors.black,
    width: 4,
    height: 4,
    borderRadius: 2
  },
  iconOuterShadow: {
    opacity: 0.08,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  },
  sequanceIconContainer: {
    borderRadius: 12,
    height: 24,
    width: 24,
    backgroundColor: colors.christi,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  sequanceText: {
    textAlign: "center",
    ...fontStyle.medium,
    color: colors.white,
    fontSize: 16
  },
  portIconContainer: {
    borderRadius: 12,
    height: 24,
    width: 24,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  containerIconContainer: {
    flexShrink: 0,
    position: "relative",

    width: 200
  },
  containerText: {
    // textAlign: "center",
    top: 30,
    left: -20,
    ...fontStyle.light,
    color: colors.black,
    position: "absolute",
    fontStyle: "italic",
    fontSize: 12
  }
});

export default styles;
