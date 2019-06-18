import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    marginBottom: 24
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 350
  },
  createButtonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  createButtonIcon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  menuContainer: {
    bottom: 80,
    position: "absolute",
    alignItems: "center",
    width: 152
  },
  createButtonText: {
    fontSize: 14,
    color: colors.dodgerBlue,
    ...fontStyle.regular
  },
  popoverMenuContainer: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.mineshaft,
    borderColor: colors.mineshaft,
    width: "100%",
    marginBottom: -7,
    paddingVertical: 4
  },
  menuItem: {
    height: 40,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 8,
    backgroundColor: colors.mineshaft
  },
  popoverMenuItemTitleText: {
    fontSize: 14,
    color: colors.white,
    ...fontStyle.regular,
    marginLeft: 8
  },
  menuTrigger: {
    width: 48,
    height: 48
  },
  feedContainer: {
    flexDirection: "column"
  }
});
export default styles;
