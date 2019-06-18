import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  headerText: {
    ...fontStyle.regular,
    fontSize: 16,
    color: colors.black,
    textAlign: "center",
    width: "100%"
  },
  otherTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  searchText: {
    ...fontStyle.regular,
    fontSize: 14,
    color: colors.dodgerBlue,
    textAlign: "center",
    width: "100%",
    marginTop: 16
  }
});
export default styles;
