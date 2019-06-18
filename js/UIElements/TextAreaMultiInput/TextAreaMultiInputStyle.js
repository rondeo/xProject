import { StyleSheet } from "react-native";
import { colors } from "js/UIElements/colors";
import { fontStyle } from "js/static";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column"
  },
  containerTelephone: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10
  },
  label: {
    fontSize: 14,
    ...fontStyle.medium,
    color: colors.dustyGray,
    paddingLeft: 0,
    marginBottom: 6
  },

  errorInputContainer: {
    borderColor: colors.monza
  },
  telephoneTypeStyle: {
    borderWidth: 1,
    borderColor: colors.silver,
    fontSize: 14,
    color: colors.mineshaft,
    borderRadius: 4
  },

  error: {
    fontSize: 13,
    ...fontStyle.regular,
    color: colors.monza
  },
  errorView: {
    marginTop: 6,
    height: 16
  },
  inputContainer: {
    width: "100%"
  },
  dropDownInputContainerStyle: {
    paddingLeft: 8,
    borderBottomColor: "transparent",
    alignItems: "center",
    color: colors.mineshaft
  },
  telephoneTypeContainer: {
    width: "30%",
    marginRight: 4
  },
  countryCodeTypeContainer: {
    width: "25%"
  },
  countryCodeTypeInputContainer: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderRightWidth: 0
  },

  rightComponent: {
    position: "absolute",
    right: 0,
    width: 30,
    paddingRight: 10,
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  pickerStyle: {
    height: 30,
    fontSize: 14,
    ...fontStyle.bold,
    color: colors.mineshaft
  },
  removeViewContainer: {
    padding: 5,
    width: "100%",
    color: colors.dodgerBlue,
    alignItems: "flex-end"
  },
  removeView: {
    color: colors.dodgerBlue,
    ...fontStyle.regular,
    fontSize: 12,
    textAlign: "right"
  },
  inputText: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
});
export default styles;
