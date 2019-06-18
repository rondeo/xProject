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
    ...fontStyle.light,
    color: colors.mineshaft,
    paddingLeft: 0,
    marginBottom: 6,
    flexShrink: 0,
    width: "100%"
  },

  languageDropDownContainer: {
    marginBottom: 16,
    width: "100%"
  },
  languagePrefContainer: {
    width: "100%",
    flexShrink: 0,
    marginBottom: 25
  }
});
export default styles;
