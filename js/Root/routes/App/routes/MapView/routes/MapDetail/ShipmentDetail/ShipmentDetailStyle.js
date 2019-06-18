import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";

import { fontStyle } from "js/static";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - 75
};
const styles = StyleSheet.create({
  scrollList: {
    width: "100%",
    paddingBottom: 32
  },
  tabsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative"
    // backgroundColor: colors.white
  },
  tab: {
    width: Screen.width / 2.5,
    height: 32,
    borderWidth: 1,
    borderColor: colors.dustyGray,
    alignItems: "center",
    justifyContent: "center"
  },
  tabText: {
    fontSize: 16,
    color: colors.dustyGray,
    ...fontStyle.regular,

    textAlign: "center"
  },
  tabSelectedText: {
    fontSize: 16,
    color: colors.white,
    ...fontStyle.bold,
    textAlign: "center"
  },
  tabLine: {
    width: "100%",
    borderTopWidth: 1,
    borderColor: colors.silver,
    position: "absolute",
    top: 16
  },
  detailContainer: {
    width: "100%",
    marginTop: -16,
    paddingVertical: 48,
    backgroundColor: colors.white
  },
  headerTitleText: {
    ...fontStyle.medium,
    color: colors.black,
    textAlign: "center",
    fontSize: 18
  }
});
export default styles;
