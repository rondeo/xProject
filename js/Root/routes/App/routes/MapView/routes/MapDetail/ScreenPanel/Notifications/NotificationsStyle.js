import { StyleSheet, Dimensions } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexShrink: 0
  },
  itemContainer: {
    marginBottom: 24
  },
  checkBoxContainer: {
    marginBottom: 8
  },
  titleStyle: {
    fontSize: 10,
    ...fontStyle.regular,
    color: colors.mineshaft,
    paddingLeft: 0,
    marginBottom: 6,
    flexShrink: 0,
    width: "100%"
  }
});
export default styles;
