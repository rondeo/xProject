import { StyleSheet, Dimensions } from "react-native";
import { HEADER_HEIGHT, HEADER_PADDING_TOP } from "js/static";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: "100%",
    height: "100%"
  },
  content: {
    paddingVertical: 24,
    width: "100%",
    flexDirection: "column"
  },
  menuContainer: {
    width: "100%",
    flexDirection: "column",
    flexShrink: 0
  },
  menuItem: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16,
    alignItems: "center",
    flexShrink: 0
  },
  menuItemText: {
    flex: 1,
    ...fontStyle.bold,
    fontSize: 16,
    color: colors.white
  },
  menuIcon: {
    width: 24,
    marginRight: 16,
    alignItems: "center"
  },
  subMenuContainer: {
    paddingLeft: 32,
    width: "100%",
    flexDirection: "column",
    marginBottom: 16,
    flexShrink: 0
  },
  subMenuItem: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 24,
    alignItems: "center"
  },
  subMenuItemText: {
    flex: 1,
    ...fontStyle.regular,
    fontSize: 16,
    color: colors.silverChalice
  },
  subMenuIcon: {
    width: 24,
    marginRight: 16,
    alignItems: "center"
  },
  subDetailMenuContainer: {
    width: "100%",
    flexDirection: "column",
    flexShrink: 0
  },
  detailMenuContainer: {
    width: "100%",
    flexDirection: "column",
    flexShrink: 0,
    marginBottom: 8
  },
  detailMenuItem: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16,
    flexShrink: 0
  },
  detailMenuItemText: {
    flex: 1,
    ...fontStyle.bold,
    fontSize: 16,
    color: colors.white
  }
});

export default styles;
