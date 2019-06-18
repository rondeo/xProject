import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 12,
    ...fontStyle.regular,
    color: colors.black,

    flexShrink: 0,
    alignSelf: "flex-start"
  },

  subTitleStyle: {
    fontSize: 10,
    ...fontStyle.light,
    color: colors.black,
    lineHeight: 14,
    flexShrink: 0,
    alignSelf: "flex-start"
  },
  innerContainer: {
    marginLeft: 6,

    flexDirection: "column",
    alignItems: "center"
  },
  radioButtonSelectedContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.dodgerBlue,
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonInsideContainer: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.whitesmoke,
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: colors.silver,
    borderWidth: 1,
    backgroundColor: colors.whitesmoke,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default styles;
