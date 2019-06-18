import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  titleStyle: {
    fontSize: 12,
    ...fontStyle.regular,
    color: colors.black,
    lineHeight: 18,
    flexShrink: 0,
    width: "100%"
  },
  subTitleStyle: {
    fontSize: 10,
    ...fontStyle.light,
    color: colors.black,
    lineHeight: 14,
    flexShrink: 0,
    width: "100%"
  },
  innerContainer: {
    marginLeft: 6,
    width: "80%",
    flexDirection: "column",
    alignItems: "center"
  },
  checkBoxSelectedContainer: {
    width: 16,
    height: 16,
    borderRadius: 3,
    backgroundColor: colors.dodgerBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  checkBoxContainer: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderColor: colors.silver,
    borderWidth: 1,
    backgroundColor: colors.whitesmoke,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
