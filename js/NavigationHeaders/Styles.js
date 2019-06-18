import { StyleSheet, Platform } from "react-native";
import { colors } from "../UIElements/colors";
import { fontStyle } from "js/static";

export default (styles = StyleSheet.create({
  headerLeftContainer: {
    paddingRight: 16,
    height: "100%",
    paddingLeft: 24,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center"
  },
  headerRightContainer: {
    height: "100%",
    paddingRight: 24,
    paddingLeft: 16,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center"
  },

  headerRightText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
    width: 64
  },
  headerLeftText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    width: 64
  },
  headerTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1
  }
}));
